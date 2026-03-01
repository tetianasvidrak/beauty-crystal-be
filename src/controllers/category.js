const categoryService = require("~/services/category");

const createCategory = async (req, res) => {
  try {
    const { name, displayColor } = req.body;
    const category = await categoryService.createCategory(name, displayColor);
    res.status(201).json(category);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message });
  }
};

const getCategories = async (_req, res) => {
  try {
    const categories = await categoryService.getCategories();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await categoryService.getCategoryById(id);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const category = await categoryService.updateCategory(id, updateData);
    if (!category) return res.status(404).json({ error: "Category not found" });
    res.status(200).json(category);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await categoryService.deleteCategory(id);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
