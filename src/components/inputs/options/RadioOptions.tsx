import type { UniqueIdentifier } from "@dnd-kit/core";
import { FormControlLabel, Radio } from "@mui/material";
import { useState } from "react";

interface Props {
  option: { id: UniqueIdentifier; label: string; value: string };
}

export const RadioOptions = ({ option }: Props) => {
  const [optionChecked, setOptionChecked] = useState(false);

  return (
    <FormControlLabel
      control={<Radio />}
      label={option.label}
      onClick={() => setOptionChecked(!optionChecked)}
      value={option.value}
      key={option.id}
    />
  );
};
