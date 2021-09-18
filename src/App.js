import React from 'react';
import './App.css';
import MainVideo from './Components/MainVid';
import SuggestionVideos from './Components/Suggestion';
import Navbar from './Components/NavBar'


function App() {
  return (
    <div className='container-fluid'> 
    <Navbar/> 
      <div className='row mt-3'>
        <MainVideo/>
        <SuggestionVideos />  
      </div>
     
    </div>
    
  );
}

export default App;


