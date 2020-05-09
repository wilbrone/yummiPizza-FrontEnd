import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor() { }

  // Delivery cost is 5 Euros
  // this.totalCost = (this.qnt * this.unitprice) + 5;
  // console.log(this.totalCost);

  ngOnInit(): void {
  }

}
