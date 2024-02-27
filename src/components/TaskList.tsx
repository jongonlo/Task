import { Task } from "../Task";
import { SingleTask } from "./SingleTask";

interface TaskListProps {
  tasks: Task[];
  removeTask: (task?: Task) => void;
  updateTask: (task: Task) => void;
}

export const TaskList: React.FC<TaskListProps> = ({tasks, removeTask, updateTask}) => {

  return (
    <ul className='mt-10 w-1/2 bg-gray-200 divide-y divide-solid divide-gray-300 rounded-lg'>
      {tasks.map((task) => <li key={task.id}><SingleTask singleTask={task} removeTask={removeTask} updateTask={updateTask}/></li>)}
    </ul>
  )
}
