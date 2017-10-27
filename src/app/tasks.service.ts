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
    const newTask = {
      ...data.value,
      id: data.value.status + Date.now()
    };

    switch (newTask.status) {
      case 'Urgent':
        this.urgentTasks.unshift(newTask);
        localStorage.setItem('urgentTasks', JSON.stringify(this.urgentTasks));
        break;
      case 'Important':
        this.importantTasks.unshift(newTask);
        localStorage.setItem('importantTasks', JSON.stringify(this.importantTasks));
        break;
      case 'Others':
        this.otherTasks.unshift(newTask);
        localStorage.setItem('otherTasks', JSON.stringify(this.otherTasks));
        break;
      default:
        console.log('If you see this, something unexpected happened');
    }
  }

  fetchTasks() {
    this.urgentTasks = JSON.parse(localStorage.getItem('urgentTasks')) || [];
    this.importantTasks = JSON.parse(localStorage.getItem('importantTasks')) || [];
    this.otherTasks = JSON.parse(localStorage.getItem('otherTasks')) || [];
  }

  getTaskById(id) {
    let task;
    const status = id[0];

    const getter = (arr) => {
      const fetchedTask = arr.find((item) => {
        return item.id === id;
      });
      return fetchedTask;
    };

    switch (status) {
      case 'U':
        task = getter(this.urgentTasks);
        break;
      case 'I':
        task = getter(this.importantTasks);
        break;
      case 'O':
        task = getter(this.otherTasks);
        break;
      default:
        console.log('If you see this, something unexpected happened');
    }
    return task;
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



  removeTask(id) {
    const status = id[0];

    const remover = (arr) => {
      const filteredArr = arr.filter((item) => {
        return item.id !== id;
      });
      return filteredArr;
    };

    switch (status) {
      case 'U':
        this.urgentTasks = remover(this.urgentTasks);
        localStorage.setItem('urgentTasks', JSON.stringify(this.urgentTasks));
        break;
      case 'I':
        this.importantTasks = remover(this.importantTasks);
        localStorage.setItem('importantTasks', JSON.stringify(this.importantTasks));
        break;
      case 'O':
        this.otherTasks = remover(this.otherTasks);
        localStorage.setItem('otherTasks', JSON.stringify(this.otherTasks));
        break;
      default:
        console.log('If you see this, something unexpected happened');
    }
  }
}
