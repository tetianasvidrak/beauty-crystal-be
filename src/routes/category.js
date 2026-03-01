const router = require("express").Router();

const {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} = require("~/controllers/category");

const authGuard = require("~/middleware/authGuard");

router.post("/", authGuard, createCategory);
router.get("/", authGuard, getCategories);
router.get("/:id", authGuard, getCategoryById);
router.put("/:id", authGuard, updateCategory);
router.delete("/:id", authGuard, deleteCategory);

module.exports = router;
