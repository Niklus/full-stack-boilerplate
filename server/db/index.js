'use strict';

import mongoose from 'mongoose';

//mongoose setup
const connectMongoose = () => {
  mongoose.connect(process.env.DATABASE_URI);
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
}

export default connectMongoose;
