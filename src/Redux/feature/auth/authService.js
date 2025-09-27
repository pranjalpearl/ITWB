import instance from "@/utils/axiosInstance";

class AuthService {
  async login(payload) {
    try {
      const { data } = await instance.post(`/user/login`, payload);
      return data.data;
    } catch (error) {
      throw error;
    }
  }

  async logout() {
    try {
      const dummyResponse = {
        success: true,
        message: "Logged out successfully",
      };
      return dummyResponse.success;
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();
export default authService;
