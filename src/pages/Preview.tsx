import { useLocation, useNavigate } from "react-router";
import type { FieldType } from "../types/FieldType";

import { Field } from "../components/Field";
import { Button } from "@mui/material";

export const Preview = () => {
  const fields = useLocation().state as FieldType[];
  console.log(fields);

  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full py-3 px-3 w-full items-center bg-white">
      <div className="flex w-full justify-start px-3">
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </Button>
      </div>
      <div className="flex flex-col items-center gap-y-3 border min-h-[90dvh] rounded-lg min-w-[70vw] p-3">
        <h2>Form 1</h2>
        <div className="flex flex-col gap-y-2 w-[40%]">
          {fields
            ? fields.map((field) => <Field key={field.id} field={field} />)
            : null}
        </div>
      </div>
    </div>
  );
};
