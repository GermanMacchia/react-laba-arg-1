const rootContainer = document.querySelector('#root_container');
const li = document.querySelector('li');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');
const TrafficLight = () => {
  return (
    <>
      <div className="traffic--light__top"></div>
      <div className="traffic--light__body">
        <ul className="traffic--light">
          <li className="light"></li>
          <li className="light"></li>
          <li className="light"></li>
        </ul>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(rootContainer);
root.render(<TrafficLight />);
