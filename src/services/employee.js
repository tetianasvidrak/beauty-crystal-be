const Employee = require("~/models/employee");

const employeeService = {
  createEmployee: async (data) => {
    if (data.phone) {
      const existing = await Employee.findOne({ phone: data.phone });
      if (existing) {
        const error = new Error("Employee with this phone already exists");
        error.status = 400;
        throw error;
      }
    }
    return await Employee.create(data);
  },

  getEmployees: async () => {
    return await Employee.find();
  },

  getEmployeeById: async (id) => {
    return await Employee.findById(id);
  },

  updateEmployee: async (id, updateData) => {
    if (updateData.phone) {
      const existing = await Employee.findOne({
        phone: updateData.phone,
        _id: { $ne: id },
      });
      if (existing) {
        const error = new Error("Employee with this phone already exists");
        error.status = 400;
        throw error;
      }
    }
    return await Employee.findByIdAndUpdate(id, updateData, { new: true });
  },

  deleteEmployee: async (id) => {
    return await Employee.findByIdAndDelete(id);
  },
};

module.exports = employeeService;
