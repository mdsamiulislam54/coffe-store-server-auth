import mongoose from "mongoose";


const coffeSchema = new mongoose.Schema({
  name: String,
  chef: String,
  suplier: String,
  taste: String,
 
  details: String,
  photo: String,
  price:Number
});

const coffeModel = mongoose.model("Coffe",coffeSchema )

export default coffeModel