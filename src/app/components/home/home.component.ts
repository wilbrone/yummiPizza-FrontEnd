import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators,  FormControl } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';



import { HomeService } from '../../services/home/home.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pizza: any;
  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    apartment: new FormControl(''),
    street: new FormControl(''),
  });

  singlePizza: any;

  quantity = new FormControl('');
  qnt: any;
  unitprice: any;
  totalCost: any;

  // order: any;
  receipt: any;

  items: any;

  trial: any;

  orderItem: OrderItem = new OrderItem();

  order: Order;

  constructor(
    private homeService: HomeService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.homeService.getPizza().subscribe(data => {
      this.pizza = data;
      console.log(this.pizza);
    });

  }



  createOrderItem(id: any): void {
    console.log(id);

    for (const p of this.pizza){
      if (p.id === id){
        this.singlePizza = p;
        console.log(this.singlePizza);
      }
    }
    this.creatOrder();

    this.trial = this.order.id;

    console.log(this.trial);

    this.orderItem.order_id = this.trial;

    this.orderItem.pizza_id = id;

    this.orderItem.quantity = this.quantity.value;

    this.orderItem.price = this.orderItem.quantity * this.singlePizza.cost;

    console.log(this.orderItem);



    this.homeService.createOrderItem(this.orderItem).subscribe(
      res => {
        this.items = res;
        console.log(this.items);
      },
      err => {
        console.log(err.text);
      }
    );
  }

  creatOrder(){
    this.homeService.createOrder().subscribe((data: any) => {
      this.order = data.data;
      // this.trial = this.order.data.id;
      console.log(this.order);
    });
    return this.order;

  }

  // onSubmit(){
  //   console.log(this.contactForm.value);
  //   const info: any = this.contactForm.value;

  //   this.homeService.createContact(info, this.order.data.id).subscribe(res => {
  //     console.log(res);

  //     this.receipt = res;
  //   });

  // }



}

class OrderItem{
  public quantity: number;
  public price: number;
  public order_id: any;
  public pizza_id: any;
}

class Order{
  public contact: any;
  public id: number;
  public orderItem: any;
  public orderNumber: string;
  public totalCost: any;
  created_at: string;
}
