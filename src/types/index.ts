export interface User {
  //   id: number;
  name: string;
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
