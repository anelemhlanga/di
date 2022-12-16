import { Controller } from '@nestjs/common';
import { Get, Param } from '@nestjs/common/decorators';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Controller('computer')
export class ComputerController {
  constructor(
    private diskService: DiskService,
    private cpuService: CpuService,
  ) {}

  @Get()
  run() {
    return [this.cpuService.compute(1, 2), this.diskService.getData()];
  }
}
