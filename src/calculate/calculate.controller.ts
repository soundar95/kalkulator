import { Body, Controller, Get, Post } from '@nestjs/common';
import { CalculateService } from './calculate.service';
import { ValuesDto } from './dto/values.dto';

@Controller('calculate')
export class CalculateController {
  constructor(private calculateService: CalculateService) {}
  @Post()
  values(@Body()valuesDto:ValuesDto){
   return this.calculateService.createValues(valuesDto);
  }
  @Get('/sum')
  calculateSum() {
    return this.calculateService.getCalculateBySum();
  }
  @Get('/min')
  calculateMin() {
    return this.calculateService.getCalculateByMin();
  }
  @Get('/max')
  calculateMax() {
    return this.calculateService.getCalculateByMax();
  }
}
