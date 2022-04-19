import { Countries } from '../models/countries.interface';
import { Region } from '../models/region.interface';

export interface AppData {
  region: Region[];
  countries: Countries[];
}
