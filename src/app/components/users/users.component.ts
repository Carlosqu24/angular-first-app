import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = [{
    id: 1,
    name: 'carlos_qu24',
    email: 'carlos.test@gmail.com'
  }, {
    id: 2,
    name: 'johan123',
    email: 'johan123.test@gmail.com'
  }, {
    id: 3,
    name: 'ana123',
    email: 'ana24234.test@gmail.com'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
