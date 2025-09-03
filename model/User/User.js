const mongoose = require("mongoose");

//schema

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    lastLogin: {
      type: Date,
      default: Date.now(),
    },

    role: {
      type: String,
      required: true,
      enum: ["user", "admin"],
      default: "user",
    },

    password: {
      type: String,
      required: true,
    },

    isVerified: {
      type: String,
      default: false,
    },

    accountLevel: {
      type: String,
      enum: ["bronze", "silver", "gold"],
      default: "bronze",
    },

    profilePicture: {
      type: String,
      default: "",
    },

    coverImage: {
      type: String,
      default: "",
    },

    bio: {
      type: String,
    },

    location: {
      type: String,
    },

    notificationPreferences: {
      email: { type: String, default: true },
    },

    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },

    profileViewers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    blockUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
    likedPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],

    passwordResetToken: {
      type: String,
    },

    passwordResetExpires: {
      type: Date,
    },

    accountVerificationToken: {
      type: String,
    },

    accountVerificationExpires: {
      type: Date,
    },
  },

  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.export = User;
