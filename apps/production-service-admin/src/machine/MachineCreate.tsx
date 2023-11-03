import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProcessTitle } from "../process/ProcessTitle";

export const MachineCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <ReferenceInput source="process.id" reference="Process" label="Process">
          <SelectInput optionText={ProcessTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
