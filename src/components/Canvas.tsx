import { useDroppable } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";

import type { FieldType } from "../types/FieldType";
import DefaultInput from "./inputs/DefaultInput";
import { Button } from "@mui/material";

interface Props {
  fields: FieldType[];
  setSelectedField: React.Dispatch<React.SetStateAction<FieldType | null>>;
  saveForm: () => void;
}

export const Canvas = ({ fields, setSelectedField, saveForm }: Props) => {
  const { setNodeRef } = useDroppable({ id: "droppable" });
  return (
    <div
      ref={setNodeRef}
      className="flex border border-dashed  w-[500px] items-center flex-col rounded-md h-[80vh] bg-white justify-evenly"
    >
      <SortableContext items={fields}>
        <div className="flex flex-col w-full items-center gap-y-2">
          {!fields || fields.length === 0 ? (
            <p> Drop here</p>
          ) : (
            fields.map((field) => {
              return (
                <DefaultInput
                  key={field.id}
                  field={field}
                  id={field.id}
                  setSelectedField={setSelectedField}
                />
              );
            })
          )}
        </div>
      </SortableContext>
      <div className="flex justify-center items-end  h-[10%]">
        <Button variant="contained" onClick={saveForm}>
          Save
        </Button>
      </div>
    </div>
  );
};
