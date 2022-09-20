import './Screen.css';
const Screen = ({ value }) => {
  return (
    <div className="screen">
      <h2 className="screen__calc">{value}</h2>
      <h1 className="screen__result">{value.length > 0 ? value : 0}</h1>
    </div>
  );
};

export default Screen;
