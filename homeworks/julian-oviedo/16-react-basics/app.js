const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);

class TraficLight extends React.Component {
  static counter = 0;
  static colors = ['green', 'red', 'yellow'];

  constructor(props) {
    super(props);
    this.state = {
      lightOn: '',
    };
  }

  lightHandler() {
    setInterval(() => {
      const indexColors = TraficLight.counter % 3;
      this.setState({
        lightOn: TraficLight.colors[indexColors],
      });
      TraficLight.counter++;
    }, 1000);
  }

  componentDidMount() {
    this.lightHandler();
  }

  render() {
    return (
      <div className="container">
        <div className="post"></div>
        <div className="trafficLight">
          <div className="trafficLight-Container"></div>
          <Light color="red" lightActive={this.state.lightOn} />
          <Light color="yellow" lightActive={this.state.lightOn} />
          <Light color="green" lightActive={this.state.lightOn} />
        </div>
      </div>
    );
  }
}

class Light extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    {
      if (this.props.color === this.props.lightActive) {
        return (
          <div className="trafficLight-Container__light" style={{ backgroundColor: this.props.lightActive }}></div>
        );
      } else {
        return <div className="trafficLight-Container__light" style={{ backgroundColor: 'grey' }}></div>;
      }
    }
  }
}

root.render(<TraficLight />);
