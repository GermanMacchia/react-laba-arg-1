const rootEl = document.querySelector('#root');
const root = ReactDOM.createRoot(rootEl);

class TrafficLight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lightColors: ['red', 'yellow', 'green'],
      counter:0
    };
  }

    // componentDidMount() {
    //     setInterval()
    // }
  render() {
    let lightIndex = this.state.counter % 3;
    let currentColor = this.state.lightColors[lightIndex];
    this.setState(()=> {counter: this.state.counter + 1});
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
    let className = "traffic-light__light";
    if (color === activeLight) {
        className += " traffic-light__light_" + color;
    }
    
    return (
        <div className={className} key={color}/>
    )
}

root.render(<TrafficLight />);
