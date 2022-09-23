const root = document.querySelector("#rooot");
console.log(root);

function TrafficLight() {
    //states

    return (
        <>
            <div className="trafficLight--top"></div>
            <div className="trafficLight--body">
                <ul className="trafficLight--lights">
                    {/* Component here */}
                    {/* Component here */}
                    {/* Component here */}

                </ul>
            </div>
        </>
    )
}

const renderComponent = ReactDOM.createRoot(root);
renderComponent.render(<TrafficLight />)
