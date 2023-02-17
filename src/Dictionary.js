import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";


export default function Dictionary(props){
    let [keyword, setKeyword]= useState (props.defaultKeyword);
    let [results, setResults]= useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse (response) {
    setResults(response.data[0]);
    
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
            </section>
            <Results results={results} />
        </div>
    );
    }else {
        setLoaded();
        load();
    }
    
    
}