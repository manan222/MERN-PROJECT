const Task = require('../model/Task');
const TaskService = {
    addTask: async function (title, description, priority, status, deadline) {
        const task = new Task({
            title,
            description,
            priority,
            status,
            deadline,
        });

        try {
            console.log("about to save the task---------------->");
            await task.save();
            return { message: 'Task saved successfully' }
        } catch (e) {
            return e;
        }
    },

    updateTask: async function (title, description, priority, status, deadline, taskId) {

        try {
            console.log("about to save the task---------------->");

            const task = await Task.findById(taskId);
            if (task) {
                await task.updateOne({ title: title, description: description, priority: priority, status: status, deadline: deadline })
                return { message: 'Task updated successfully' }
            }

        } catch (e) {
            return e;
        }
    },

    getTasks: async () => {
        try {
            const tasks = await Task.find();
            return { data: tasks }
        }
        catch (error) {
            return error;
        }
    },

    getTask: async (taskId) => {
        try {
            const task = await Task.findById(taskId);
            return { data: task }
        }
        catch (error) {
            return error;
        }
    },
    deleteTask: async (taskId) => {
        try {
            await Task.deleteOne({ _id: taskId });
            return { message: 'Task deleted successfully' }
        }
        catch (error) {
            return error;
        }
    }

}
module.exports = TaskService;