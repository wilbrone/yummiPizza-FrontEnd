import { Component, OnInit,Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

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

  constructor(private homeService: HomeService, private formBuilder: FormBuilder, public dialog: MatDialog) { }

  openDialog(id: any): void {
    console.log(id);
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: id
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
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


// for the dialog window
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'pizza.html',
})
export class DialogOverviewExampleDialog implements OnInit{

  singlePizza: any;
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    private homeService: HomeService,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(){
    this.homeService.getSinglePizza(this.data).subscribe(data => {
      this.singlePizza = data;
      console.log(this.singlePizza);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
