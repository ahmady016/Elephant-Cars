import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireDatabase } from "angularfire2/database";
import { CarsService } from '../cars.service';
import { Car } from '../car';

@Component({
  selector: 'save-car',
  templateUrl: './save-car.component.html',
  styleUrls: ['./save-car.component.css']
})

export class SaveCarComponent implements OnInit {

  countries: Object[];
  carId: string;

  saveCarForm: FormGroup;
  brand: FormControl;
  model: FormControl;
  year: FormControl;
  imageUrl: FormControl;
  country: FormControl;

  constructor(private CarsSrv: CarsService,
              private db: AngularFireDatabase,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.params.subscribe(route => {
      this.carId = route.id;
      this.CarsSrv.find(route.id);
    });
  }

  ngOnInit() {
    this.createForm(this.CarsSrv.car);
    this.loadCountries();
  }

  loadCountries() {
    this.db.list('countries')
        .valueChanges()
        .subscribe(countries => this.countries = countries );
  }

  createForm(car: Car) {
    this.brand    = new FormControl( (car)? car.brand    : '', Validators.required );
    this.model    = new FormControl( (car)? car.model    : '', Validators.required );
    this.year     = new FormControl( (car)? car.year     : '', Validators.required );
    this.imageUrl = new FormControl( (car)? car.imageUrl : '', Validators.required );
    this.country  = new FormControl( (car)? car.country  : '', Validators.required );

    this.saveCarForm = new FormGroup({
      brand: this.brand,
      model: this.model,
      year: this.year,
      imageUrl: this.imageUrl,
      country: this.country
    });
  }

  save(value: Car) {
    if (this.saveCarForm.invalid)
      return;

    console.log(this.carId);

    if(this.carId)
      this.CarsSrv.update(this.carId, value);
    else
      this.CarsSrv.add(value);

    this.saveCarForm.reset();
    this.router.navigate(['home']);
  }

}
