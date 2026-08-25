import mongoose from "mongoose";
const { Schema } = mongoose;

const nameSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: { type: String, required: true },
  },
  { timestamps:true },
);

export default mongoose.models.Name || mongoose.model("Name", nameSchema);
