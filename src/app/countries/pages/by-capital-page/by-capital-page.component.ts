import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor ( private countriesService: CountriesService ) {}

  searchByCapital( capital: string ):void {
    this.countriesService.searchCapital( capital )
        .subscribe( countries => {
          this.countries = countries;
        });
  }

}
