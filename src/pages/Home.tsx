import { useEffect, useState } from "react";
import { Input } from "../components/Input"
import { TaskList } from "../components/TaskList"
import { Task } from "../Task";

export const Home = () => {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState<Task>({});

  useEffect(() => {
    var taskList: Task[]= [];
    taskList.push({id:1, name: 'Task 1', asignedTo: 'Me', priority: 'Low', status: true})
    taskList.push({id:2, name: 'Task 2', asignedTo: 'Richard', priority: 'High', status: true})
    taskList.push({id:3, name: 'Task 3', asignedTo: 'Jimmy', priority: 'Medium', status: true})
    taskList.push({id:4, name: 'Task 4', asignedTo: 'Me', priority: 'Medium', status: false})
    taskList.push({id:5, name: 'Task 5', asignedTo: 'Jerry', priority: 'Low', status: true})
    taskList.push({id:6, name: 'Task 6', asignedTo: 'Bryan', priority: 'High', status: true})

    setTasks(taskList);
  }, [])
  

  const handleTaskName = (value: string) =>{
    setTask({id: tasks.length+1,name: value, asignedTo: 'Undesignated', priority: 'Low', status: true});
  }

  const handelAddTask = (key: any) =>{
    if(key.keyCode==13){
      setTasks([...tasks, task])
    }
  }

  const handleRemoveTask = (taskToRemove?: Task) => {
    setTasks(tasks.filter(task => task.id !== taskToRemove?.id));
  }

  return (
    <>
      <div className="flex flex-col content-around items-center w-full">
        <div className="text-white font-bold text-5xl pt-28 border-cyan-">Your Tasks</div>
        <Input inputClassName="w-1/2 mt-10 h-16 text-3xl p-3 text-gray-500 rounded-lg border-1 focus:outline-none focus-visible:border-cyan-400 focus-visible:border-4" 
        placeholder="Add a task name" type="text"
        onChange={ (e) => handleTaskName(e)} onKeyUp={(e) => handelAddTask(e)}/>
        <TaskList tasks={tasks} removeTask={handleRemoveTask}/>
      </div>
    </>
  )
}
