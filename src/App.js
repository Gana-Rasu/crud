import React from "react";
import { Routes, Route, Link,useNavigate } from "react-router-dom";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";
import Home from "./components/Home";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function App() {
  // const navigate = useNavigate();
  return (
    <div className="App">
      <BrowserRouter>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar className="appbar" position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                STUDENT MANAGEMENT
              </Typography>
{/* 
              <Button color="inherit" onClick={() => navigate("/create")}>
                Create
              </Button> */}

              <Button color="inherit">
                <Link to="/create">Create</Link>
              </Button>

              <Button color="inherit">
                <Link to="/read">Read</Link>
              </Button>

              <Button color="inherit">
                <Link to="/update">Update</Link>
              </Button>

            </Toolbar>
          </AppBar>
        </Box>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} />
       
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
