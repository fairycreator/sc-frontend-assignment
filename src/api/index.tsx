import axios from "axios";
import { User } from "../types";

export const fetchUsers = async (): Promise<string[]> => {
  try {
    const response = await axios.get<User[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data.map((user) => user.name.split(" ")[0]);
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

export const fetchNationality = async (name: string) => {
  try {
    const response = await axios.get(`https://api.nationalize.io?name=${name}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching nationality:", error);
    return null;
  }
};

export const fetchCountryData = async (countryCode: string) => {
  try {
    const response = await axios.get(
      `https://restcountries.com/v3.1/alpha/${countryCode}`
    );
    return response.data[0];
  } catch (error) {
    console.error("Error fetching country data:", error);
    return null;
  }
};
