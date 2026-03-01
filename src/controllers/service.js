const serviceService = require("~/services/service");

const createService = async (req, res) => {
  try {
    const { category, name, price, duration } = req.body;
    const service = await serviceService.createService(
      category,
      name,
      price,
      duration
    );
    res.status(201).json(service);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message });
  }
};

const getServices = async (_req, res) => {
  try {
    const services = await serviceService.getServices();
    res.status(200).json(services);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getServiceById = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await serviceService.getServiceById(id);
    if (!service) return res.status(404).json({ error: "Service not found" });
    res.status(200).json(service);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const service = await serviceService.updateService(id, updateData);
    if (!service) return res.status(404).json({ error: "Service not found" });
    res.status(200).json(service);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    await serviceService.deleteService(id);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createService,
  getServices,
  getServiceById,
  updateService,
  deleteService,
};
