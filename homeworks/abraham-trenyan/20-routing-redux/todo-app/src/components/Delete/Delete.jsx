import deleteIcon from '../../assets/icons/delete.svg';
import './Delete.css'
const Delete = () => {
  return (
    <div className='task__delete'>
      <img src={deleteIcon} alt="Delete" className="delete__icon"/>
    </div>
  );
};

export default Delete;
