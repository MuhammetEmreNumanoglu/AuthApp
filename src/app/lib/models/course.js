import mongoose from "mongoose";

const { Schema } = mongoose;

const courseSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    date: {
      type: Date,
      required: true,
    },

    slug: {
      type: String,
      unique: true,
      index: true,
    },
  },
  {
    timestamps: true,
  },
);

courseSchema.pre("save", function () {
  if (!this.slug) {
    this.slug = this._id.toString();
  }
});

export default mongoose.models.Course || mongoose.model("Course", courseSchema);
