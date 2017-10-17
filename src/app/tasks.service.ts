import { Injectable } from '@angular/core';

@Injectable()
export class TasksService {
  private urgentTasks = [];
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
        localStorage.setItem('urgentTasks', JSON.stringify(this.urgentTasks));
        break;
      case 'Important':
        this.importantTasks.push(newTask);
        localStorage.setItem('importantTasks', JSON.stringify(this.importantTasks));
        break;
      case 'Others':
        this.otherTasks.push(newTask);
        localStorage.setItem('otherTasks', JSON.stringify(this.otherTasks));
        break;
      default:
        console.log('If you see this, something unexpected happened');
    }
  }

  fetchTasks() {
    this.urgentTasks = JSON.parse(localStorage.getItem('urgentTasks'));
    this.importantTasks = JSON.parse(localStorage.getItem('importantTasks'));
    this.otherTasks = JSON.parse(localStorage.getItem('otherTasks'));
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
