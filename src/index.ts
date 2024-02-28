import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import contactRoutes from './routes/contacts';
import { notFound, errorHandler } from './utils/errorHandlers';

dotenv.config();

const app = express();

app.use(bodyParser.json());

// Database connection
mongoose.connect(process.env.DB_URI as string)
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Routes
app.use('/api/contacts', contactRoutes);

app.use(notFound);
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
