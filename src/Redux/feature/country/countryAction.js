// src/services/countryService.js
import instance from "@/utils/axiosInstance";

class CountryService {
  async fetchAllCountries() {
    try {
      const { data } = await instance.get(`/country`);

      return data;
    } catch (error) {
      throw error;
    }
  }

  async fetchStatesByCountryId(countryId) {
    try {
      const { data } = await instance.get(`/states/country/${countryId}`);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async fetchTourTypes() {
    try {
      const { data } = await instance.get("/tour-type");
      return data;
    } catch (error) {
      throw error;
    }
  }
}

const countryService = new CountryService();
export default countryService;
