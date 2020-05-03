import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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

  constructor(private homeService: HomeService, private formBuilder: FormBuilder ) { }

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
