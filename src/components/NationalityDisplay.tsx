import React, { useEffect, useState } from "react";
import { fetchNationality, fetchCountryData } from "../api";
import { NationalityPrediction, CountryData } from "../types";

type NationalityDisplayProps = {
  name: string;
};

export const NationalityDisplay: React.FC<NationalityDisplayProps> = ({
  name,
}) => {
  const [nationalities, setNationalities] = useState<NationalityPrediction[]>(
    []
  );
  const [countries, setCountries] = useState<CountryData[]>([]);

  useEffect(() => {
    const getNationality = async () => {
      const data = await fetchNationality(name);
      if (data) {
        setNationalities(data.country);
        for (const country of data.country) {
          const countryData = await fetchCountryData(country.country_id);
          if (countryData) {
            setCountries((prev) => [...prev, countryData]);
          }
        }
      }
    };

    getNationality();
  }, [name]);

  return (
    <div className="container">
      {nationalities.map((nat, index) => (
        <div
          key={nat.country_id}
          className="user-list-item nationality-display"
        >
          <span>
            {countries[index]?.name.common ?? nat.country_id} (
            {nat.probability.toFixed(2)}%)
          </span>
          {countries[index] && (
            <img
              src={countries[index].flags.png}
              alt={`Flag of ${countries[index].name.common}`}
              className="flag-icon"
            />
          )}
        </div>
      ))}
    </div>
  );
};
