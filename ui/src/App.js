
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "./elements/header";
import Footer from "./elements/footer";
import NavBar from './elements/navBar/NavBar';
import SideNav from './elements/sideNav/SideNav';
import './App.scss';
import Content from './elements/content/Content';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/home'); //Redirecting to /home when the App component mounts
  }, [navigate]);
  
  
  return (
    <div className="App">
      <header className="App-header shadow-lg">
        <Header />
      </header>
      <div className="App-body">
        <div>
          <NavBar />
        </div>
        <br/>
        <div className="d-flex">
          <SideNav />
          <Content />
        </div>
      </div>
      <footer className="App-header shadow-lg">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
