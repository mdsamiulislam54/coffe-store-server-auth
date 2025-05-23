import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import coffeModel from "./Schema/CoffeSchema.js";
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

mongoose
  .connect(process.env.DB_URl)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("hello  hello maic check");
});
app.get("/coffe", async (req, res) => {
  try {
    const result = await coffeModel.find();
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

app.get("/coffes/:id", async (req, res) => {
  const id = req.params.id;
  const query = { _id: id };
  const result = await coffeModel.findOne(query);
  res.send(result);
});

app.post("/coffe", async (req, res) => {
  const coffeData = req.body;
  const newCoffeData = new coffeModel(coffeData);

  try {
    const result = await newCoffeData.save();
    res.status(201).json({
      message: "Coffee added successfully!",
      data: result,
    });
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put("/coffe/:id", async (req, res) => {
  const updateData = req.body;
  const id = req.params.id;
  const filter = { _id: id };
  const option = {upsert:true}
  const query = {
    $set: updateData
  };
  console.log(updateData);
  const result = await coffeModel.updateOne(filter,query,option);

  res.send(result);
});

app.delete("/coffe/:id", async (req, res) => {
  const coffeId = req.params.id;
  const query = { _id: coffeId };

  const result = await coffeModel.deleteOne(query);
  res.send(result);
});

app.listen(process.env.DB_PORT, () => {
  console.log(`Server is running on port ${process.env.DB_PORT}`);
});
