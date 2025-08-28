import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { useState } from "react";
import type { FieldType } from "../types/FieldType";
import { arraySwap } from "@dnd-kit/sortable";
import { SettingsScreen } from "../components/settings/SettingsSection";
import { Canvas } from "../components/Canvas";
import { Sidebar } from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import type { FormType } from "../types/FormType";

export const CreateForm = () => {
  const [droppedFields, setDroppedFields] = useState<FieldType[]>([]);
  const [selectedField, setSelectedField] = useState<FieldType | null>(null);
  const navigate = useNavigate();

  const handleSaveForm = () => {
    const forms = localStorage.getItem("forms");
    if (forms) {
      const previousForms = JSON.parse(forms) as FormType[];
      previousForms.push({ id: nanoid(), name: `form-${previousForms.length+1}`, fields: droppedFields });
      localStorage.setItem("forms", JSON.stringify(previousForms));
    } else {
      localStorage.setItem(
        "forms",
        JSON.stringify([{ id: nanoid(), fields: droppedFields }])
      );
    }
    navigate("/myforms");
  };

  return (
    <div className="flex justify-evenly mx-auto w-full h-full items-center">
      <DndContext
        onDragEnd={(event: DragEndEvent) => {
          const { active, over } = event;

          if (over && over.id === "droppable") {
            if (active.data) {
              const newField = active.data.current as FieldType;
              setDroppedFields((prev) => [...prev, newField]);
            }
          }

          if (!over) return;

          const activeId = active.id;
          const overId = over.id;

          if (activeId === overId) return;
          setDroppedFields((f) => {
            const activeIndex = f.findIndex((field) => field.id === activeId);
            const overIndex = f.findIndex((field) => field.id === overId);
            if (activeIndex === -1 || overIndex === -1) return f;
            return arraySwap(f, activeIndex, overIndex);
          });
        }}
      >
        {selectedField && (
          <SettingsScreen
            setDroppedFields={setDroppedFields}
            droppedFields={droppedFields}
            selectedField={selectedField}
            setSelectedField={setSelectedField}
          />
        )}
        <Canvas
          fields={droppedFields}
          setSelectedField={setSelectedField}
          saveForm={handleSaveForm}
        />
        <Sidebar />
      </DndContext>
    </div>
  );
};
