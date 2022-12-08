require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');

//middleware
app.use(express.json({}));

//routes
app.use('/api/v1/tasks', tasks);

//server & db
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log('Successfully connected to db...');
    app.listen(port, () => {
      console.log('Server is started on 3000');
    });
  } catch (error) {
    console.log(error);
  }
};

start();
