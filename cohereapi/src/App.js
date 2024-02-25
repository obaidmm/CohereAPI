import logo from './logo.svg';
import './App.css';
import {React, useState} from 'react'

function App() {
  const [page, setPage] = useState("Homepage");

  return (
    <div className="App">
     {page === "Homepage" ? <div>Homepage content</div> : null}
    </div>
  );
}

export default App;
