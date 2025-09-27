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

  async signup(payload) {
    try {
      const { data } = await instance.post(`/user/user-register`, payload);
      return data.data;
    } catch (error) {
      throw error;
    }
  }

  async logout() {
    try {
      // This is a dummy implementation. In a real app, you might want to
      // call a backend endpoint to invalidate the user's session/token.
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