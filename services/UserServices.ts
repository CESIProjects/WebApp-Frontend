import axios from 'axios';
import { useUserStore } from '@/stores/user';
import { navigateTo } from 'nuxt/app';

class UserServices {
  private userStore: ReturnType<typeof useUserStore>;
  private config: ReturnType<typeof useRuntimeConfig>;

  constructor() {
    this.userStore = useUserStore();
    this.config = useRuntimeConfig();
  }

  async login(username: string, password: string) {
    if (!username || !password) {
      throw new Error("Veuillez remplir tous les champs.");
    }

    try {
      const response = await axios.post(this.config.public.localhost + "/api/auth/signin", {
        username,
        password,
      });

      console.log("User login successfully. ID:", response);

      this.userStore.setUser({
        username,
        token: response.data.accessToken,
        role: response.data.role,
        email: response.data.email,
        id: response.data.id,
        isLoggedIn: true,
      });

      console.log("User connected:", this.userStore.user);

      navigateTo("/");
    } catch (error: any) {
      console.error("Error login user:", error);

      if (error.response && error.response.status === 400 && error.response.data.message) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error("Erreur lors de la connexion");
      }
    }
  }

}

export default UserServices;
