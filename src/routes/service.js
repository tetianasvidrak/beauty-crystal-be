const router = require("express").Router();
const {
  createService,
  getServices,
  getServiceById,
  updateService,
  deleteService,
} = require("~/controllers/service");
const authGuard = require("~/middleware/authGuard");

router.post("/", authGuard, createService);
router.get("/", authGuard, getServices);
router.get("/:id", authGuard, getServiceById);
router.put("/:id", authGuard, updateService);
router.delete("/:id", deleteService);

module.exports = router;
