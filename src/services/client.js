const Client = require("~/models/client");

const clientService = {
  createClient: async (name, phone) => {
    return await Client.create({ name, phone });
  },

  getClients: async () => {
    return await Client.find();
  },

  updateClient: async (id, updateData) => {
    try {
      const client = await Client.findByIdAndUpdate(id, updateData, {
        new: true,
      });

      return client;
    } catch (err) {
      throw err;
    }
  },

  deleteClient: async (id) => {
    return await Client.findByIdAndDelete(id);
  },
};

module.exports = clientService;
