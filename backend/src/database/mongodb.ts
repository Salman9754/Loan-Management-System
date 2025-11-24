import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env";

if (!DB_URI) {
    throw new Error("Please Define DB URI in ENV")
}

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI ?? "")
        console.log("connected to mongoDB");

    } catch (error) {
        console.error(error);
        process.exit()
    }
}

export default connectToDatabase