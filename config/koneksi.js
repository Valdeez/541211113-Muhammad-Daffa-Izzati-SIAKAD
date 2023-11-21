import mongoose from "mongoose";

const connectDB = async () => {
	await mongoose.connect("mongodb://127.0.0.1:27017/praktikumkk4c");
	console.log("Database connected");
};

export default connectDB;
