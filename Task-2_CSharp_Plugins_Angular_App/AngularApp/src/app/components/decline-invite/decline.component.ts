import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-decline-invite',
  templateUrl: './decline.component.html',
  styleUrls: ['./decline.component.css']
})
export class DeclineInviteComponent {
  constructor(private http: HttpClient) {}

  declineInvite(email: string) {
    this.http.post('/api/decline', { email }).subscribe(response => {
      console.log('Invite declined successfully.');
    });
  }
}
