import { Module } from "@nestjs/common";
import { MachineModuleBase } from "./base/machine.module.base";
import { MachineService } from "./machine.service";
import { MachineController } from "./machine.controller";
import { MachineResolver } from "./machine.resolver";

@Module({
  imports: [MachineModuleBase],
  controllers: [MachineController],
  providers: [MachineService, MachineResolver],
  exports: [MachineService],
})
export class MachineModule {}
