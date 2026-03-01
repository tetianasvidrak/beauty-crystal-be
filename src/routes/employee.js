const router = require("express").Router();
const {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} = require("~/controllers/employee");

const authGuard = require("~/middleware/authGuard");

router.post("/", authGuard, createEmployee);
router.get("/", authGuard, getEmployees);
router.get("/:id", authGuard, getEmployeeById);
router.put("/:id", authGuard, updateEmployee);
router.delete("/:id", authGuard, deleteEmployee);

module.exports = router;
