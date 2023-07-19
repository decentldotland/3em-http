// const express = require('express');
// const bodyParser = require('body-parser');
// const { simulateContract } = require("@three-em/node");

import express from "express";
import bodyParser from "body-parser";
import { simulateContract } from "@three-em/node";

const app = express();
const port = process.env.PORT || 3000;

app.use(
  bodyParser.urlencoded({
    limit: "200mb",
    extended: false,
  }),
);
app.use(bodyParser.json({ limit: "200mb" }));

app.post("/simulate", async (req, res) => {
  const data = req.body;
  const simulate = await simulateContract(data);
  res.json(simulate);
});

app.listen(port, () => console.log("Server started"));
