

export default function mainComp() {
    return (
        <main>
            <nav>
                <div className="inner-nav">
                    <div className="time-location">
                        <div className="location">
                            <div className="icon">
                                <i className="bi bi-geo-alt"></i>
                            </div>
                            <span className="location-title">
                                <span className="txt">
                                    Ваш город: Москва
                                </span>
                                <span>
                                    <i className="bi bi-chevron-down"></i>
                                </span>
                            </span>
                        </div>
                        <div className="time">
                            <div className="icon">
                                <i className="bi bi-clock"></i>
                            </div>
                            <span className="txt">
                                Пн-Пт 9:00 - 19:00
                            </span>
                        </div>
                    </div>
                    <ul className="navbar">
                        <li>
                            <a href="/">
                                О компании
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                Преимущества
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                Акционные товары
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <i className="bi bi-person-circle"></i>
                                <span>Войти в аккаунт</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <header>
                header
            </header>
        </main>
    )
}