const Category = require("~/models/category");

const categoryService = {
  createCategory: async (name, displayColor) => {
    const existing = await Category.findOne({ name });
    if (existing) {
      const error = new Error("Category with this name already exists");
      error.status = 400;
      throw error;
    }

    return Category.create({ name, displayColor });
  },

  getCategories: async () => {
    return await Category.find();
  },

  getCategoryById: async (id) => {
    return await Category.findById(id);
  },

  updateCategory: async (id, updateData) => {
    try {
      return await Category.findByIdAndUpdate(id, updateData, { new: true });
    } catch (err) {
      if (err.code === 11000) {
        const error = new Error("Category with this name already exists");
        error.status = 400;
        throw error;
      }
      throw err;
    }
  },

  deleteCategory: async (id) => {
    return await Category.findByIdAndDelete(id);
  },
};

module.exports = categoryService;
