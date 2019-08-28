import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  states = [];
  countries = [];
  cities = [];
  selectedCountry;
  selectedState;
  selectedCity;
  selectedIndex = 0;
  err = false;
  selectedListOfStates;
  selectedListOfCities;

  constructor() { }

  ngOnInit() {
    this.countries = this.getCountries();
    this.selectedListOfStates = this.getCity();
    this.selectedListOfCities = this.getCity();
  }

  getCountries() {
    return [
      { id: 1, name: 'India' },
      { id: 2, name: 'USA' },
      { id: 3, name: 'Australia' }
    ];
  }

  getStates() {
    return [
      { id: 1, country_id: 1, name: 'Gujarat' },
      { id: 2, country_id: 1, name: 'Rajasthan' },
      { id: 3, country_id: 2, name: 'San Francisco' },
      { id: 4, country_id: 2, name: 'Los Angeles' },
      { id: 5, country_id: 3, name: 'New South Wales' },
      { id: 6, country_id: 3, name: 'Victoria' },
    ]
  }

  getCity() {
    return [
      { id: 1, country_id: 1, state_id: 1, name: 'Rajkot', image: 'assets/img/gujarat.jpg' },
      { id: 2, country_id: 1, state_id: 1, name: 'Ahmedabad', image: 'assets/img/ahmedabad.jpeg' },
      { id: 3, country_id: 1, state_id: 1, name: 'Surat', image: 'assets/img/surat.jpeg' },
      { id: 5, country_id: 1, state_id: 2, name: 'Jaipur', image: 'assets/img/jaipur.jpeg' },
      { id: 6, country_id: 1, state_id: 2, name: 'Jodhpur', image: 'assets/img/jodhpur.jpg' },
      { id: 8, country_id: 1, state_id: 2, name: 'Udaipur', image: 'assets/img/udaipur.jpg' },
      { id: 9, country_id: 2, state_id: 3, name: 'Richmond', image: 'assets/img/melbourne.jpg' },
      { id: 10, country_id: 2, state_id: 3, name: 'Sunset', image: 'assets/img/london.jpg' },
      { id: 11, country_id: 2, state_id: 4, name: 'Hollywood', image: 'assets/img/miami.jpg' },
      { id: 12, country_id: 3, state_id: 5, name: 'Sydney', image: 'assets/img/sydney.jpg' },
      { id: 13, country_id: 3, state_id: 5, name: 'Perth', image: 'assets/img/oval.jpg' },
      { id: 14, country_id: 3, state_id: 6, name: 'Melbourne', image: 'assets/img/california.jpg' }
    ]
  }

  onSelectCountry(event) {
    if (event.value != null) {
      this.selectedListOfCities = [];
      let country_id = event.value.id;
      this.selectedCountry = country_id;
      this.selectedState = 0;
      this.cities = [];
      this.states = this.getStates().filter((item) => {
        return item.country_id === Number(country_id)
      });
      this.selectedListOfCities = this.getCity().filter((item) => {
        return item.country_id === Number(country_id)
      });
      if (this.selectedListOfCities.length > 0) {
        this.err = false;
        this.selectedCity = this.selectedListOfCities[0].name;
        this.selectedIndex = 0;
      } else {
        this.selectedCity = 'Select City';
        this.err = true;
      }
    } else {
      this.states = [];
      this.cities = [];
    }
  }

  onSelectState(event) {
    if (event.value != null) {
      let state_id = event.value.id;
      this.selectedListOfCities = [];
      this.selectedState = state_id;
      this.cities = this.getCity().filter((item) => {
        return item.state_id === Number(state_id)
      });
      this.selectedListOfCities = this.getCity().filter((item) => {
        return item.state_id === Number(state_id)
      });
      this.selectedCity = event.value.name;
      this.selectedIndex = state_id;
    } else {
      this.cities = [];
    }
  }

  setIndex(index: number) {
    this.selectedIndex = index;
    this.selectedCity = this.selectedListOfCities[this.selectedIndex].name;
  }

  prevImage(name: string) {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.selectedListOfCities.length - 1;
    } else {
      this.selectedIndex = this.selectedIndex - 1;
    }
    this.selectedCity = this.selectedListOfCities[this.selectedIndex].name;
  }

  nextImage() {
    if (this.selectedIndex === this.selectedListOfCities.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex = this.selectedIndex + 1;
    }
    this.selectedCity = this.selectedListOfCities[this.selectedIndex].name;
  }
}
