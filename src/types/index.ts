export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id?: number;
  name: string;
  username?: string;
  email?: string;
  address?: Address;
  phone?: string;
  website?: string;
  company?: Company;
}

export interface NationalityPrediction {
  country_id: string;
  probability: number;
}

export interface NationalizeResponse {
  name: string;
  country: NationalityPrediction[];
}

export interface CountryData {
  name: {
    common: string;
  };
  flags: {
    png: string;
  };
}
