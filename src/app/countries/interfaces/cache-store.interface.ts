import { Country } from "./country";
import { Region } from "./region.type";





export interface CacheStore {
  byCapital:    TermCountries,
  byCountries:  TermCountries, // Aquí está definida como byCountries
  byRegion:     RegionCountries
}


export interface TermCountries {
  term:      string,
  countries: Country[]
}

export interface RegionCountries {
  region:       Region,
  countries:  Country[]
}

