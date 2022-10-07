import deleteIcon from '../../assets/icons/delete.svg';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../redux/slice';
import './Delete.css'
const Delete = ({id}) => {
  const dispatch = useDispatch();
  const removeTask = () => {
    dispatch(
      deleteTask({
        id: id,
      }),
    );
  };
  return (
    <div className='task__delete'>
      <img src={deleteIcon} alt="Delete" className="delete__icon" onClick={() => {
          removeTask();
        }}/>
    </div>
  );
};

export default Delete;
