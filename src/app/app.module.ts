import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
// import { StoreModule } from '@ngrx/store';
import { DbService } from './app-data/db.service';

import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
// import { addRegionReducer } from './reducers/region.reducer';
import { RegionsComponent } from './region/regions.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    RegionsComponent,
    CountriesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    // StoreModule.forRoot({region: addRegionReducer}),
    HttpClientModule,
    CommonModule,
  ],
  providers: [DbService],
  bootstrap: [AppComponent],
})
export class AppModule {}
