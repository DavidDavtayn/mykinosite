function Header() {
    return (
        <header id="header">
            <div className="logo">
                <img src="https://bpe.show4me.com/media/upload/files/c6/9c/c69c7631-d3c7-4678-b714-810e3e119fa2.jpeg" />
            </div>
            <ul>
                <li>
                    <a href="" className="ahome">
                        Home
                    </a>
                </li>
                <li>
                    <a href="">Movies</a>
                </li>
                <li>
                    <a href="">Series</a>
                </li>
                <li>
                    <a href="">Trending</a>
                </li>
                <li>
                    <a href="">Categories</a>
                </li>
            </ul>
            <div className="intext">
                <input type="text" placeholder="Search" />
            </div>
        </header>
    );
}

export default Header;
