import instance from "@/utils/axiosInstance";

class TourService {
  async fetchTours() {
    try {
      const { data } = await instance.get(`/website-tour/get-tours`);
      return data.data;
    } catch (error) {
      throw error;
    }
  }

  async fetchHotSellingTour() {
    try {
      const { data } = await instance.get("/tours/?is_hot_selling=true");
      return data.data;
    } catch (error) {
      throw error;
    }
  }
}

const tourService = new TourService();
export default tourService;
