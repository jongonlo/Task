import { Box, Button, Modal } from '@mui/material'
import { Task } from '../Task';

interface DeleteTaskProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (task?: Task) => void;
  task?: Task;
}


export const DeleteTask: React.FC<DeleteTaskProps> = ({open, onClose, task, onSubmit}) => {

  const bgForPriority: { [key: string]: string } = {
    low: 'bg-green-500',
    medium: 'bg-yellow-500',
    high: 'bg-red-500'
  }

  const bgPriority = task?.priority ? bgForPriority[task?.priority.toLocaleLowerCase()] : '';

  return (
    <Modal open={open} onClose={onClose} className='flex items-center justify-center h-full'>
      <Box>
        <div className='bg-white rounded-lg shadow-lg outline-none w-[30rem] h-52 flex flex-col justify-between'>
            <div className={`${bgPriority} h-10 rounded-t-lg`}>

            </div>
            <div className='p-6 text-lg text-gray-700'>
                Are you sure to remove <span className='font-bold'> {task?.name}</span>
            </div>
            <div className='self-end m-3 gap-3 flex'>
              <button className='bg-green-500 px-4 py-3 rounded-md text-white' onClick={onClose}>Cancel</button>
              <button className='bg-red-500 px-4 py-3 rounded-md text-white' onClick={() => onSubmit(task)}>Yes</button>
            </div>
        </div>
      </Box>
      
    </Modal>
  )
}
