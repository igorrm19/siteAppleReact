import logoApple from "../assets/logoApple.svg";
import search from "../assets/search.svg";
import bag from "../assets/bag.svg";
import "../styles/pages/homePage.css";

function Header() {
    return (
        <header className="flex w-screen h-[10vh]">
            <nav className="flex justify-between items-center w-full h-full">
                <ul className="flex w-full justify-center items-center h-14">
                    <li className="list">
                        <img src={logoApple} alt="logo" className="cursor-pointer" />
                    </li>
                    <li className="list">
                        <a href="#">
                            <h1 className="text-2xl cursor-pointer">Store</h1>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <h1 className="text-2xl cursor-pointer">Mac</h1>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <h1 className="text-2xl cursor-pointer">Ipad</h1>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <h1 className="text-2xl cursor-pointer">Iphone</h1>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <h1 className="text-2xl cursor-pointer">Watch</h1>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <h1 className="text-2xl cursor-pointer">Airpods</h1>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <h1 className="text-2xl cursor-pointer">TV & Home</h1>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <h1 className="text-2xl cursor-pointer">Entertainment</h1>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <h1 className="text-2xl cursor-pointer">Accessories</h1>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <h1 className="text-2xl cursor-pointer">Support</h1>
                        </a>
                    </li>
                    <li className="list">
                        <img src={search} alt="search" className="cursor-pointer" />
                    </li>
                    <li className="list">
                        <img src={bag} alt="bag" className="cursor-pointer" />
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
