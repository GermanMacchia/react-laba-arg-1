class Light extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }

  render() {
    return <div className={`light ${this.props.isActive ? `light--${this.props.type}` : ''} `} />;
  }
}

class TrafficLight extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: 'red' };

    this.interval = setInterval(() => {
      this.changeColor();
    }, 1000);
  }

  changeColor() {
    switch (this.state.active) {
      case 'red':
        return this.setState({ active: 'orange' });
      case 'orange':
        return this.setState({ active: 'green' });
      case 'green':
        return this.setState({ active: 'red' });
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <main className="page">
        <div className="traffic-light">
          {['red', 'orange', 'green'].map((type) => (
            <Light key={type} type={type} isActive={type === this.state.active} />
          ))}
        </div>
      </main>
    );
  }
}

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(<TrafficLight />);
