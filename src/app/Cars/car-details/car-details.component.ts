import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';

@Component({
  selector: 'car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})

export class CarDetailsComponent implements OnInit {

  id: string;

  constructor(public CarsSrv: CarsService) {
    this.id = '1';
  }

  ngOnInit() {
    this.CarsSrv.find(this.id);
  }

}
