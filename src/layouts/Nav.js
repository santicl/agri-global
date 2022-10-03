import { settings } from '../settings';
function Nav() {
    return (
        <nav>
            <ul>
                <li><a href="/">
                    <img
                        src={settings.brand}
                        alt="logo-brand"
                        className="brand" />
                </a></li>
                <li>About Us</li>
                <li>
                    <div className='Container-Search'>
                    <select className='select'>
                        <option value="all">All Category</option>
                        <option value="all">Animal Proteins</option>
                        <option value="all">Animal fat and oils</option>
                    </select>
                    <input type="search" placeholder="Search" />
                    <button className="Circle-icon Search">
                        {settings.iconSearch}
                    </button>
                    </div>
                </li>
                <li>
                    <div className='C-cart'>
                    <button className="Circle-icon">
                        {settings.iconHeart}
                    </button>
                    <div className='Cant-cart'>
                        <span>0</span>
                    </div>
                    </div>
                </li>
                <li>
                    <div className='C-cart'>
                    <button className="Circle-icon">
                        {settings.iconCart}
                    </button>
                    <div className='Cant-cart'><span>0</span></div>
                    </div>
                </li>
                <li><a href="https://agriglobalnews.com/" target="_blank">News</a></li>
                <li>
                    <select className='Nav-select'>
                        <option value="all">Acounts</option>
                        <option value="all">Login</option>
                        <option value="all">Register</option>
                    </select>
                </li>
                <li>
                    <select className='Nav-select'>
                        <option value="all">English</option>
                        <option value="all">Portuguese</option>
                    </select>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;