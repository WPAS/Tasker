import { Injectable } from '@angular/core';

@Injectable()
export class TasksService {
  private urgentTasks = [{title: 'Some task', description: 'This task is hardcoded', status: 'Urgent'}];
  private importantTasks = [];
  private otherTasks = [];

  constructor() { }

  addNewTask(data) {
    if (data.invalid) {
      return;
    }
    const newTask = data.value;

    switch (newTask.status) {
      case 'Urgent':
        this.urgentTasks.push(newTask);
        break;
      case 'Important':
        this.importantTasks.push(newTask);
        break;
      case 'Others':
        this.otherTasks.push(newTask);
        break;
      default:
        console.log('If you see this, something unexpected happened');
    }

    console.log(this.urgentTasks, this.importantTasks, this.otherTasks);
  }

  getTasks(status) {
    let tasks = [];
    switch (status) {
      case 'urgent':
        tasks = this.urgentTasks;
        break;
      case 'important':
        tasks = this.importantTasks;
        break;
      case 'other':
        tasks = this.otherTasks;
        break;
      default:
        console.log('If you see this, something unexpected happened');
    }

    return tasks;
  }

}
