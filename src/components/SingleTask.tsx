import { Switch } from "@mui/material";
import { Task } from "../Task"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DeleteTask } from "./DeleteTask";
import { useState } from "react";

interface SingleTaskProps {
  task?: Task;
  removeTask: (task?: Task) => void;
}

export const SingleTask: React.FC<SingleTaskProps> = ({ task, removeTask }) => {

  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const bgForPriority: { [key: string]: string } = {
    low: 'bg-green-500',
    medium: 'bg-yellow-500',
    high: 'bg-red-500'
  }

  const bgPriority = task && task?.priority ? bgForPriority[task?.priority.toLocaleLowerCase()] : '';

  return (
    <>
      <div className="flex">
        <span className={`${!task?.status ? 'bg-gray-400' : bgPriority} pl-3`} />
        <div className={`flex flex-row items-center justify-between w-full h-full py-5 pe-5`}>
          <span className="text-gray-600 text-2xl ml-3">{task?.name}</span>
          <div>
            <span>Assigned to: {task?.asignedTo}</span><span className="mx-3">|</span>
            <span>{task?.priority}</span>
            <Switch className="" checked={task?.status} />
            
          </div>
        </div>
        <button className="hover:bg-red-500 px-3" onClick={() => setOpenDelete(true)}><DeleteIcon/></button>
      </div>
      <DeleteTask open={openDelete} onClose={() => setOpenDelete(false)} task={task} onSubmit={removeTask}/>
    </>

  )
}
