import editIcon from '../../assets/icons/edit.svg';
import './Edit.css'
const Edit = () => {
  return (
    <div className='task__edit'>
      <img src={editIcon} alt="Edit" className='edit__icon'/>
    </div>
  );
};

export default Edit;
