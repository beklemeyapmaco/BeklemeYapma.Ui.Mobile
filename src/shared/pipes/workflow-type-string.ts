import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'workflowTypeString' })
export class WorkflowTypeStringPipe implements PipeTransform {
    workflowTypes = [
        { workflowType: "Registration", name: "Yeni Kayıt Yönetimi" },
        { workflowType: "ManualAttendance", name: "Manual Zaman Yönetimi" },
        { workflowType: "AttendanceSummary", name: "Shift Planı Yönetimi" },
    ];
    transform(value: string): any {
        const workType = this.workflowTypes.find(t => t.workflowType == value);
        return workType.name;
    }
}