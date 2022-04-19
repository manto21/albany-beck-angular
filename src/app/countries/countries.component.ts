import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DbService } from '../app-data/db.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./../common-styles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountriesComponent implements OnInit {
  label: string = "Country";
  selectedRegion: any = [];
  selectedCountry: any = [];
  
  constructor(private dbService: DbService, private changeDetection: ChangeDetectorRef) {}

  ngOnInit() {
    this.dbService.selectedRegion.asObservable().subscribe(data => {
      this.selectedRegion = data;
      this.selectedCountry = [];
      this.changeDetection.detectChanges();
    });
    this.dbService.selectedCountry.asObservable().subscribe(data => {
      this.selectedCountry = data;
      this.changeDetection.detectChanges();
    });
  }

  selectedOption(event: any) {
    if (event.target.value) {
      this.selectedCountry = this.selectedRegion.filter((element: any) => 
        element.name == event.target.value
      );
    }
    this.changeDetection.detectChanges();    
  }
}
