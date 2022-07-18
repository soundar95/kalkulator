import { Controller, Get } from '@nestjs/common';
import { CalculateService } from './calculate.service';

@Controller('calculate')
export class CalculateController {
  constructor(private calculateService: CalculateService) {}
  @Get('/sum')
  calculateSum() {
    return this.calculateService.getCalculateBySum(5, 6);
  }
  @Get('/min')
  calculateMin() {
    return this.calculateService.getCalculateByMin(5, 6, 10, -1);
  }
  @Get('/max')
  calculateMax() {
    return this.calculateService.getCalculateByMax(5, 6, 10, -1);
  }
}
