import { Process } from "../process/Process";

export type Machine = {
  createdAt: Date;
  id: string;
  name: string | null;
  process?: Process | null;
  updatedAt: Date;
};
