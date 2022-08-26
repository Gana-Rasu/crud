import React,{useState} from "react";
import "./Create.css";
import Button from "@mui/material/Button";
import { useNavigate} from "react-router-dom";
import TextField from "@mui/material/TextField";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function Create() {


  const navigate = useNavigate();

  // const [id,setId]=useState("");
  const [name,setName]=useState("");
  const [batch,setBatch]=useState("");
  const [course,setCourse]=useState("");
  const [mentor,setMentor]=useState("");

  return (
    <div>
    <div className="inputs">
      <TextField id="outlined-basic" label="NAME" variant="outlined" onChange={(event) => setName(event.target.value)} />
      <br />
      <TextField id="outlined-basic" label="BATCH" variant="outlined" onChange={(event) => setBatch(event.target.value)} />
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
                // id:id,
                Name:name,
                Batch:batch,
                Course:course,
                Mentor:mentor
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
    <Button

      style={{margin:"5%"}}
        variant="outlined"
        startIcon={<ArrowBackIosIcon />}
        onClick={() => {
          navigate(-1);
        }}
      >
        BACK
      </Button>
    </div>
  );
}

export default Create;
