import mongoose, { connect } from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGO_URL || `mongodb+srv://bsmanupriyan:dSqOTp4i5D9cpQyo@cluster0.ewd4med.mongodb.net/`
    );
    console.log(`Connected to Mongodb Database ${conn.connection.host}`.bgMagenta.white);
  } catch (err) {
    console.log(`Error in mongodb : ${err}`.bgRed.white);
  }
};

export default connectDB;
