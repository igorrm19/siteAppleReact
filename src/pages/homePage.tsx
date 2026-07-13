import HeaderComponent from "../components/headerComponent.tsx"

function HomePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <HeaderComponent />
            <h1>Home</h1>
        </div>
    )
}

export default HomePage