import type { UniqueIdentifier } from "@dnd-kit/core";
import type { FieldType } from "../types/FieldType";
import { RadioButton } from "./inputs/RadioButton";
import { TextInput } from "./inputs/TextInput";
import { SelectInput } from "./inputs/CustomSelectInput";
import { useForm } from "react-hook-form";

interface Props {
  field: FieldType;
}

const typeToComponentMapping: Record<
  string,
  React.FC<{
    type: string;
    label: string;
    placeholder?: string | undefined;
    options?:
      | { id: UniqueIdentifier; label: string; value: string }[]
      | undefined;
  }>
> = {
  radio: RadioButton,
  text: TextInput,
  number: TextInput,
  select: SelectInput,
  date: TextInput
};

export const Field = ({ field }: Props) => {

  const { register } = useForm()

  const FieldComponent = typeToComponentMapping[field.type] as React.FC<{
    type: string;
    label: string;
    placeholder?: string;
    options?:
      | { id: UniqueIdentifier; label: string; value: string }[]
      | undefined;
  }>;

  return <FieldComponent type={field.type} label={field.label} {...register(field.label, field.validations)}  options={field.options}/>;
};
