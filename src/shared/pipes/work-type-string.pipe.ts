import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'workTypeString' })
export class WorkTypeStringPipe implements PipeTransform {
    workTypes = [
        { id: 0, name: "Plan Dışı Zaman" },
        { id: -1, name: "Yokluk Zamanı" },
        { id: 1, name: "Normal Mesai" },
        { id: 3, name: "Çay Molası" },
        { id: 4, name: "Yemek Molası" },
    ]
    transform(value: number): any {
        const workType = this.workTypes.find(t => t.id == value);
        return workType.name;
    }
}