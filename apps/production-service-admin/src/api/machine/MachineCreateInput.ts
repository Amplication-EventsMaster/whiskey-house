import { ProcessWhereUniqueInput } from "../process/ProcessWhereUniqueInput";

export type MachineCreateInput = {
  name?: string | null;
  process?: ProcessWhereUniqueInput | null;
};
