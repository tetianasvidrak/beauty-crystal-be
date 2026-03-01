const router = require("express").Router();
const {
  createVisit,
  getVisits,
  getVisitById,
  updateVisit,
  deleteVisit,
} = require("~/controllers/visit");
const authGuard = require("~/middleware/authGuard");

router.post("/", authGuard, createVisit);
router.get("/", authGuard, getVisits);
router.get("/:id", authGuard, getVisitById);
router.put("/:id", authGuard, updateVisit);
router.delete("/:id", authGuard, deleteVisit);

module.exports = router;
