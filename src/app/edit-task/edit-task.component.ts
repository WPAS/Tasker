import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['../new-task/new-task.component.css']
})
export class EditTaskComponent implements OnInit {
  task;

  constructor(private tasksService: TasksService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.task = this.tasksService.getTaskById(params.id);
      }
    );
  }

  onSubmit(newTask) {
    this.tasksService.addNewTask(newTask);
    this.tasksService.removeTask(this.task.id);
    this.router.navigate(['']);
  }
}
