import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DbService } from '../app-data/db.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styles:['th, td {border: 1px solid;}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountriesComponent implements OnInit {
  selectedRegion: any = [];
  selectedCountry: any = [];
  
  constructor(private dbService: DbService, private changeDetection: ChangeDetectorRef) {}

  ngOnInit() {
    this.dbService.selectedRegion.asObservable().subscribe(data => {
      this.selectedRegion = data;
      this.selectedCountry = [];
      this.changeDetection.detectChanges();
    });
  }

  selectedOption(event: any) {
    if (event.target.value) {
      this.selectedCountry = this.selectedRegion.filter((element: any) => 
        element.name == event.target.value
      );
    } else {
      this.selectedCountry = []
    }
    console.log('this.selectedCountry ', this.selectedCountry);
    this.changeDetection.detectChanges();    
  }
}
