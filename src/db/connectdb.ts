import mongoose from "mongoose";

export const connectDB = async (DATABASE_URL: string, DB_NAME: string) => {
    try {
        const DB_OPTIONS = {
            dbName: DB_NAME,
        }

        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
        console.log("Connected Successfully..");
    }
    catch (err) {
        console.log(err);
    }
}
