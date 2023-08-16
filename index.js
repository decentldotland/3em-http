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

app.use(function(req, res, next){
    req.setTimeout(500000, function(){
    });
    next();
});

app.post("/simulate", async (req, res) => {
  try {
    const data = req.body;
    const simulate = await simulateContract(data);
    res.json(simulate);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => console.log("Server started"));
