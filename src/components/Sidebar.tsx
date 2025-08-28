import type { FieldType } from "../types/FieldType";
import { Draggable } from "./Draggable";
import { nanoid } from "nanoid";

export const Sidebar = () => {
  const fields: FieldType[] = [
    { id: nanoid(), type: "text", label: "text-1", placeholder: "Enter text" },
    {
      id: nanoid(),
      type: "number",
      label: "number-1",
      placeholder: "Enter number",
    },
    {
      id: nanoid(),
      type: "radio",
      label: "radio",
      options: [{ id: nanoid(), label: "option 1", value: "option 1" }],
    },
    {
      id: nanoid(),
      type: 'select',
      label: 'select',
      options: [ {id: nanoid(), label: 'option 1', value: 'option 1'} ]
    },
    {
      id: nanoid(),
      type: 'date',
      label: 'date'
    }
  ];
  return (
    <div className="flex flex-col items-center gap-y-2 h-[80%] border rounded-lg border-slate-400 bg-white min-w-[20%] py-5">
      <h5 className="text-center font-medium text-xl line-clamp-3">Fields</h5>
      {fields.map((field) => (
        <Draggable id={field.id} field={field} key={field.label}>
          <p className="flex p-2 border rounded-md w-[80px]">{field.type}</p>
        </Draggable>
      ))}
    </div>
  );
};
