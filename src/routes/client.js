const router = require("express").Router();

const {
  createClient,
  getClients,
  updateClient,
  deleteClient,
} = require("~/controllers/client");
const {getVisitsByClient} = require("~/controllers/visit")

const authGuard = require("~/middleware/authGuard");

router.post("/", authGuard, createClient);
router.get("/", authGuard, getClients);
router.put("/:id", authGuard, updateClient);
router.delete("/:id", authGuard, deleteClient);
router.get("/:clientId/visits", authGuard, getVisitsByClient);

module.exports = router;
