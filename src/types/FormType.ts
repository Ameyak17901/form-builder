import type { FieldType } from "./FieldType";


export interface FormType {
    id: string | number;
    name: string;
    fields: FieldType[],
}