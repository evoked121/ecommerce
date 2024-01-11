import mongoose from "mongoose";

const { Schema } = mongoose;

const categorySchema = new Schema({
  category: {
    type: String,
    required: [true, "Please Enter Category"],
  },
});

export default mongoose.model("Category", categorySchema);
