// structure of a user object
export interface User {
  id: number;
  name: string;
  // Add other relevant user properties if needed
}

// structure of a nationality prediction response from the API
export interface NationalityPrediction {
  countryId: string;
  probability: number;
}

// structure of a response from the Nationalize.io API
export interface NationalizeResponse {
  name: string;
  country: Array<{
    country_id: string;
    probability: number;
  }>;
}
