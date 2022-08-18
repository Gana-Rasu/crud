import React from "react";
import { Routes, Route, Link} from "react-router-dom";
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";
import Delete from "./components/Delete";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <>
          <h1>STUDENT MANAGEMENT</h1>
          <ul>
          <li>
          <Link to="/create">Create</Link>
          </li>
          <li>
          <Link to="/read">Read</Link>
          </li>
          <li>
          <Link to="/update">Update</Link>
          </li>
          <li>
          <Link to="/delete">Delete</Link>
          </li>
          </ul>
          </>
          
        
      <Routes>
        <Route path="/create" element={<Create/>} />
        <Route path="/read" element={<Read/>} />
        <Route path="/update" element={<Update />} />
        <Route path="/delete" element={<Delete/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
