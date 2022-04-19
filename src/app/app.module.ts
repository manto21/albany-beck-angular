import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { DbService } from './app-data/db.service';
import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { RegionsComponent } from './region/regions.component';
import { StoreModule } from '@ngrx/store';
import { regionReducer } from './store/region.reducer';

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
    StoreModule.forRoot({ region: regionReducer }),
    HttpClientModule,
    CommonModule,
  ],
  providers: [DbService],
  bootstrap: [AppComponent],
})
export class AppModule {}
