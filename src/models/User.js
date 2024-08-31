import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please provide Email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide password"],
      unique: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
