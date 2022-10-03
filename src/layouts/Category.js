import { settings } from '../settings';


function Category() {
    //const [categories, setCategories] = useState(settings.imgCategories);
    return (
        <div className="Category">
            <div className="Category-header">
                <h1>Categories</h1>
            </div>
            <div className="Category-bodyCarts">
                {
                    settings.imgCategories.map((category, index) => {
                        return (
                            <div className="Category-cart" key={index}>
                                <div className='Category-cart_img'>
                                    <img className='Img-title-cart' src={category.img} alt={category.title} />
                                    <div className={index == 0 ? "Not-available": "Available"}>
                                        <h2>{category.msj}</h2>
                                    </div>
                                </div>
                                <div className='Category-cart_sub'>
                                    <h2>{category.subtitle}</h2>
                                </div>
                                <div className='Container-sub'>
                                    <h3>{category.title}</h3>
                                    <a className='Button-r'>
                                        {settings.toRight}
                                    </a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Category;