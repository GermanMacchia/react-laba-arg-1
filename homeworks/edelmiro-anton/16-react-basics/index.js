const root = ReactDOM.createRoot(document.querySelector('#root'));

const colors = {
  red: { background: '#df4040' },
  yellow: { background: '#e9ec6a' },
  green: { background: '#04ca00' },
  grey: { background: '#585f68' },
};

class TrafficLight extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      red: colors.red,
      yellow: colors.grey,
      green: colors.grey,
      next: 'yellow',
    };
  }

  lightChange = () => {
    switch (this.state.next) {
      case 'red':
        this.setState({
          red: colors.grey,
          yellow: colors.grey,
          green: colors.green,
          next: 'yellow',
        });
        break;
      case 'yellow':
        this.setState({
          red: colors.red,
          yellow: colors.grey,
          green: colors.grey,
          next: 'green',
        });
        break;
      case 'green':
        this.setState({
          red: colors.grey,
          yellow: colors.yellow,
          green: colors.grey,
          next: 'red',
        });
        break;
    }
  };

  componentDidMount() {
    setInterval(() => {
      this.lightChange();
    }, 1000);
  }

  render() {
    return (
      <>
        <div className="trafficLight">
          <Light color={this.state.red} />
          <Light color={this.state.yellow} />
          <Light color={this.state.green} />
        </div>
      </>
    );
  }
}

function Light(props) {
  return (
    <>
      <div className="trafficLight_light" style={props.color}></div>
    </>
  );
}

root.render(<TrafficLight />);
