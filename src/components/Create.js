import React,{useState} from "react";
import "./Create.css";
import Button from "@mui/material/Button";
import { useNavigate} from "react-router-dom";
import TextField from "@mui/material/TextField";

function Create() {


  const navigate = useNavigate();

  const [id,setId]=useState("");
  const [name,setName]=useState("");
  const [course,setCourse]=useState("");
  const [mentor,setMentor]=useState("");

  return (
    <div className="inputs">
      <TextField id="outlined-basic" label="ID" variant="outlined" onChange={(event) => setId(event.target.value)} />
      <br />
      <TextField id="outlined-basic" label="NAME" variant="outlined" onChange={(event) => setName(event.target.value)} />
      <br />
      <TextField id="outlined-basic" label="COURSE" variant="outlined" onChange={(event) => setCourse(event.target.value)} />
      <br />
      <TextField id="outlined-basic" label="MENTOR" variant="outlined" onChange={(event) => setMentor(event.target.value)} />
      <br />

      <Button
        variant="contained"
        onClick={() => {
          fetch(
            `https://62ac315ebd0e5d29af1cc1c8.mockapi.io/students`,{
              method:'POST',
              body:JSON.stringify({
                id:id,
                name:name,
                course:course,
                mentor:mentor
              }),
              headers:{
                "Content-Type":"application/json",
              },
            }
          ).then((response) => response.json());
        
          navigate("/");
        }}
      >
        SUBMIT
      </Button>
    </div>
  );
}

export default Create;
