import './Button.css';
import DeleteIcon from '../DeleteIcon/DeleteIcon';
import XIcon from '../XIcon/XIcon';
import DivisionIcon from '../DivisionIcon/DivisionIcon';
import PlusIcon from '../PlusIcon/PlusIcon';
import MinusIcon from '../MinusIcon/MinusIcon';
const Button = (props) => {
  return (
    <button
      className={`button${props.value.toString().match(/[-dCX+=÷]/g) ? ' button--grey' : ''}
      ${props.value === 'C' ? ' button--C' : ''}
      ${props.value === 'delete' ? ' button--delete' : ''}
      ${props.value === '=' ? ' button--equal' : ''}
      ${props.value === '%' ? ' button--percentage' : ''}
      ${props.value === 0 ? ' button--zero' : ''}
      ${props.value === '.' ? ' button--point' : ''}`}
      onClick={props.onClick}
    >
      {props.value === 'delete' ? (
        <DeleteIcon />
      ) : props.value === 'X' ? (
        <XIcon />
      ) : props.value === '÷' ? (
        <DivisionIcon />
      ) : props.value === '+' ? (
        <PlusIcon />
      ) : props.value === '-' ? (
        <MinusIcon />
      ) : (
        props.value
      )}
    </button>
  );
};

export default Button;
