import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase } from "angularfire2/database";
import { CarsService } from '../cars.service';
import { Car } from '../car';

@Component({
  selector: 'save-car',
  templateUrl: './save-car.component.html',
  styleUrls: ['./save-car.component.css']
})
export class SaveCarComponent implements OnInit {

  countries;

  saveCarForm: FormGroup;
  brand: FormControl;
  model: FormControl;
  year: FormControl;
  imageUrl: FormControl;
  country: FormControl;

  constructor(private CarsSrv: CarsService,
              private db: AngularFireDatabase) { }

  loadCountries() {
    this.db.list('countries')
        .valueChanges()
        .subscribe(countries => this.countries = countries );
  }

  createForm() {
    this.brand    = new FormControl('', Validators.required);
    this.model    = new FormControl('', Validators.required);
    this.year     = new FormControl('', Validators.required);
    this.imageUrl = new FormControl('', Validators.required);
    this.country  = new FormControl('', Validators.required);

    this.saveCarForm = new FormGroup({
      brand: this.brand,
      model: this.model,
      year: this.year,
      imageUrl: this.imageUrl,
      country: this.country
    });
  }

  ngOnInit() {
    this.createForm();
    this.loadCountries();
  }

  save(value: Car) {
    if (this.saveCarForm.invalid)
      return;
    this.CarsSrv.add(value);
    this.saveCarForm.reset();
  }

}
