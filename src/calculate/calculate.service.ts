import { Injectable } from '@nestjs/common';
import { ValuesDto } from './dto/values.dto';

@Injectable()
export class CalculateService {
  private values=[];
  createValues(valuesDto:ValuesDto){
   const {value}=valuesDto;
   this.values = value;
   return value;
  }

  getCalculateBySum(): number | string {
    let sum = 0;
    let abc=this.values.map(a=>Number(a));
    for (let i = 0; i < abc.length; i++) {
      sum += abc[i];
    }
    return `the sum of the numbers is ${sum}`;
  }
  getCalculateByMin(): number | string {
    let abc=this.values.map(a=>Number(a));
    let min: number = abc[0];
    for (let i = 1; i < abc.length; i++) {
      if (min > abc[i]) 
      min = abc[i];
    }
    return `the minimum value is ${min}`;
  }
  getCalculateByMax(): number | string {
    let abc=this.values.map(a=>Number(a));
    let max: number = abc[0];
    for (let i = 1; i < abc.length; i++) {
      if (max < abc[i]) 
      max = abc[i];
    }
    return `the maximum value is ${max}`;
  }
}
