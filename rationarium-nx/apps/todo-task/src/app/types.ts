import { FormGroup } from "@angular/forms";

export interface Task {
    name: string;
    description: string;
    status: 'Pending' | 'Completed'
}

export interface DialogData {
    mainFormGroup: FormGroup;
}