import { Button, Grid } from "@mui/material";
import { Form } from "../components/Form";
import { useForm } from "../hooks/useForm";
import type { FormType } from "../types/FormType";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router";

export const Forms = () => {
  const data = useForm();
  console.log(data);

  const navigate = useNavigate();

  if (!data || data.length === 0)
    return (
      <div className="flex flex-col w-full items-center justify-center gap-1">
        <p>No Forms?</p>
        <Link className="text-blue-500 hover:text-blue-600" to="/create">Create one</Link>
      </div>
    );

  return (
    <div className="flex flex-col w-full justify-center items-center min-h-full gap-4">
      <div className="flex justify-start items-start w-fit">
        <Button
          variant="contained"
          size="medium"
          color="primary"
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </Button>
      </div>
      <Grid size={3} container spacing={1}>
        {data
          ? data.map((form: FormType) => {
              return <Form key={form.id} fields={form.fields} id={form.id} />;
            })
          : null}
      </Grid>
    </div>
  );
};
