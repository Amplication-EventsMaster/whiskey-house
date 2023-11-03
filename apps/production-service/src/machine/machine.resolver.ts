import * as graphql from "@nestjs/graphql";
import { MachineResolverBase } from "./base/machine.resolver.base";
import { Machine } from "./base/Machine";
import { MachineService } from "./machine.service";

@graphql.Resolver(() => Machine)
export class MachineResolver extends MachineResolverBase {
  constructor(protected readonly service: MachineService) {
    super(service);
  }
}
