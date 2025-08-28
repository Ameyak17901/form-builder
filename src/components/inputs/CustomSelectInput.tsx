
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import type { Option } from "../../types/FieldType";

interface Props {
  label: string;
  type: string;
  options?: Option[];
}

export const SelectInput = ({ label, options }: Props) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (e: SelectChangeEvent) => {
    setSelectedValue(e.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="select-label">{label}</InputLabel>
      <Select
        labelId="select-label"
        className="flex w-full"
        label={label}
        value={selectedValue}
        onChange={handleChange}
      >
        {options &&
          options.map((option) => (
            <MenuItem key={option.id} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};
