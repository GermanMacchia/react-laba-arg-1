const root = document.querySelector("#rooot");

function TrafficLight() {
    const [color, setColor] = React.useState(0);

    React.useEffect(() => {
        setInterval(() => {
            setColor((prevColor) => {
                if (prevColor === 3) {
                    return 0;
                }
                return prevColor + 1;
            });
        }, 1500);
    }, []);

    return (
        <div className="container">
            <div className="trafficLight--top"></div>

            <div className="trafficLight--body">
                <ul className="trafficLight--lights">
                    <li className={color === 1 ? "light--red" : ""}></li>
                    <li className={color === 2 ? "light--yellow" : ""}></li>
                    <li className={color === 3 ? "light--green" : ""}></li>
                </ul>
            </div>
        </div>
    );
}

const renderComponent = ReactDOM.createRoot(root);
renderComponent.render(<TrafficLight />);