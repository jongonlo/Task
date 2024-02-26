import { Task } from "../Task";
import { SingleTask } from "./SingleTask";

interface TaskListProps {
  tasks: Task[];
  removeTask: (task?: Task) => void;
}

export const TaskList: React.FC<TaskListProps> = ({tasks, removeTask}) => {
  return (
    <ul className='mt-10 w-1/2 bg-gray-200 divide-y divide-solid divide-gray-300 rounded-lg'>
      {tasks.map((task) => <li key={task.id} className="hover:bg-gray-300"><SingleTask task={task} removeTask={removeTask}/></li>)}
    </ul>
  )
}
