import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-notification',
  template: `
    <div *ngIf="tasks.length > 0" class="notification">
      <h3>Pending Tasks</h3>
      <ul>
        <li *ngFor="let task of tasks">{{ task.name }} - Due: {{ task.dueDate }}</li>
      </ul>
    </div>
  `,
  styles: [`
    .notification {
      border: 1px solid #f0ad4e;
      padding: 15px;
      background-color: #fcf8e3;
    }
    h3 {
      color: #f0ad4e;
    }
  `]
})
export class NotificationComponent implements OnInit {
  tasks = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchTasks();
  }

  fetchTasks() {
    this.http.get<any[]>('/api/fetchTasks').subscribe(data => {
      this.tasks = data;
    });
  }
}
