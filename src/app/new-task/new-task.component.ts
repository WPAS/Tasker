import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  constructor(private tasksService: TasksService, private router: Router) {  }

  ngOnInit() {
  }

  onSubmit(newTask) {
    this.tasksService.addNewTask(newTask);
    this.router.navigate(['']);
  }
}
