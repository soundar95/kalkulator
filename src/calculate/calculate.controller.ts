import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CalculateService } from './calculate.service';
import { CreateCalculateDto } from './dto/create-calculate.dto';
import { UpdateCalculateDto } from './dto/update-calculate.dto';

@Controller('calculate')
export class CalculateController {
  constructor(private calculateService: CalculateService) {}
@Get('/sum')
getCalculateBySum(){
return this.calculateService.getCalculateBySum(5,6);
}
@Get('/min')
getCalculateByMin(){
return this.calculateService.getCalculateByMin(5,6,10,-1);
}
@Get('/max')
getCalculateByMax(){
return this.calculateService.getCalculateByMax(5,6,10,-1);
}
}
