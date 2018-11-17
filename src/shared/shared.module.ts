import { NgModule } from "@angular/core";
import { InjectorModule } from "../app/core/helpers/injector/injector.module";
import { WorkTypeStringPipe } from "./pipes/work-type-string.pipe";
import { TimelineReasonStringPipe } from "./pipes/timeline-reason-string.pipe";
import { GroupByPipe } from "./pipes/group-by.pipe";
import { WorkflowTypeStringPipe } from "./pipes/workflow-type-string";
import { ObjectMapPipe } from "./pipes/object-map.pipe";
import { WorkflowStatusStringPipe } from "./pipes/workflow-status.pipe";

@NgModule({
  imports: [InjectorModule],
  declarations: [WorkTypeStringPipe, TimelineReasonStringPipe, GroupByPipe, WorkflowTypeStringPipe, ObjectMapPipe, WorkflowStatusStringPipe],
  exports: [WorkTypeStringPipe, TimelineReasonStringPipe, GroupByPipe, WorkflowTypeStringPipe, ObjectMapPipe, WorkflowStatusStringPipe]
})
export class SharedModule { }
