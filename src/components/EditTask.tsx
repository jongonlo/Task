import { Box, Modal } from "@mui/material";
import { Task } from "../Task"
import { Input } from "./Input";
import { useEffect, useState } from "react";

interface EditTaskProps {
  selectedTask: Task;
  open: boolean;
  onClose: () => void;
  onSubmit: (task: Task) => void;
}

export const EditTask: React.FC<EditTaskProps> = ({selectedTask, open, onClose, onSubmit}) => {

  const [task, setTask] = useState<Task>({});

  useEffect(() => {
    setTask(selectedTask);
  }, [selectedTask])
  
  
  const bgForPriority: { [key: string]: string } = {
    low: 'bg-green-500',
    medium: 'bg-yellow-500',
    high: 'bg-red-500'
  }

  const bgPriority = task?.priority ? bgForPriority[task?.priority.toLocaleLowerCase()] : '';

  return (
    <Modal open={open} onClose={onClose} className='flex items-center justify-center h-full'>
      <Box>
        <div className='bg-white rounded-lg shadow-lg outline-none w-[30rem] flex flex-col'>
          <div className={`${bgPriority} h-10 rounded-t-lg`}></div>
          <div className="w-96 flex self-center flex-col mt-5">
            <Input label="Task name" value={task.name} labelClassName="font-medium" type="text" onChange={(e) => setTask({...task, name: e})} onKeyUp={() => {}}/>
            <Input label="Asign to" value={task.asignedTo} labelClassName="font-medium" type="text" onChange={(e) => setTask({...task, asignedTo: e})} onKeyUp={() => {}}/>
            <Input label="Priority" value={task.priority} labelClassName="font-medium" type="text" onChange={(e) => setTask({...task, priority: e})} onKeyUp={() => {}}/>
          </div>
          <div className='self-end m-3 gap-3 flex'>
              <button className='bg-green-500 px-4 py-3 rounded-md text-white' onClick={onClose}>Cancel</button>
              <button className='bg-blue-500 px-4 py-3 rounded-md text-white' onClick={() => onSubmit(task)}>Save</button>
            </div>
        </div>
      </Box>
      
    </Modal>
  )
}
