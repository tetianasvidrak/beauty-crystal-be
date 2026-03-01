const express = require("express");
const cors = require("cors");
const router = require("~/routes");

const initialization = (app) => {
  app.use(express.json({ limit: "10mb" }));
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());

  app.use("/", router);
};

module.exports = initialization;
