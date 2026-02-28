import type { FieldType } from "./FieldType";


export type FormType = {
    id: string | number;
    name: string;
    fields: FieldType[],
}