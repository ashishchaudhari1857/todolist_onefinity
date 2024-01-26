 const Task = require('../model/TodoModel');
    const addTask=async(req,res)=>{
        const {task }=req.body;
           try {
            const addedTask = await Task.create({
                task: task,
              });
                   return res.status(200).json({addedTask})
           } catch (error) {
            return res.status(500).send(`Error creating the user: ${error}`);
            
           }

    }

    const findAllTasks = async (req, res) => {
        try {
          const allTasks = await Task.find();
          return res.status(200).json({ tasks: allTasks });
        } catch (error) {
          return res.status(500).send(`Error fetching tasks: ${error}`);
        }
      };

      const deleteTask = async (req, res) => {
        const {id} = req.params;
        try {
            const task = await Task.findById(id);

        if(!task){
            return res.status(400).json({msg:"No task with that id"});
            }
            await task.deleteOne();
          return res.status(200).json({ message: "delete Succesfully" });
        } catch (error) {
          return res.status(500).send(`Error fetching tasks: ${error}`);
        }
      };

          const Mark_as_Done=async(req, res)=>{
            const{id}=req.params;

            try {
                const task = await Task.findById(id);
    
            if(!task){
                return res.status(400).json({msg:"No task with that id"});
                }
                task.completed=!task.completed;
                 await task.save();
              return res.status(200).json({ message: "mark as done " });
            } catch (error) {
              return res.status(500).send(`Error fetching tasks: ${error}`);
            }
          }


          const UpdateTask=async(req, res)=>{
            const{id}=req.params;
            const{task}=req.body;

            try {
                const get_task = await Task.findById(id);
    
            if(!get_task){
                return res.status(400).json({msg:"No task with that id"});
                }
                get_task.task=task
                 await get_task.save();
              return res.status(200).json({ message: "updated  successfully" });
            } catch (error) {
              return res.status(500).send(`Error fetching tasks: ${error}`);
            }
          }

    module.exports={
        addTask,
        findAllTasks,
        deleteTask,
        UpdateTask,
        Mark_as_Done
    }
