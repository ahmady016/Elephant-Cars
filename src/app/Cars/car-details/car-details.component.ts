import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '../cars.service';

@Component({
  selector: 'car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})

export class CarDetailsComponent implements OnInit {

  id: string;

  constructor(public CarsSrv: CarsService,
              private route: ActivatedRoute) {
      this.route.params.subscribe(route => this.id = route.id);
  }

  ngOnInit() {
    this.CarsSrv.find(this.id);
  }

}
