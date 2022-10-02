import './Add.css';
const Add = () => {
  return (
    <form className="add">
      <input className="add__input" type="text" placeholder="Create Todo-Task" />
      <button className="add__button" type="submit">
        Add
      </button>
    </form>
  );
};

export default Add;
