import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    selector: 'rationarium-nx-task',
    templateUrl: './task.component.html',
})
export class TaskComponent {

    @Input() taskFormGroup!: FormGroup;
}