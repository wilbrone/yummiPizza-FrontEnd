import { Component, OnInit } from '@angular/core';

import { HomeService } from '../../services/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pizza: any;
  constructor(private homeService: HomeService ) { }

  ngOnInit(): void {
    this.homeService.getPizza().subscribe(data => {
      this.pizza = data;
      console.log(this.pizza);
    });
  }

}
