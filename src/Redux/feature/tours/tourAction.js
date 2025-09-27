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

}

const tourService = new TourService();
export default tourService;
