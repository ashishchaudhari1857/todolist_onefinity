const mongoose = require('mongoose');
const express = require('express');
const cors=require('cors')
require('dotenv').config();
const TaskRoutes =require('./routes/TodoRoutes')
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}));
const PORT = process.env.PORT || 3000;

app.use(cors())
 
app.use('/api/task' ,TaskRoutes)
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });
