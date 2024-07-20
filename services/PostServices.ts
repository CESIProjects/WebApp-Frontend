import axios from 'axios';

class PostService {
  private config: ReturnType<typeof useRuntimeConfig>;

  constructor() {
    this.config = useRuntimeConfig();
  }

  async fetchPosts() {
    try {
      const response = await axios.get(this.config.public.localhost + '/api/posts');
      return response.data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }
  }

  async fetchUserPosts(userId: string) {
    try {
      const response = await axios.get(this.config.public.localhost + '/api/posts/user/' + userId);
      return response.data;
    } catch (error) {
      console.error('Error fetching user posts:', error);
      throw error;
    }
  }

  async createPost(postData: any) {
    try {
      const response = await axios.post(this.config.public.localhost + '/api/posts/post', postData);
      return response.data;
    } catch (error) {
      console.error('Error creating post:', error);
      throw error;
    }
  }
}

export default new PostService();
