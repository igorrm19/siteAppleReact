import logoApple from "../assets/logoApple.svg";
import search from "../assets/search.svg";
import bag from "../assets/bag.svg";
import "../styles/pages/homePage.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="flex w-screen h-[10vh] sticky top-0">
            <nav className="flex justify-between items-center w-full h-full">
                <ul className="flex w-full justify-center items-center h-14">
                    <Link to="/home">
                        <img src={logoApple} alt="logo" className="cursor-pointer" />
                    </Link>
                    <li className="list">
                        <a href="/store">
                            <span className="text-2xl cursor-pointer">Store</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="/mac">
                            <span className="text-2xl cursor-pointer">Mac</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="/ipad">
                            <span className="text-2xl cursor-pointer">Ipad</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="/iphone">
                            <span className="text-2xl cursor-pointer">Iphone</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="/watch">
                            <span className="text-2xl cursor-pointer">Iphone</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="/airpods">
                            <span className="text-2xl cursor-pointer">Airpods</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="/tv">
                            <span className="text-2xl cursor-pointer">TV & Home</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="/entertainment">
                            <span className="text-2xl cursor-pointer">TV & Home</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="/accessories">
                            <span className="text-2xl cursor-pointer">Entertainment</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="/support">
                            <span className="text-2xl cursor-pointer">Accessories</span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="/search">
                            <span className="text-2xl cursor-pointer">Support</span>
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
