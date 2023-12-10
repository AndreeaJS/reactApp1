import logo1 from "./images/logo1.png";
import './App.scss';
import Header from "./elements/header";
import Footer from "./elements/footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className="App-body">
        <img className="logo1" src={logo1} alt="Not found"/>
      </div>
      <footer className="App-header">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
