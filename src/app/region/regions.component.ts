import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DbService } from '../app-data/db.service';
import { Region } from '../models/region.interface';
import { addRegion } from '../store/region.actions';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./../common-styles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegionsComponent implements OnInit {
  label: string = "Region";
  regionList: any = [];
  regionsList$: any = [];
  count$: any;
  
  constructor(private dbService: DbService, private store: Store<{ region: Region[] }>,  private changeDetection: ChangeDetectorRef) {
    this.regionsList$ = store.select('region');
  }

  ngOnInit() {
    this.addRegion();
  }

  addRegion() {
    this.store.dispatch(addRegion());
    this.regionsList$.subscribe((response: any) => {
      this.regionList = response;
      this.changeDetection.detectChanges();
    })
  }

  selectedOption(event: any) {
    if (event.target.value) {
      this.dbService.getCountries(event.target.value).subscribe(response => {
        this.dbService.selectedRegion.next(response);
      });
    }
  }
}
