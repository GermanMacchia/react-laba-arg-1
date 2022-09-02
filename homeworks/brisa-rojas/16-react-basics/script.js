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
        <div className="traffic-light__upper-thingy"></div>
        <div className="traffic-light__lights-container">
          <div className="traffic-light__light traffic-light__light_red"></div>
          <div className="traffic-light__light traffic-light__light_yellow"></div>
          <div className="traffic-light__light traffic-light__light_green"></div>
        </div>
      </div>
    );
  }

}

root.render(<TrafficLight />);
