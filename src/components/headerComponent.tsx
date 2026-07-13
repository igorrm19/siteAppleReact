import "../styles/pages/homePage.css";

function Header() {
    return (
        <header className="flex w-screen h-[15vh]">
            <nav className="flex w-full h-[30px]">
                <ul className="flex w-full justify-center items-center h-14">
                    <li className="list">
                        <a href="#">
                            <h1 className="text-2xl">Store</h1>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <h1 className="text-2xl">Mac</h1>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <h1 className="text-2xl">Ipad</h1>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <h1 className="text-2xl">Iphone</h1>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <h1 className="text-2xl">Watch</h1>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <h1 className="text-2xl">Airpods</h1>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <h1 className="text-2xl">TV & Home</h1>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <h1 className="text-2xl">Entertainment</h1>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <h1 className="text-2xl">Accessories</h1>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <h1 className="text-2xl">Support</h1>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
