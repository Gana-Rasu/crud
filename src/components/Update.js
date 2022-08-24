import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function Update() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="inputs">
        <TextField id="outlined-basic" label="ID" variant="outlined" />
        <br />
        <TextField id="outlined-basic" label="NAME" variant="outlined" />
        <br />
        <TextField id="outlined-basic" label="COURSE" variant="outlined" />
        <br />
        <TextField id="outlined-basic" label="MENTOR" variant="outlined" />
        <br />

        <Button
          variant="contained"
          onClick={() => {
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

export default Update;
