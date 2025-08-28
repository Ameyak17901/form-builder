import { InputLabel, TextField } from "@mui/material";
import { useState } from "react";

interface Props {
  type: string;
  label: string;
  placeholder?: string;
}


export const TextInput = ({ type, label, placeholder }: Props) => {
  const [value, setValue] = useState("");
  return (
    <div className="flex flex-col gap-x-2 justify-between rounded-lg ">
      <InputLabel>{label}</InputLabel>

      <TextField
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
