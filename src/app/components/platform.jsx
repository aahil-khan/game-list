import React from "react";
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';



function PlatformSelect(props){
  const [platformValue, setPlatformValue] = React.useState("");

    function handlePlatformSelect(event){
        setPlatformValue(event.target.value);
        props.onChange(event.target.value);
      }

    return(
        <FormControl style={{backgroundColor:"#577B8D"}} fullWidth>
              <InputLabel id="demo-simple-select-label">Platform</InputLabel>
              <Select required
                labelId="demo-simple-select-label"
                id="platform-select"
                value={platformValue}
                label="Platform"
                onChange={handlePlatformSelect}
              >
                <MenuItem value="PS2">PS2</MenuItem>
                <MenuItem value="PS3">PS3</MenuItem>
                <MenuItem value="PS4/PS5">PS4/PS5</MenuItem>
                <MenuItem value="Nintendo Switch">Nintendo Switch</MenuItem>
                <MenuItem value="PC">PC</MenuItem>
                </Select>
        </FormControl>
    )
}

export default PlatformSelect;