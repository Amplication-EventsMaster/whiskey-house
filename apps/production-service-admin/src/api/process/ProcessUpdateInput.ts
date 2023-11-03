import { MachineUpdateManyWithoutProcessesInput } from "./MachineUpdateManyWithoutProcessesInput";
import { InputJsonValue } from "../../types";

export type ProcessUpdateInput = {
  description?: string | null;
  machines?: MachineUpdateManyWithoutProcessesInput;
  meta?: InputJsonValue;
  name?: string | null;
};
