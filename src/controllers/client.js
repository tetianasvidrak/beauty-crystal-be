const clientService = require("~/services/client");

const createClient = async (req, res) => {
  try {
    const { name, phone } = req.body;
    const client = await clientService.createClient(name, phone);
    res.status(201).json(client);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message });
  }
};

const getClients = async (_req, res) => {
  try {
    const clients = await clientService.getClients();
    res.status(200).json(clients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const client = await clientService.updateClient(id, updateData);

    if (!client) {
      return res.status(404).json({ error: "Client not found" });
    }

    res.status(200).json(client);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message });
  }
};

const deleteClient = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await clientService.deleteClient(id);

    if (!client) {
      return res.status(404).json({ error: "Client not found" });
    }

    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createClient,
  getClients,
  updateClient,
  deleteClient,
};
