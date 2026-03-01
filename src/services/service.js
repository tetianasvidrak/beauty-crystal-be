const Service = require("~/models/service");
const Category = require("~/models/category");

const serviceService = {
  createService: async (category, name, price, duration) => {
    const categoryResult = await Category.findById(category);
    if (!categoryResult) {
      const error = new Error("Category not found");
      error.status = 400;
      throw error;
    }

    const existingService = await Service.findOne({ name, category });
    if (existingService) {
      const error = new Error(
        "Service with this name already exists in this category"
      );
      error.status = 400;
      throw error;
    }

    const service = await Service.create({
      category,
      name,
      price,
      duration,
    });
    return await service.populate("category", "name displayColor");
  },

  getServices: async () => {
    return await Service.find().populate("category", "name displayColor");
  },

  getServiceById: async (id) => {
    return await Service.findById(id).populate("category", "name displayColor");
  },

  updateService: async (id, updateData) => {
    try {
      return await Service.findByIdAndUpdate(id, updateData, {
        new: true,
      }).populate("category", "name displayColor");
    } catch (err) {
      if (err.code === 11000) {
        const error = new Error(
          "Service with this name already exists in this category"
        );
        error.status = 400;
        throw error;
      }
      throw err;
    }
  },

  deleteService: async (id) => {
    return await Service.findByIdAndDelete(id);
  },
};

module.exports = serviceService;
