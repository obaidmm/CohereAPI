import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'; 
import HomePage from './Pages/HomePage';
import Chatbox from './Pages/Chatbox/Chatbox';

function App() {
  const [page, setPage] = useState("HomePage");

  return (
    <div className="App">
      {page === "HomePage" ? <HomePage/> : null}
      {page === "Chatbox" ? <Chatbox/> : null}
    </div>
  );
}

export default App;
