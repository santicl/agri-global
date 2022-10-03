import { settings } from "../settings";

function CategoryFilter() {
    return (
        <div className="Category-filter">
            <h3>Filter Categories</h3>
            <details className="details">
            <summary>Supply to feed mills</summary>
            <ul>
                <div>
                    <img src={settings.pointMarket} />
                    <span>Animal Proteins</span>
                </div>
                <div>
                    <img src={settings.pointMarket} />
                    <span>Animal Fats and Oils</span>
                </div>
                <div>
                    <img src={settings.pointMarket} />
                    <span>Enzymatic hydrolysis products</span>
                </div>
                <div>
                    <img src={settings.pointMarket} />
                    <span>Chitosan</span>
                </div>
                <div>
                    <img src={settings.pointMarket} />
                    <span>Coffee</span>
                </div>
                <div>
                    <img src={settings.pointMarket} />
                    <span>Spices</span>
                </div>
            </ul>
        </details>
        </div>
    );
}

export default CategoryFilter;