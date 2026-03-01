require("dotenv").config();
require("module-alias/register");
require("./module-aliases");
const express = require("express");
const serverSetup = require("~/initialization/serverSetup");

const app = express();

const start = async () => {
  try {
    await serverSetup(app);
  } catch (err) {
    console.error("❌ Server startup failed:", err);
  }
};

start();
