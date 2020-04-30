import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  status = ' ';

  displayName = false;
  name = '';

  displayNameFxn() {
    this.displayName = true;
    this.name = 'bill';
  }

  displayCar() {
    return 'bugatti';
  }

  getColor() {
    return this.status === 'online' ? 'green' : 'red';
  }

  constructor() {
    this.status = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit(): void {}
}
