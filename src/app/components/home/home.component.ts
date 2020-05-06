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
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  singlePizza: any;

  quantity = new FormControl('');
  qnt: any;
  unitprice: any;
  totalCost: any;

  order: any;

  constructor(private homeService: HomeService, private route: ActivatedRoute, private formBuilder: FormBuilder, public dialog: MatDialog) { }

  createOrder(id: any): void {
    console.log(id);
    this.homeService.getSinglePizza(id).subscribe(data => {
      this.singlePizza = data;
      console.log(this.singlePizza);
    });

    console.log(this.quantity.value);
    this.qnt = this.quantity.value;

    this.unitprice = this.singlePizza.cost;

    this.totalCost = this.qnt * this.unitprice;
    console.log(this.totalCost);

    this.homeService.createOrder(id, this.qnt, this.totalCost).subscribe(
      res => {
        this.order = res;
        console.log(res.text());
      },
      err => {
        console.log(err.text());
      }
    );
  }


  ngOnInit(): void {
    this.homeService.getPizza().subscribe(data => {
      this.pizza = data;
      console.log(this.pizza);
    });

    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
