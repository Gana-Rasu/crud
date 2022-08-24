import React from "react";
import "./Studentcard.css";
import { useNavigate} from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


function Studentcard(props) {

  const navigate = useNavigate();

  return (
    <div className="student">
      <Card sx={{ maxWidth: 275 }}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Id : {props.id}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Name : {props.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Course : {props.course}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Mentor : {props.mentor}
          </Typography>
        </CardContent>

        {/* edit and delete */}
        <div className="buttons">
          <CardActions>
              <Button size="small" onClick={()=>{navigate(`/update/${props.id}`)}} >EDIT</Button>
          </CardActions>
          <CardActions>
            <Button
              size="small"
              onClick={() => {
                fetch(
                  `https://62ac315ebd0e5d29af1cc1c8.mockapi.io/students/${props.id}`,
                  {
                    method: "DELETE",
                  }
                ).then((response) => response.json());
              }}
            >
              DELETE
            </Button>
          </CardActions>
        </div>
      </Card>
    </div>
  );
}

export default Studentcard;
