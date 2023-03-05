import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
import Photos from "./Photos";


export default function Dictionary(props){
    let [keyword, setKeyword]= useState (props.defaultKeyword);
    let [results, setResults]= useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos]= useState(null);

    function handleResponse (response) {
    setResults(response.data[0]);
    
    }

    function handelPexelReponse (response) {
        setPhotos(response.data.photos)
    }  

    function handleSubmit (event){
        event.preventDefault();
        search();
    } 
    function load(){
        setLoaded(true);
        search();
    }
    function search() {
      //Documentaion:dictionaryapi.dev/
        let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);   

        
        let pexelApiKey="FCMDPVk3qvcl63v613XyHYspZSaHIUHLmz6luDmL8TjFC2Y6hjxhxmqe";
        let pexelApiUrl=`https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
       let headers= { Authorization:`Bearer ${pexelApiKey}`};
       axios.get(pexelApiUrl, {headers:headers} ).then(handelPexelReponse); 
    }
    function handleKeywordChange(event) {
    setKeyword(event.target.value);
    }if(loaded) {
return (
        <div className="Dictionary">
            <section>
                <h1 className="text">What do you want to look up for?</h1>
            <form onSubmit={handleSubmit}>
                <input type="search" onChange={handleKeywordChange} />
            </form>
            <div className="hint">
                Suggested words: Sunset, Yoga, Diet, Wine...
            </div>
            </section>
            <Results results={results} />
            <Photos photos={photos} />
        </div>
    );
    }else {
        setLoaded();
        load();
    }
    
    
}