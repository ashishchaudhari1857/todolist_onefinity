const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  task: {
    type: String, 
    required: true 
  },
  completed: {
    type: Boolean,
    default: false
  },
  endDate:{
    type:String,

  }
  
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
