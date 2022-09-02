'use strict';

function TrafficLight() {
  return <h1 className="title">Hello</h1>;
}

const rootNode = document.getElementById('root');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(TrafficLight));
