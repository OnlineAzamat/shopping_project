import logo from "../../assets/logo.jpg"

export default function mainComp() {
    return (
        <main className="nav">
            <nav>
                <div className="inner-nav">
                    <div className="phone">
                        <div className="icon">
                            <i className="bi bi-telephone"></i>
                        </div>
                        <span className="txt">
                            +998888810188
                        </span>
                    </div>
                    <div className="get50">
                        <p>Get 50% Off on Selected Items</p>
                        <span>|</span>
                        <a href="/">
                            Shop Now
                        </a>
                    </div>
                    <div className="lang-location">
                        <div className="lang">
                            <span>Eng:</span>
                            <i className="bi bi-chevron-down"></i>
                            <div className="all-item">
                                <span>Ру</span>
                                <span>Qq</span>
                            </div>
                        </div>
                        <div className="lang location">
                            <span>Location:</span>
                            <i className="bi bi-chevron-down"></i>
                        </div>
                    </div>
                </div>
            </nav>
            <header>
                <div className="inner-head">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                        <h1>Shopcart</h1>
                    </div>
                    <ul className="nav">
                        <li>
                            <a href="/">
                                <span>Categories</span>
                                <i className="bi bi-chevron-down"></i>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                Deals
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                What's New
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                Delivery
                            </a>
                        </li>
                    </ul>
                    <div className="search_wrapper">
                        <div className="inner_search">
                            <input type="text" placeholder="Search Product" name="search" id="search" />
                            <label htmlFor="search">
                                <i className="bi bi-search" htmlFor="search"></i>
                            </label>
                        </div>
                    </div>
                    <div className="account" title="Account">
                        <i className="bi bi-person"></i>
                        <span>Account</span>
                    </div>
                    <div className="cart" title="Cart">
                        <i className="bi bi-cart"></i>
                        <span>Cart</span>
                    </div>
                </div>
            </header>
        </main>
    )
}