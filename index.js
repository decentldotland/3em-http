// const express = require('express');
// const bodyParser = require('body-parser');
// const { simulateContract } = require("@three-em/node");

import express from "express";
import bodyParser from "body-parser";
import { simulateContract } from "@three-em/node";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/simulate', async (req, res) => {
    const data  = req.body;
    const simulate = await simulateContract(data);
    res.json(simulate)
})

app.listen(port, () => console.log('Server started'));