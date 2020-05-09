import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators,  FormControl } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';



import { HomeService } from '../../services/home/home.service';

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

  order: any;
  receipt: any;

  items: any;

  orderItem: OrderItem = new OrderItem();

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

    this.homeService.createOrder().subscribe(data => {
      this.order = data;

      this.orderItem.order_id = this.order.data.id;
    });

    for (const p of this.pizza){
      if (p.id === id){
        this.singlePizza = p;
        console.log(this.singlePizza);
      }
    }


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
