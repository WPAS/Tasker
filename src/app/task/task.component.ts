import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private taskService: TasksService) { }

  ngOnInit() {
  }

  onEdit(e) {
    console.log(e.target.id);

  }

  onRemove(e) {
    const id = e.target.id;
    const status = e.target.id[0];
    this.taskService.removeTask(id, status);
  }

  toggleDescription() {
    this.hideDescription = !this.hideDescription;
    this.togglerText = this.hideDescription ? 'Show details' : 'Hide details';
  }

}
