const rootEl = document.querySelector('#root');
const root = ReactDOM.createRoot(rootEl);

class TrafficLight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
    };
  }

  render() {
    let currentColor = this.state.color;
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
