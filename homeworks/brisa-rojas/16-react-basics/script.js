const rootEl = document.querySelector('#root');
const root = ReactDOM.createRoot(rootEl);
const TIME_LAPSE = 1500;

class TrafficLight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lightColors: ['red', 'yellow', 'green'],
      counter: 0,
    };
  }

  render() {
    let lightIndex = this.state.counter % 3;
    let currentColor = this.state.lightColors[lightIndex];
    setInterval(() => {this.setState({lightColors: ['red', 'yellow', 'green'] , counter: lightIndex + 1})} , TIME_LAPSE);
    return (
      <div className="traffic-light">
        <div className="traffic-light__head"></div>
        <div className="traffic-light__body">
          {Light('red', currentColor)}
          {Light('yellow', currentColor)}
          {Light('green', currentColor)}
        </div>
      </div>
    );
  }
}

function Light(color, activeLight) {
  let className = 'traffic-light__light';
  if (color === activeLight) {
    className += ' traffic-light__light_' + color;
  }

  return <div className={className} key={color} />;
}

root.render(<TrafficLight />);
