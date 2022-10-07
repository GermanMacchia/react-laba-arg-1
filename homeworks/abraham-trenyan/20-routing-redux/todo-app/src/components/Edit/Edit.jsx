import editIcon from '../../assets/icons/edit.svg';
import './Edit.css';
import { useDispatch } from 'react-redux';
import  editTask  from '../../redux/slice';
const Edit = ({ id }) => {
  const dispatch = useDispatch();
  const editTodo = () => {
    dispatch(
      editTask({
        id: id,
      }),
    );
  };
  return (
    <div className="task__edit">
      <img
        src={editIcon}
        alt="Edit"
        className="edit__icon"
        onClick={() => {
          editTodo();
        }}
      />
    </div>
  );
};

export default Edit;
