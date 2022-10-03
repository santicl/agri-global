

function FilterEstimated() {
    return (
        <div className="Estimated">
            <h3>
            Filter Dispatch Estimated
            </h3>
            <p>
            *Select an estimated range of dates for your cargo dispatch
            </p>
            <input className="Inputs" placeholder="Quantity From" />
            <input className="Inputs" placeholder="Quantity To"/>
        </div>
    );
}

export default FilterEstimated;