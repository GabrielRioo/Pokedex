import * as React from "react";
import { Box, InputLabel, MenuItem, FormControl } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      overflowStyle: "none"
      // width: 200,
    },
  },
};



export function Filter(props: any) {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <>
      <Box sx={{ minWidth: 120, margin: '20px 10px 0 10px' }}>
        <FormControl fullWidth size="small">
          <InputLabel id="demo-simple-select-label">{props.nameFilter}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label={props.nameFilter}
            onChange={handleChange}
            MenuProps={MenuProps}
            
          >
            {props.options.map((item: string) => {
              return(
                <MenuItem key={item} value={item}>{item}</MenuItem>
              )
            })}
          </Select>
        </FormControl>
      </Box>
    </>
  );
}
