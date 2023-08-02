import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NewTaskComponent } from './new-task/new-task.component';
import { Observable, map, tap } from 'rxjs';


@Component({
  selector: 'rationarium-nx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  
	formGroup = new FormGroup({
		filter : new FormControl('All'),
		tasks  : new FormArray([]),
	});

	filteredTasks: Observable<FormGroup[]>;

	constructor(private dialogService: MatDialog) {

		this.filteredTasks = this.formGroup.valueChanges.pipe(

			map(() => [...(this.formGroup.get('tasks') as FormArray).controls as FormGroup[]]),

			map(v => v.filter(f => this.formGroup.value.filter !== 'All' ? (this.formGroup.value.filter === 'Pending' ? f.value.status === 'Pending' : f.value.status === 'Completed') : true)),
		);
	}

	createTask() {

		this.dialogService.open(NewTaskComponent, {
			height: '400px',
			width: '600px',
			data: {
				mainFormGroup: this.formGroup
			}
		});
	}
}
