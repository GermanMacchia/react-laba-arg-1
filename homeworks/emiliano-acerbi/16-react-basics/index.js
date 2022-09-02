'use strict';

function TrafficLight() {
  return (
    <div className="container">
      <div className="traffic-light"></div>
    </div>
  );
}

const rootNode = document.getElementById('root');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(TrafficLight));
