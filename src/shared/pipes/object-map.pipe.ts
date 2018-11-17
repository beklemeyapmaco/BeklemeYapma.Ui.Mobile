import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'objectMap' })
export class ObjectMapPipe implements PipeTransform {

    transform(value: any, propertyName: string): any {
        if (propertyName !== '') {
            var object = JSON.parse(value);

            var result = object[propertyName];

            return result;
        }
        else {
            var object = JSON.parse(value);

            return object;
        }

    }
}