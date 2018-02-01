import { Component, OnInit } from '@angular/core';
import { CarsService } from './../cars.service';

@Component({
  selector: 'cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  cols: string[];

  constructor(public CarsSrv: CarsService) {
    this.cols = [
      'image',
      'brand',
      'model',
      'country',
      'year',
      'action'
    ];
  }

  ngOnInit() {
    this.CarsSrv.find();
  }

  delete(id: string) {
    if(confirm('Are you sure you want to delete this item ?'))
      this.CarsSrv.delete(id);
  }

}
