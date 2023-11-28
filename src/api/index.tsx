import axios from "axios";

export const fetchUsers = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return null;
  }
};

export const fetchNationality = async (name: string) => {
  try {
    const response = await axios.get(`https://api.nationalize.io?name=${name}`);
    return response.data.country[0].country_id;
  } catch (error) {
    console.error("Error fetching nationality:", error);
    return null;
  }
};
