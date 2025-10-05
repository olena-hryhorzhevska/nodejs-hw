import mongoose from 'mongoose';

export const connectMongoDB = async () => {
  try {
    const mongoURL = process.env.MONGO_URL;
    await mongoose.connect(mongoURL);
    console.log('✅ MongoDB connection established successfully');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
};