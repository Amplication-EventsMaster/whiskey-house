import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MachineService } from "./machine.service";
import { MachineControllerBase } from "./base/machine.controller.base";

@swagger.ApiTags("machines")
@common.Controller("machines")
export class MachineController extends MachineControllerBase {
  constructor(protected readonly service: MachineService) {
    super(service);
  }
}
