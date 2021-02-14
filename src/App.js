import React from 'react';
import './App.css';
import MainVideo from './Components/MainVid';
import SuggestionVideos from './Components/Suggestion';


// Rows must be placed within a
//  .container (fixed-width) or .container-fluid (full-width) for proper alignment and padding

function App() {
  return (
    <div className='container-fluid'>
  
        
      <div className='row mt-3'>
     
        <MainVideo />
        
        <SuggestionVideos />
        
        
        
      </div>
    
      
    </div>
  );
}

export default App;


