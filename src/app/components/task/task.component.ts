import { Component, Input } from '@angular/core';
import { ITask } from '../../models/interfaces/Task.interfaces';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
    @Input() task: ITask | undefined;


    deleteTask(){
      console.log("Eliminar tarea", this.task?.title);
    }
    
}
