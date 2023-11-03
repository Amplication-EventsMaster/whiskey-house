/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MachineWhereUniqueInput } from "./MachineWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { MachineUpdateInput } from "./MachineUpdateInput";

@ArgsType()
class UpdateMachineArgs {
  @ApiProperty({
    required: true,
    type: () => MachineWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MachineWhereUniqueInput)
  @Field(() => MachineWhereUniqueInput, { nullable: false })
  where!: MachineWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => MachineUpdateInput,
  })
  @ValidateNested()
  @Type(() => MachineUpdateInput)
  @Field(() => MachineUpdateInput, { nullable: false })
  data!: MachineUpdateInput;
}

export { UpdateMachineArgs as UpdateMachineArgs };
