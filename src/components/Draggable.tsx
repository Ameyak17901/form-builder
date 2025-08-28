import { useDraggable, type UniqueIdentifier } from "@dnd-kit/core";
import type { FieldType } from "../types/FieldType";

interface Props {
  children: React.ReactNode;
  id: UniqueIdentifier;
  field: FieldType;
}

export const Draggable = ({id, children, field }: Props) => {
  const { setNodeRef, listeners, attributes, transform } = useDraggable({
    id,
    data: field
  });

  const style = transform
    ? { transform: `translate(${transform.x}px, ${transform.y}px)` }
    : undefined;

  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={style}>
      {children}
    </div>
  );
};
