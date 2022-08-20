import React from 'react';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';

function Update() {
  return (
    <div className="inputs">
<TextField id="outlined-basic" label="ID" variant="outlined" /><br/>
<TextField id="outlined-basic" label="NAME" variant="outlined" /><br/>
<TextField id="outlined-basic" label="COURSE" variant="outlined" /><br/>
<TextField id="outlined-basic" label="MENTOR" variant="outlined" /><br/>

<Button variant="contained">SUBMIT</Button>

    </div>
  )
}

export default Update