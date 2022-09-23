const root = document.querySelector("#rooot");


function TrafficLight() {
    //states

    return (
        <div className="container">

            <div className="trafficLight--top"></div>

            <div className="trafficLight--body">
                <ul className="trafficLight--lights">
                    <li className="light--red"></li>
                    <li className="light--yellow"></li>
                    <li className="light--green"></li>


                </ul>
            </div>
        </div>

    )
}

const renderComponent = ReactDOM.createRoot(root);
renderComponent.render(<TrafficLight />)
