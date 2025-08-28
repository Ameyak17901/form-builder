import type { UniqueIdentifier } from "@dnd-kit/core";
import { nanoid } from "nanoid";

export const generateId = () => {
  return nanoid() as UniqueIdentifier;
};
