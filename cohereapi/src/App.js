import logo from './logo.jpeg';
import './App.css';
import {React, useState} from 'react'
import HomePage from './Pages/HomePage'
import Header from './Pages/Header'

function App() {
  const [page, setPage] = useState("Header");

  
  return (
    <div className="App"> 
    {page === "Header" ? <Header/>: null}
    </div>
  );
}

export default App;
