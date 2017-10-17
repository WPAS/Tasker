import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  constructor(private tasksService: TasksService) {  }

  ngOnInit() {
  }

  onSubmit(newTask) {
    this.tasksService.addNewTask(newTask);
    newTask.reset();
  }
}
