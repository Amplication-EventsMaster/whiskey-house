import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MachineListRelationFilter } from "../machine/MachineListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ProcessWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  machines?: MachineListRelationFilter;
  meta?: JsonFilter;
  name?: StringNullableFilter;
};
