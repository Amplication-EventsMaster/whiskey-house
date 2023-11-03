import { Machine } from "../machine/Machine";
import { JsonValue } from "type-fest";

export type Process = {
  createdAt: Date;
  description: string | null;
  id: string;
  machines?: Array<Machine>;
  meta: JsonValue;
  name: string | null;
  updatedAt: Date;
};
