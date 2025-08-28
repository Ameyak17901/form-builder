import type { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import type { FieldType } from "../../types/FieldType";
import { CSS } from "@dnd-kit/utilities";
import { DragHandle } from "@mui/icons-material";
import { TextInput } from "./TextInput";
import { RadioButton } from "./RadioButton";
import { SelectInput } from "./CustomSelectInput";

const typeFieldMap: Record<
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
  text: TextInput,
  number: TextInput,
  radio: RadioButton,
  select: SelectInput,
  date: TextInput
};

interface Props {
  id: UniqueIdentifier;
  field: FieldType;
  setSelectedField: React.Dispatch<React.SetStateAction<FieldType | null>>;
}

const DefaultInput = ({ id, field, setSelectedField }: Props) => {
  const { setNodeRef, listeners, attributes, transform, transition } =
    useSortable({
      id,
      data: field,
    });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const Field = typeFieldMap[field.type] as React.FC<{
    type: string;
    label: string;
    placeholder?: string;
    options?:
      | { id: UniqueIdentifier; label: string; value: string }[]
      | undefined;
  }>;
  return (
    <div
      ref={setNodeRef}
      className="border border-black py-2 px-3 rounded-lg w-[50%] flex justify-between items-center"
      style={style}
      onClick={() => setSelectedField(field)}
      onDoubleClick={() => setSelectedField(null)}
      {...attributes}
    >
      <Field
        type={field.type}
        label={field.label}
        placeholder={field.placeholder}
        options={field.options}
      />
      <DragHandle {...listeners} />
    </div>
  );
};

export default DefaultInput;
