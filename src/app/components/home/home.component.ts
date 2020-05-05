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

  constructor(private homeService: HomeService, private route: ActivatedRoute, private formBuilder: FormBuilder, public dialog: MatDialog) { }

  openDialog(id: any): void {
    console.log(id);
    this.homeService.getSinglePizza(id).subscribe(data => {
      this.singlePizza = data;
      console.log(this.singlePizza);
    });

    console.log(this.quantity.value);
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
