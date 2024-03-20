import mongoose from 'mongoose';

const dbConnect = () => {
  const connectionURL = process.env.DATABASE_URL;
  mongoose.connect(connectionURL, {
    useUnifiedTopology: true,
  });
};

export default dbConnect;
