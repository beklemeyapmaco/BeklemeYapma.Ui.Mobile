import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'workflowStatusString' })
export class WorkflowStatusStringPipe implements PipeTransform {
    workflowStatuses = [
        { workflowStatus: "WaitingForApproval", name: "Bekliyor" },
        { workflowStatus: "Rejected", name: "Reddedildi" },
        { workflowStatus: "Approved", name: "Onaylandı" },
    ];
    transform(value: string): any {
        const workflowStatus = this.workflowStatuses.find(t => t.workflowStatus == value);
        return workflowStatus.name;
    }
}