import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task;
  hideDescription = true;
  togglerText = 'Show details';

  constructor(private taskService: TasksService, private router: Router) { }

  ngOnInit() {
  }

  onEdit(e) {
    const id = e.target.id;
    this.router.navigate([`edit-task/${id}`]);
  }

  onRemove(e) {
    const id = e.target.id;
    this.taskService.removeTask(id);
  }

  toggleDescription() {
    this.hideDescription = !this.hideDescription;
    this.togglerText = this.hideDescription ? 'Show details' : 'Hide details';
  }

}
