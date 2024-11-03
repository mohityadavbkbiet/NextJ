// MongoDB connection setup
import mongoose from 'mongoose';

const connectToDatabase = async () => {
    if (mongoose.connection.readyState === 1) {
        return;
    }

    await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

export default connectToDatabase;

// Placeholder for database models
// You can create models in a separate folder or in this file.
