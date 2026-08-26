import mongoose, { mongo } from "mongoose";
const { Schema } = mongoose;

const courseSchema = new Schema(
  {
    title: String,
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: Number,
    date: Date,
    slug: {
      type: String,
      unique: true,
      index: true,
    },
  },
  { timestamps: true },
);

courseSchema.pre("save", function () {
  if (!this.slug) {
    this.slug = this_id.toString();
  }
});
export default mongoose.models.Course || mongoose.model("Course", courseSchema);
