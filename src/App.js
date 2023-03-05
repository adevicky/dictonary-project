import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default  function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <h1 className="text-center mt-2">VicCodes</h1>
      </header>
      <main>
        <Dictionary defaultKeyword="Sunrise" />
      </main>
      <footer className="text-center">Coded by VicCodes</footer>
      </div>
    </div>
  );
}
