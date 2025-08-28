import { useNavigate } from "react-router-dom";
import type { FieldType } from "../types/FieldType";
import { Field } from "./Field";
import { Close } from "@mui/icons-material";
import { useForm } from "../hooks/useForm";
import type { FormType } from "../types/FormType";
import type { UniqueIdentifier } from "@dnd-kit/core";
import { Button, Grid } from "@mui/material";

interface Props {
  fields: FieldType[];
  id: UniqueIdentifier;
}

export const Form = ({ fields, id }: Props) => {
  const navigate = useNavigate();
  let data = useForm() as FormType[];

  const deleteForm = (id: string | number) => {
    data = data.filter((form) => form.id !== id);
    localStorage.setItem("forms", JSON.stringify(data));
  };

  return (
    <Grid className="flex flex-col border rounded-lg w-fit px-2">
      <div className="flex justify-end">
        <Button
          variant="text"
          color="info"
          className="flex w-fit"
          onClick={() => {
            deleteForm(id);
          }}
        >
          <Close className="flex justify-end" />
        </Button>
      </div>
      <div
        onClick={() => {
          navigate("/preview", { state: fields });
        }}
      >
        <div className="flex flex-col gap-2">
          {fields.map((field) => (
            <Field key={field.id} field={field} />
          ))}
        </div>
      </div>
    </Grid>
  );
};
