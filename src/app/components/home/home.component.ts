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

  constructor(private homeService: HomeService, private route: ActivatedRoute, private formBuilder: FormBuilder, public dialog: MatDialog) { }

  createOrder(id: any): void {
    console.log(id);
    this.homeService.getSinglePizza(id).subscribe(data => {
      this.singlePizza = data;
      console.log(this.singlePizza);
    });

    for(let i of this.pizza){
      if(i.id = id){
        this.unitprice = i.cost;
      }
    }



    console.log(this.quantity.value);
    this.qnt = this.quantity.value;

    // Delivery cost is 5 Euros
    this.totalCost = (this.qnt * this.unitprice) + 5;
    console.log(this.totalCost);

    this.homeService.createOrder(id, this.qnt, this.totalCost).subscribe(
      res => {
        this.order = res;
        console.log(this.order);
      },
      err => {
        console.log(err.text);
      }
    );
  }

  onSubmit(){
    console.log(this.contactForm.value);
    const info: any = this.contactForm.value;

    this.homeService.createContact(info,this.order.data.id).subscribe(res=>{
      console.log(res);

      this.receipt = res;
    });

  }


  ngOnInit(): void {
    this.homeService.getPizza().subscribe(data => {
      this.pizza = data;
      console.log(this.pizza);
    });

  }

}
