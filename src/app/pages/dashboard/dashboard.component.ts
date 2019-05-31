import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  public createParty() {
    this.router.navigate(['create-event', 'Fiesta']);
  }
  public createPoolMoney() {
    this.router.navigate(['create-event', 'Baquita']);
  }
  public createPotLuck() {
    this.router.navigate(['create-event', 'Canasta']);
  }
}
