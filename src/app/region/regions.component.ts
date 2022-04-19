import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
// import { select } from '@ngrx/core';
// import { Store } from '@ngrx/store';
import { DbService } from '../app-data/db.service';
import { AppState } from '../app.state';
import { Region } from '../models/region.interface';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegionsComponent implements OnInit {
  regionList: any = [
    {name: "Europe", value:"europe"}, {name: "Asia", value: "asia"}];
  regionsList: any = [];
  
  constructor(private dbService: DbService) {
    // this.regionsList = this.store.select(state => state.region);
    // this.store.pipe(select('dataStore'), take(1)).subscribe((data) => {
    //   this.regionsList = data;
    //   });
    // store.select('addRegionReducer')
    //   .subscribe((data: Region) => {
    //     if (typeof data != 'undefined') {
    //     this.items$ = Observable.of(data.customObjects);
    //     }
    //   });
  }

  ngOnInit() {
    this.addRegion();
  }

  addRegion() {
    // let regions: Region[] = [{name: "Europe", value:"europe"}, {name: "Asia", value: "asia"}];
    // this.store.dispatch({
    //   type: "Region",
    //   payload: regions
    // });
  }

  selectedOption(event: any) {
    if (event.target.value) {
      this.dbService.getCountries(event.target.value).subscribe(response => {
        this.dbService.selectedRegion.next(response);
      });
    }
  }
}
