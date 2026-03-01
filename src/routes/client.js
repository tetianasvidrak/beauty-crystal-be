const router = require("express").Router();

const {
  createClient,
  getClients,
  updateClient,
  deleteClient,
} = require("~/controllers/client");

const authGuard = require("~/middleware/authGuard");

router.post("/", authGuard, createClient);
router.get("/", authGuard, getClients);
router.put("/:id", authGuard, updateClient);
router.delete("/:id", authGuard, deleteClient);

module.exports = router;
