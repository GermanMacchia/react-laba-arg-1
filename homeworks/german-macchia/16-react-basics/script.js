const TrafficLight = () => {
  const TIME = 1000;
  return (
    <div className="container">
      <div className="post" />
      <div className="traffic-light">
        <div className="traffic-light__light-rail">
          <Light color="red" time={TIME * 4} />
          <Light color="yellow" time={TIME * 2} />
          <Light color="green" time={TIME} />
        </div>
      </div>
    </div>
  );
};

class Light extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      light: props.color,
      stop: "grey",
      actual: !(props.color === "green") ? "grey" : "green",
      time: props.time,
    };
  }

  twinkle = () => {
    setTimeout(() => {
      this.setState((state) => ({
        actual: state.light,
      }));

      if (!(this.state.light === "red")) {
        setTimeout(() => {
          this.setState((state) => ({
            actual: state.stop,
          }));
        }, this.state.time);
      }
    }, this.state.time);
  };

  componentDidMount() {
    this.twinkle();
  }

  render() {
    return (
      <div
        className="light"
        style={{ backgroundColor: this.state.actual }}
      ></div>
    );
  }
}

const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(<TrafficLight />);
