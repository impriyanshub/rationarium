import { Component, Inject, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DialogData } from "../types";


@Component({
    selector: 'rationarium-nx-new-task',
    templateUrl: './new-task.component.html',
})
export class NewTaskComponent implements OnInit {

    formGroup!: FormGroup;

    constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    ngOnInit(): void {
        
        this.formGroup = new FormGroup({
            name        : new FormControl(null),
            description : new FormControl(null),
            status      : new FormControl('Pending')
        });
    }

    addTask() {

        (this.data.mainFormGroup.get('tasks') as FormArray).push(this.formGroup);
    }
}