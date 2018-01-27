import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { Car } from '../car';

@Component({
  selector: 'cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  $carsList: AngularFireList<any>;
  cars: Car[];
  car: Car;
  cols: string[];

  constructor(private db: AngularFireDatabase) {
    this.$carsList = this.db.list('/cars');
    this.cols = [
      'image',
      'brand',
      'model',
      'country',
      'year',
      'action'
    ];
  }

  addCar(car: any): void {
    this.$carsList.push(car);
  }

  updateCar(id: string, newCar: any): void {
    this.$carsList.update(id, newCar);
  }

  deleteCar(id: string): void {
    this.$carsList.remove(id);
  }

  pushTest() {
    this.car = {
      brand: "BMW",
      model: "321AG",
      country: "Egypt",
      year: 2005,
      imageUrl: "https://i.pinimg.com/736x/98/f7/12/98f7122b7fa0aa158591b08224edb319--japanese-cars-cars-and-trucks.jpg"
    }
    setTimeout(this.addCar(this.car), 0);
    this.car = {
      brand: "Kia",
      model: "32ERT",
      country: "Iraq",
      year: 2007,
      imageUrl: "http://www.rent-car.ro/en/Files/uploads/29-opel-corsa-5-usi.jpg"
    }
    setTimeout(this.addCar(this.car), 3000);
    this.car = {
      brand: "Audi",
      model: "ddf65",
      country: "USA",
      year: 2006,
      imageUrl: "http://s3-eu-west-1.amazonaws.com/podpoint-website-dev/Ford-Focus-electric.png"
    }
    setTimeout(this.addCar(this.car), 7000);
  }

  upDelTest() {
    // console.log(this.cars[0].id);
    this.updateCar('-L3oZnxkX8w1oLYWayj_', {country: "Tyland"});
    this.updateCar('-L3oZnxq1HO9fQcTZYB2', {brand: "Mazda"});
    this.deleteCar('-L3oZnxr-XvxgRKZHi9D');
  }

  ngOnInit() {
    this.cars = [];
    this.$carsList
        .snapshotChanges()
        .subscribe(_cars => {
            this.cars = _cars.map(car => {
              this.car = car.payload.toJSON() as Car;
              this.car.id = car.key;
              return this.car;
            });
        });
    //this.pushTest();
    //setTimeout(this.upDelTest(), 10000);
  }

}
