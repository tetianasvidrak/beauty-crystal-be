const Visit = require("~/models/visit");
const { calculateVisitDuration } = require("../helpers/calculateVisitDuration");

const visitService = {
  createVisit: async (data) => {
    return await Visit.create(data);
  },

  getVisits: async (filter = {}) => {
    const visits = await Visit.find(filter)
      .populate("employee", "name phone")
      .populate("client", "name phone")
      .populate({
        path: "services.service",
        select: "name price duration _id",
        populate: {
          path: "category",
          select: "displayColor",
        },
      });

    const visitsWithDuration = visits.map((visit) => ({
      ...visit.toObject(),
      duration: calculateVisitDuration(visit.toObject()),
    }));

    return visitsWithDuration;
  },

  getVisitById: async (id) => {
    return await Visit.findById(id)
      .populate("employee", "name phone")
      .populate("client", "name phone")
      .populate("services.service", "name price duration");
  },

  updateVisit: async (id, updateData) => {
    return await Visit.findByIdAndUpdate(id, updateData, { new: true })
      .populate("employee", "name phone")
      .populate("client", "name phone")
      .populate("services", "name price duration");
  },

  deleteVisit: async (id) => {
    return await Visit.findByIdAndDelete(id);
  },
};

module.exports = visitService;
