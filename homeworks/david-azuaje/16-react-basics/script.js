const root = document.querySelector("#rooot");


function TrafficLight() {
    //states

    const [color, setColor] = React.useState(0);
    React.useEffect(() => {

        setInterval(() => {
            setColor((colors) => colors + 1)

        }, 1500);

    }, []);


    if (color === 4) {
        setColor(0);
    }

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
        </div >

    )
}

const renderComponent = ReactDOM.createRoot(root);
renderComponent.render(<TrafficLight />)
