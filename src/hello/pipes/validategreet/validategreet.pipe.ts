import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidategreetPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log("value", value)
    const ageNum = parseInt(value.age.toString(), 10);
    if (isNaN(ageNum)) throw new HttpException('Age must be a number', HttpStatus.BAD_REQUEST);
    const studentBool = value.student === "true" ? true : value.student === "false" ? false : null;
    if (studentBool === null) throw new HttpException('Student must be a boolean', HttpStatus.BAD_REQUEST);
   
    return {...value, age: ageNum, student: studentBool};
  }
}
