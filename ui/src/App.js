import logo1 from "./images/logo1.png";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="logo1" src={logo1} alt="Not found"/>
        {/* <iframe title="Logo Maker" src="/images/logo-maker/logo-maker.html" className="App-logo" alt="logo" /> */}
      </header>
    </div>
  );
}

export default App;
