import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

function Bottom() {
  const [value, setValue] = React.useState(0);

  return (
    <Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Completed" />
        <BottomNavigationAction label="In Progress" />
        <BottomNavigationAction label="All Task" />
      </BottomNavigation>
    </Box>
  );
}

export default Bottom;
