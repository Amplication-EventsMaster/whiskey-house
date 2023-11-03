import { SortOrder } from "../../util/SortOrder";

export type MachineOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  processId?: SortOrder;
  updatedAt?: SortOrder;
};
