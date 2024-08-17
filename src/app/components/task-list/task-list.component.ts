import { Component } from '@angular/core';
import { ITask, Levels } from '../../models/interfaces/Task.interfaces';
import { title } from 'process';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
    task1: ITask = {
      title:'Task 1',
      description: 'Description 1',
      completed: true,
      level:Levels.Info
    }


    task2: ITask = {
      title:'Task 2',
      description: 'Description 2',
      completed: false,
      level:Levels.Urgent
    }
}
