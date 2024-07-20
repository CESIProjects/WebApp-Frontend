import axios from 'axios';

class CategoryService {
  private config: ReturnType<typeof useRuntimeConfig>;

  constructor() {
    this.config = useRuntimeConfig();
  }

  async createCategory(name: string): Promise<void> {
    const newCategory = { name };

    try {
      const response = await axios.post(`${this.config.public.localhost}/api/categories/post`, newCategory);
      console.log("Category created successfully:", response.data);
    } catch (error: any) {
      console.error("Error creating category:", error.response.data);
      throw new Error("Erreur lors de la création de la catégorie");
    }
  }
  async fetchCategories() {
    try {
      const response = await axios.get(`${this.config.public.localhost}/api/categories`);
      return response.data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  }
}

export default new CategoryService();