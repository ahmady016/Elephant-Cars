import { Injectable } from '@angular/core';

import { Car } from './car';
import {
  AngularFireDatabase,
  AngularFireList
} from "angularfire2/database";

@Injectable()
export class CarsService {

  private $carsList: AngularFireList<any>;
  cars: Car[];
  car: Car;
  loading: boolean;

  constructor(private db: AngularFireDatabase) {
    this.$carsList = this.db.list('/cars');
    this.loading = false;
  }

  add(car: any): void {
    this.$carsList.push(car);
  }

  update(id: string, newCar: any): void {
    this.$carsList.update(id, newCar);
  }

  delete(id: string): void {
    this.$carsList.remove(id);
  }

  find(id?: string): void {
    if (id)
      this.car = this.cars.find(car => car.id === id);
    this.loading = true;
    this.$carsList
        .snapshotChanges()
        .subscribe(_cars => {
            this.cars = _cars.map(car => {
              this.car = car.payload.toJSON() as Car;
              this.car.id = car.key;
              return this.car;
            });
            this.loading = false;
        });
  }

}
