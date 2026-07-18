import HeaderComponent from "../components/headerComponent.tsx"
import heroImage from "../../public/figure.png"
import imageFundo from "../../public/div (1).svg"

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
                <section className="w-screen h-screen flex flex-col items-center justify-center bg-white">
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
                <section className="w-screen h-screen flex flex-col items-center justify-center">
                    <span className="text-2xl font-medium">Iphone 16</span>
                    <p>O futuro em suas mãos</p>
                </section>
            </main>
        </div>
    )
}

export default HomePage
