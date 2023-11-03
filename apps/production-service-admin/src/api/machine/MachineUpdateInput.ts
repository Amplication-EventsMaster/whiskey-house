import { ProcessWhereUniqueInput } from "../process/ProcessWhereUniqueInput";

export type MachineUpdateInput = {
  name?: string | null;
  process?: ProcessWhereUniqueInput | null;
};
