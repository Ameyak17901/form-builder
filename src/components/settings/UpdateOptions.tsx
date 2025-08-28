import type { UniqueIdentifier } from "@dnd-kit/core";
import { Button, Paper, TextField } from "@mui/material";
import { useState } from "react";
import type { Option } from "../../types/FieldType";
import { nanoid } from "nanoid";

interface Props {
  id: UniqueIdentifier;
  label: string;
  value: string;
  setOptions: React.Dispatch<React.SetStateAction<Option[] | undefined>>;
}

export const UpdateOptions = ({ id, label, value, setOptions }: Props) => {
  const [newLabel, setNewLabel] = useState(label);
  const [newValue, setNewValue] = useState(value);

  const handleUpdate = (option: Option) => {
    setOptions((prev) => {
      const options = prev
        ? [...prev.filter((option) => option.id !== id), option]
        : undefined;
      console.log(options);
      return options;
    });
  };

  const addOption = (option: Option) => {
    setOptions((prev) => (prev ? [...prev, option] : undefined));
  };

  return (

    <Paper elevation={2} className="flex flex-col justify-between items-center gap-x-2 gap-y-2 p-3" component='section'>
      <div key={id} className="flex w-full gap-1">
        <TextField
          value={newLabel}
          label="Label"
          onChange={(e) => setNewLabel(e.target.value)}
        />
        <TextField
          value={newValue}
          label="Value"
          onChange={(e) => setNewValue(e.target.value)}
        />
      </div>
      <div className="flex gap-x-1">
        <Button
          variant="contained"
          size="small"
          onClick={() =>
            addOption({ id: nanoid(), label: newLabel, value: newValue })
          }
        >
          Add
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => handleUpdate({ id, label: newLabel, value: newValue })}
        >
          Save
        </Button>
      </div>
    </Paper>
  );
};
