import { SortOrder } from "../../util/SortOrder";

export type ProcessOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  meta?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
