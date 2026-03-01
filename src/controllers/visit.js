const visitService = require("~/services/visit");

const createVisit = async (req, res) => {
  try {
    const visit = await visitService.createVisit(req.body);
    res.status(201).json(visit);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getVisits = async (req, res) => {
  try {
    const filter = {};
    if (req.query.date) {
      const start = new Date(req.query.date);
      const end = new Date(req.query.date);
      end.setHours(23, 59, 59, 999);
      filter.date = { $gte: start, $lte: end };
    }

    const visits = await visitService.getVisits(filter);
    res.status(200).json(visits);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getVisitById = async (req, res) => {
  try {
    const { id } = req.params;
    const visit = await visitService.getVisitById(id);
    if (!visit) return res.status(404).json({ error: "Visit not found" });
    res.status(200).json(visit);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateVisit = async (req, res) => {
  try {
    const { id } = req.params;
    const visit = await visitService.updateVisit(id, req.body);
    if (!visit) return res.status(404).json({ error: "Visit not found" });
    res.status(200).json(visit);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteVisit = async (req, res) => {
  try {
    const { id } = req.params;
    await visitService.deleteVisit(id);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createVisit,
  getVisits,
  getVisitById,
  updateVisit,
  deleteVisit,
};
