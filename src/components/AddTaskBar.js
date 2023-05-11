import * as React from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function AddTaskBar() {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <div>
        <TextField
          id="outlined-start-adornment"
          sx={{ m: 1, width: "25ch" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Add a new task</InputAdornment>
            ),
          }}
        />
        <Button variant="contained">Add Task</Button>
      </div>
    </Box>
  );
}
export default AddTaskBar;
