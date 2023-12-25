import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function TextForm() {
  const [textValue, setTextValue] = useState("");
  const handleOnChange = (event) => {
    setTextValue(event.target.value);
  };

  const handleOnUpperClick=()=>{
    const upperValue=textValue.toUpperCase()
    setTextValue(upperValue)
  }
  return (
    <>
      <div style={{ width: "60%", margin:"auto" }}>
        <h2>Enter Text Here</h2>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              maxRows={4}
              value={textValue}
              onChange={handleOnChange}
            />
          </div>
        </Box>
        <Button variant="contained" onClick={handleOnUpperClick} style={{ marginTop: "10px" }}>
          Submit
        </Button>
        <div style={{ marginTop: "10px" }}>Your VALUE IS {textValue}</div>
      </div>
    </>
  );
}
