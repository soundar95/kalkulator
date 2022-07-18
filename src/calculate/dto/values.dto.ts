import { Type } from "class-transformer";
import { IsNumber } from "class-validator";

export class ValuesDto{
    @Type(() => Number)
    @IsNumber({}, { each: true, message: 'Should be an array of numbers' })
    value:number[];
}