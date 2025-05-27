import mongoose from "mongoose"

const connectDB = async (DATABASE_URL) => {
    try {
        await mongoose.connect(DATABASE_URL)
        console.log("MongoDB connected successfully");
        } catch (error) {
        console.error("MongoDB connection error:", error);
            
    }
    }
    export default connectDB;
        
        
    