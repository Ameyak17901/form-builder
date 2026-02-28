import { Button, TextField } from "@mui/material";
import type { FieldType } from "../../types/FieldType";
import { useState } from "react";
import { UpdateOptions } from "./UpdateOptions";

interface Props {
  field: FieldType;
  setSelectedField: React.Dispatch<React.SetStateAction<FieldType | null>>;
  setDroppedFields: React.Dispatch<React.SetStateAction<FieldType[]>>;
}

const UpdateSettings = ({
  field,
  setSelectedField,
  setDroppedFields,
}: Props) => {
  const [label, setLabel] = useState(field.label);
  const [options, setOptions] = useState(field.options);
  const [validations, setValidations] = useState(field.validations);

  const updateField = () => {
    setSelectedField({
      ...field,
      label,
      options,
      validations: validations,
    });

    setDroppedFields((prev) => [
      ...prev.filter((f) => f.id !== field.id),
      { ...field, label, options, validations },
    ]);
  };
  return (
    <div className="flex flex-col gap-5 ">
      <div className="flex w-full">
        <TextField
          label="Label"
          value={label}
          onChange={(e) => {
            setLabel(e.target.value);
          }}
        />
      </div>

      {options && (
        <div className="flex flex-col gap-1 p-2">
          <h2 className="flex self-">Options</h2>
          {options.map((option) => (
            <UpdateOptions
              key={option.id}
              id={option.id}
              label={option.label}
              value={option.value}
              setOptions={setOptions}
            />
          ))}
        </div>
      )}

      <TextField
        type="number"
        label="Max Length"
        value={validations?.maxLength}
        onChange={(e) =>
          setValidations({ ...validations, maxLength: Number(e.target.value) })
        }
      />
      {/* <RadioButton
        label="Required"
        type="radio"
        value={validations?.required || false}
        options={[
          { id: nanoid(), label: "Yes", value: "true" },
          { id: nanoid(), label: "No", value: "false" },
        ]}
      /> */}

      <div className="flex justify-center bottom-0">
        <Button variant="contained" size="small" onClick={updateField}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default UpdateSettings;
