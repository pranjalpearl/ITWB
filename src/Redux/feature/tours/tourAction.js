import instance from "@/utils/axiosInstance";

class TourService {
  async fetchTours() {
    try {
      const { data } = await instance.get(`/tours?limit=20`);
      return data.data;
    } catch (error) {
      throw error;
    }
  }

  async fetchHotSellingTour() {
    try {
      const { data } = await instance.get(
        "/website-tour/get-tours/?isHotSelling=true"
      );
      return data.data;
    } catch (error) {
      throw error;
    }
  }

  async fetchBestSellingTour() {
    try {
      const { data } = await instance.get(
        "/website-tour/get-tours/?isQuickEscape=true"
      );
      return data.data;
    } catch (error) {
      throw error;
    }
  }

  async fetchTourById(id) {
    try {
      const { data } = await instance.get(`/website-tour/get-tour-by-id/${id}`);
      return data;
    } catch (error) {
      throw error;
    }
  }
}

const tourService = new TourService();
export default tourService;
