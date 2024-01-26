const express = require('express')
const router = express.Router();
const TaskController=require('../controllers/TodoController')

router.post('/add' ,TaskController.addTask)
 router.get('/' ,TaskController.findAllTasks)
 router.put('/update/:id' ,TaskController.UpdateTask)
 router.put('/update/done/:id' ,TaskController.Mark_as_Done)
 router.delete('/delete/:id' ,TaskController.deleteTask)




 module.exports=router;