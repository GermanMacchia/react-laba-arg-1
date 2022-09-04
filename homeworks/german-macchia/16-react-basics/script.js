const TrafficLight = () => {
  React.useEffect(() => {
    //start the loop click
    Light.tick();
  });

  return (
    <div className="container">
      <div className="post" />
      <div className="traffic-light">
        <div className="traffic-light__light-rail">
          {/*Change color and order as you will*/}
          <Light color="red" order={1} />
          <Light color="yellow" order={2} />
          <Light color="green" order={0} />
        </div>
      </div>
    </div>
  );
};

class Light extends React.Component {
  static counter = 0;
  static time = 0;

  constructor(props) {
    super(props);
    this.state = {
      light: props.color,
      stop: "grey",
      on: false,
      order: props.order,
    };
  }

  static tick() {
    setInterval(() => {
      Light.counter++;
    }, Light.time);
  }

  componentDidMount() {
    setInterval(() => {
      if (Light.counter % 3 === this.state.order) {
        this.setState({ on: true });
      } else {
        this.setState({ on: false });
      }
      this.forceUpdate();
    }, Light.time);
  }

  render() {
    return (
      <div
        className="light"
        key={this.state.light}
        style={{
          backgroundColor: this.state.on ? this.state.light : this.state.stop,
        }}
      ></div>
    );
  }
}

//To change tick speed
Light.time = 1000;
const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(<TrafficLight />);
