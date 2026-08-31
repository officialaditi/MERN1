import mongoose from "mongoose";


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB connected successfully ${conn.connection.host}`.bgGreen.underline)
    } catch (err) {
        console.error(`Error: ${err.message}`.red);
        process.exit(1);



    }
}

export default connectDB;