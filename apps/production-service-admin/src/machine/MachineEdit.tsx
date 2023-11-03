import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProcessTitle } from "../process/ProcessTitle";

export const MachineEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <ReferenceInput source="process.id" reference="Process" label="Process">
          <SelectInput optionText={ProcessTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
