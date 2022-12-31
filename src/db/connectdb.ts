import mongoose from "mongoose";

export const connectDB = async (DATABASE_URL: string) => {
    try {
        const DB_OPTIONS = {
            dbName: "laali",
        }

        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
        console.log("Connected Successfully..");
    }
    catch (err) {
        console.log(err);
    }
}
