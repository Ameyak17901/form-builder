import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

import type { UniqueIdentifier } from "@dnd-kit/core";
interface Props {
  label: string;
  options?: { id: UniqueIdentifier; label: string; value: string }[] | undefined;
  type: string;
}

export const RadioButton = ({ label, options }: Props) => {
  
  return (
    <FormControl className="border border-slate-300 hover:border-slate-500" >
      <FormLabel>{label}</FormLabel>
      <RadioGroup aria-label={label} name={label}>
        {options && options.map((option) => (
          <FormControlLabel
            control={<Radio />}
            label={option.label}
            value={option.value}
            key={option.id}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
