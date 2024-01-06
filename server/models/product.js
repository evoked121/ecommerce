import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({});

export default mongoose.model("Product", productSchema);
