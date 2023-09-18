import React from 'react';
import './App.css';
import NavBar from '../Components/navBar/navBar';
import TitleSection from '../Components/titleSection/titleSection';
import Aboutme from '../Components/aboutme/aboutme';
import HardSkills from '../Components/hardSkills/hardSkils';


function App() {
  return (
    <div className='app'>
      <NavBar />
      <TitleSection />
      <Aboutme />
      <HardSkills />
    </div>
  );
}

export default App;