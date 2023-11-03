import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProcessWhereUniqueInput } from "../process/ProcessWhereUniqueInput";

export type MachineWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  process?: ProcessWhereUniqueInput;
};
