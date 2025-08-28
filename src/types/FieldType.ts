import type { UniqueIdentifier } from "@dnd-kit/core";

export interface Option {
  id: UniqueIdentifier;
  label: string;
  value: string;
}

export interface FieldType {
  id: UniqueIdentifier;
  type: string;
  placeholder?: string | undefined;
  label: string;
  options?: Option[] | undefined;
}
