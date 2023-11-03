import { MachineCreateNestedManyWithoutProcessesInput } from "./MachineCreateNestedManyWithoutProcessesInput";
import { InputJsonValue } from "../../types";

export type ProcessCreateInput = {
  description?: string | null;
  machines?: MachineCreateNestedManyWithoutProcessesInput;
  meta?: InputJsonValue;
  name?: string | null;
};
