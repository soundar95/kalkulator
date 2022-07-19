import { Injectable } from '@nestjs/common';
import { ValuesDto } from './dto/values.dto';

@Injectable()
export class CalculateService {
  private values = [];
  createValues(valuesDto: ValuesDto) {
    const { value } = valuesDto;
    this.values = value.map((num) => Number(num));
    return value;
  }

  getCalculateBySum(): number | string {
    let sum = 0;
    for (let i = 0; i < this.values.length; i++) {
      sum += this.values[i];
    }
    return `the sum of the numbers is ${sum}`;
  }
  getCalculateByMin(): number | string {
    let min: number = this.values[0];
    for (let i = 1; i < this.values.length; i++) {
      if (min > this.values[i]) min = this.values[i];
    }
    return `the minimum value is ${min}`;
  }
  getCalculateByMax(): number | string {
    let max: number = this.values[0];
    for (let i = 1; i < this.values.length; i++) {
      if (max < this.values[i]) max = this.values[i];
    }
    return `the maximum value is ${max}`;
  }
}
