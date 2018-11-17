import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'timelineReasonString' })

export class TimelineReasonStringPipe implements PipeTransform {
    notPlannedReasons = [
        { id: 1, name: "Kendim kaldım" },
        { id: 2, name: "Müşterim istedi" },
        { id: 3, name: "Yöneticim istedi" }
    ];

    absenceReasons = [
        { id: 1, name: "Depodaydım" },
        { id: 2, name: "Müşteri Ziyareti" },
        { id: 3, name: "Yemek Molası" },
        { id: 4, name: "Kahve Molası" },
        { id: 5, name: "Telefon Kapalıydı" },
        { id: 6, name: "Diğer" }
    ];

    transform(value: any): any {
        if (value.workTypeId === -1) {
            const timelineReason = this.absenceReasons.find(t => t.id == value.reasonId);
            return timelineReason.name;
        }
        if (value.workTypeId === 0) {
            const timelineReason = this.notPlannedReasons.find(t => t.id == value.reasonId);
            return timelineReason.name;
        }
    }
}