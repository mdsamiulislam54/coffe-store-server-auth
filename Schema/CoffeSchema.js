import mongoose from "mongoose";


const coffeSchema = new mongoose.Schema({
  name: String,
  chef: String,
  suplier: String,
  taste: String,
  category: String,
  details: String,
  photo: String,
});

const coffeModel = mongoose.model("Coffe",coffeSchema )

export default coffeModel