import { ChangeDetectorRef, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { DbService } from './app-data/db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./common-styles.scss']
})
export class AppComponent {
  userDetails: any;
  showInfo: boolean = false;
  showLocation: boolean = false;
  showReg: boolean = false;

  constructor(private dbService: DbService, private changeDetection: ChangeDetectorRef) {
  }
  
  ngOnInit() {
    this.dbService.getUser().subscribe(response => {
      this.userDetails = response;
      this.changeDetection.detectChanges();
    });
  }

  openInfo() {
    this.showInfo = !this.showInfo;
  }

  openLocation() {
    this.showLocation = !this.showLocation;
  }

  openReg() {
    this.showReg = !this.showReg;
  }
}
