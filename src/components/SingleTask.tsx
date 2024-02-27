import { Switch } from "@mui/material";
import { Task } from "../Task"
import DeleteIcon from '@mui/icons-material/Delete';
import { DeleteTask } from "./DeleteTask";
import { useEffect, useState } from "react";
import { EditTask } from "./EditTask";

interface SingleTaskProps {
  singleTask: Task;
  removeTask: (task?: Task) => void;
  updateTask: (task: Task) => void;
}

export const SingleTask: React.FC<SingleTaskProps> = ({ singleTask, removeTask, updateTask }) => {

  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [task, setTask] = useState<Task>({status: false})

  useEffect(() => {
    setTask(singleTask);
  }, [singleTask])
  

  const bgForPriority: { [key: string]: string } = {
    low: 'bg-green-500',
    medium: 'bg-yellow-500',
    high: 'bg-red-500'
  }

  const bgPriority = task && task?.priority ? bgForPriority[task?.priority.toLocaleLowerCase()] : '';

  return (
    <>
      <div className="flex hover:bg-gray-300" onClick={() => setOpenEdit(true)}>
        <span className={`${!task?.status ? 'bg-gray-400' : bgPriority} pl-3`} />
        <div className={`flex flex-row items-center justify-between w-full h-full py-5 pe-5`}>
          <span className="text-gray-600 text-2xl ml-3">{task?.name}</span>
          <div>
            <span>Assigned to: {task?.asignedTo}</span><span className="mx-3">|</span>
            <span>{task?.priority}</span>
            <Switch className="" checked={task?.status} onClick={(e) => e.stopPropagation()} onChange={(e) => setTask({...task, status:e.target.checked})
          }/>

          </div>
        </div>
        <button className="hover:bg-red-500 px-3" onClick={(e) => {
          e.stopPropagation();
          setOpenDelete(true);
        }}><DeleteIcon /></button>
      </div>
      <DeleteTask open={openDelete} onClose={() => setOpenDelete(false)} task={task} onSubmit={removeTask} />
      <EditTask open={openEdit} selectedTask={task} onClose={() => setOpenEdit(false)} onSubmit={(e) => {
        updateTask(e);
        setOpenEdit(false);
        }} />
    </>

  )
}
