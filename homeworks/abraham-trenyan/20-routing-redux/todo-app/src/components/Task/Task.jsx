import Edit from '../Edit/Edit';
import Delete from '../Delete/Delete';
import './Task.css'
const Task = () => {
  return (
    <div className="task">
      <input className='task__input' type="text" value="task" />
      <Edit />
      <Delete />
    </div>
  );
};

export default Task;
