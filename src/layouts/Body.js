import Category from "./Category";
import SearchAndFilters from "./SearchAndFilters";

function Body() {
    return (
        <section className="Main">
            <Category/>
            <SearchAndFilters/>
        </section>
    );
}

export default Body;