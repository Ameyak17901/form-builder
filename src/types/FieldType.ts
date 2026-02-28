import type { UniqueIdentifier } from "@dnd-kit/core";
import type { FieldValues, RegisterOptions } from "react-hook-form";

export type Option = {
  id: UniqueIdentifier;
  label: string;
  value: string;
};

export type Validations = {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
};

export type FieldType = {
  id: UniqueIdentifier;
  type: string;
  placeholder?: string | undefined;
  label: string;
  options?: Option[] | undefined;
  validations?: RegisterOptions<FieldValues, string>
};
