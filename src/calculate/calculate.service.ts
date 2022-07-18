import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculateService {
  getCalculateBySum(...p: number[]): number | string {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return `the sum of the numbers is ${sum}`;
  }
  getCalculateByMin(...p: number[]): number | string {
    let min: number = arguments[0];

    for (let i = 1; i < arguments.length; i++) {
      if (min > arguments[i]) min = arguments[i];
    }
    return `the minimum value is ${min}`;
  }
  getCalculateByMax(...p: number[]): number | string {
    let max: number = arguments[0];

    for (let i = 1; i < arguments.length; i++) {
      if (max < arguments[i]) max = arguments[i];
    }
    return `the maximum value is ${max}`;
  }
}
