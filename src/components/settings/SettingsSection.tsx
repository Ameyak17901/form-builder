import type { FieldType } from "../../types/FieldType";

import { Close } from "@mui/icons-material";

import UpdateSettings from "./UpdateSettings";

interface Props {
  selectedField: FieldType;
  setSelectedField: React.Dispatch<React.SetStateAction<FieldType | null>>;
  droppedFields: FieldType[];
  setDroppedFields: React.Dispatch<React.SetStateAction<FieldType[]>>;
}

export const SettingsScreen = ({
  selectedField,
  setSelectedField,
  setDroppedFields,
}: Props) => {
  return (
    <div className="border flex flex-col rounded-md min-h-[80%] w-[30%] p-2 bg-white">
      {!selectedField ? (
        <div>
          <h5 className="flex justify-center items-center h-[80%]">Settings</h5>
          <Close onClick={() => setSelectedField(null)} />
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h5 className="text-center">Settings</h5>
            <Close onClick={() => setSelectedField(null)} />
          </div>
          <UpdateSettings
            field={selectedField}
            setSelectedField={setSelectedField}
            setDroppedFields={setDroppedFields}
          />
        </div>
      )}
    </div>
  );
};
