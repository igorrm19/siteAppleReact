import HeaderComponent from "../components/headerComponent.tsx"
import heroImage from "../../public/figure.png"
import imageFundo from "../../public/div (1).svg"
import iPhone from "../../public/figure.svg"

function HomePage() {
    return (
        <div className="w-full h-full">
            <HeaderComponent />
            <main className="flex flex-col items-center justify-center w-full h-full">
                <section className="w-screen h-screen flex flex-col items-center justify-center hero">
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="text-5xl mb-3">Apple Shopping Event</h1>
                            <h2 className="text-3xl text-center leading-10" style={{ color: "#6E6E73" }}>From November 25 to 28, get an Apple Gift <br /> Card when you buy an eligible product.1</h2>
                            <h2 className="text-2xl mt-5 cursor-pointer" style={{ color: "blue" }}>Get an early look</h2>
                        </div>
                        <div className="flex flex-col items-center justify-center mt-5">
                            <img src={heroImage} alt="Apple Shopping Event" className="w-full h-[600px] hero-image" />
                        </div>
                    </div>
                </section>
                <section className="w-screen h-screen flex flex-col items-center justify-center">
                    <img src={imageFundo} alt="" className="w-full h-screen" />
                </section>
                <section className="w-screen h-screen flex flex-col items-center justify-center bg-slate-50">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="font-bold text-6xl" style={{ color: "#1D1D1F" }}>iPhone 14</h1>
                        <h3 className="font-medium text-3xl" style={{ color: "#1D1D1F" }}>Big and bigger.</h3>
                        <p className="text-blue-600 font-medium text-2xl cursor-pointer mt-5">Saber mais</p>
                    </div>
                    <div>
                        <img src={iPhone} alt="iPhone 14" />
                    </div>
                </section>
                <section className="w-screen h-screen flex flex-col items-center justify-center">
                    <span className="text-2xl font-medium">Iphone 16</span>
                    <p>O futuro em suas mãos</p>
                </section>
                <section className="w-screen h-screen flex flex-col items-center justify-center">
                    <span className="text-2xl font-medium">Iphone 16</span>
                    <p>O futuro em suas mãos</p>
                </section>
                <section className="w-screen h-screen flex flex-col items-center justify-center">
                    <span className="text-2xl font-medium">Iphone 16</span>
                    <p>O futuro em suas mãos</p>
                </section>
            </main>
        </div>
    )
}

export default HomePage
