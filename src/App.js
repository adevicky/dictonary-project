import "./App.css";
import Dictionary from "./Dictionary";

export default  function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <h1 className="heading">Dictionary</h1>
      </header>
      <main>
        <Dictionary defaultKeyword="Sunrise" />
      </main>
      <footer className="footer"><span>Created By <a href="adenugavictoria29@gmail.com">Adenuga Victoria</a> | <span class="far fa-copyright"></span>
        2023 <a href="https://www.github.com/adevicky" target="_blank" rel="noreferrer" title="Adenuga Victoria-Github profile">Privacy
            Policy</a></span></footer>
      </div>
    </div>
  );
}
