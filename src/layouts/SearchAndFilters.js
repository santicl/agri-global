import '../SearchAndFilter.css';
import { useState } from 'react';
import { settings } from "../settings";
import { useCarts } from '../hooks/useCarts';
import FilterPrices from './FilterPrices';
import Market from './Market';
import CategoryFilter from './CategoryFilter';
import FilterQuant from './FilterQuant';
import FilterEstimated from './FilterEstimated';
import Ofert from './Ofert';
import PriceVerify from './PriceVerify';


function SearchAndFilters() {
    const { carts } = useCarts();
    const [search, setSearch] = useState("");
    const [currPage, setCurrPage] = useState(0);
    const [maxPage, setMaxPage] = useState(9);
    const [minPage, setMinPage] = useState(1);

    const filteredCarts = () => {
        if (search === 0 || search === "")
            return carts.slice(currPage, currPage + 9);

        const filterCarts = carts.filter(cart => cart.title.includes(search) || cart.description.includes(search))

        return filterCarts.slice(currPage, currPage + 9);
    }

    const nextPage = () => {
        if (carts.filter(cart => cart.title.includes(search)).length > currPage + 9)
            setCurrPage(currPage + 9);
            if (maxPage >= carts.length || maxPage === carts.length) {
                setMaxPage(carts.length);
                setMinPage(minPage)
            } else {
                setMaxPage(maxPage + 9);
                setMinPage(minPage + 9);
            }
    }

    const prevPage = () => {
        if (currPage > 0)
            setCurrPage(currPage - 9);
            if (minPage <= 0) {
                setMaxPage(maxPage);
                setMinPage(1)
            } else {
                setMaxPage(maxPage - 9);
                setMinPage(minPage - 9);
            }
    }

    const clearFilter = () => {
        setSearch("");
        setCurrPage(0);
    }

    const handleSearch = (e) => {
        setCurrPage(0);
        setSearch(e.target.value);
    }


    return (
        <div className='Main_Container-f'>
            <div className="Filters">
                <div className="Filter_search">
                    <h2>Filters</h2>
                    <input
                        className='Inputs'
                        value={search}
                        placeholder="Search"
                        onChange={handleSearch}
                    />
                </div>
                <FilterPrices />
                <Market />
                <CategoryFilter />
                <FilterQuant />
                <FilterEstimated />
            </div>
            <div className="Results-search">
                <h2 className='H2'>Results</h2>
                <p>Your search results...{carts.length} products</p>
                <div className="Results-search_result">
                    <div className="Results-search_result_btn-pages">
                        <div className="Buttons-paginations">
                            <button className='Btns' onClick={prevPage}><span className='Arrow-r'>{settings.left}</span></button>
                            <div className="Buttons-paginations_pagination">
                                <span> {minPage} </span>
                                <span>to</span>
                                <span> {maxPage} </span>
                            </div>
                            <button className='Btns' onClick={nextPage}><span className='Arrow-l'>{settings.left}</span></button>
                            <button className='Clear' onClick={clearFilter} >Clear filters</button>
                        </div>
                    </div>
                    <div className='Carts'>
                        {
                            filteredCarts().map(({
                                _id,
                                imgP,
                                category,
                                title,
                                description,
                                productPrice,
                                promo,
                                specialPrice
                            }) => {
                                return (
                                    <div key={_id} className='Carts_cart'>
                                        <div className='Carts-cart_item'>
                                            <div className='Carts_cart_offert-like'>
                                                <div className='Carts_cart_offert'>
                                                    <Ofert
                                                        promo={promo}
                                                        specialPrice={specialPrice}
                                                        productPrice={productPrice}
                                                    />
                                                </div>
                                                <div className='Carts_cart_like'>
                                                    <span>{settings.heart}</span>
                                                </div>
                                            </div>
                                            <div className='Carts_cart_img'>
                                                <img src={imgP} alt={title} />
                                            </div>
                                            <div className='Carts_cart_category'>
                                                <h3>{category}</h3>
                                            </div>
                                            <div className='Carts_cart_title'>
                                                <h2>{title}</h2>
                                            </div>
                                            <div className='Carts_cart_description'>
                                                <p>{description}</p>
                                            </div>
                                            <div className='Carts_cart_price'>
                                                <PriceVerify
                                                    promo={promo}
                                                    specialPrice={specialPrice}
                                                    productPrice={productPrice}
                                                />
                                            </div>
                                            <div className='Carts_cart_btns'>
                                                <button className='Btn-cart'> {settings.iconCart} <span>Add Cart</span></button>
                                                <a className='Compare'>
                                                    <img src={settings.arrowLeft} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchAndFilters;