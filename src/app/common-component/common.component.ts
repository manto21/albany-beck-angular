import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DbService } from '../app-data/db.service';
import { Region } from '../models/region.interface';
import { addRegion } from '../store/region.actions';

@Component({
  selector: 'app-common-component',
  templateUrl: './common.component.html',
  styleUrls: ['./../common-styles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonComponent implements OnInit {
  @Input() label: string = '';
  @Input() dropdownOptions: any = [];
  regionList: any = [];
  regionsList$: any = [];
  selectedRegion: any = [];
  selectedCountry: any = [];
  
  constructor(private dbService: DbService, private store: Store<{ region: Region[] }>,  private changeDetection: ChangeDetectorRef) {
    this.regionsList$ = store.select('region');
  }

  ngOnInit() {
    this.addRegion();
    this.dbService.selectedRegion.asObservable().subscribe(data => {
      this.selectedRegion = data;
      this.selectedCountry = [];
      this.changeDetection.detectChanges();
    });
  }

  addRegion() {
    this.store.dispatch(addRegion());
    this.regionsList$.subscribe((response: any) => {
      this.regionList = response;
      this.changeDetection.detectChanges();
    })
  }

  selectedOption(event: any) {
    if (event.target.value && this.label == "Region") {
      this.dbService.getCountries(event.target.value).subscribe(response => {
        this.dbService.selectedRegion.next(response);
      });
    } else if (event.target.name && this.label == "Country") {
      this.selectedCountry = this.selectedRegion.filter((element: any) => 
        element.name == event.target.value
      );
      this.dbService.selectedCountry.next(this.selectedCountry);
    }
  }
}
