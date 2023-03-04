import Banner from "../components/parallax/Banner"
import MyParallax from "../components/parallax/Parallax"
import Footer from "../components/footer/Footer"
import Galeria from "../pages/Galeria"
function Home () {
    return(
        <div>
        <main className="principal">
            <Banner />
            <MyParallax />
        </main>
        
    </div>  
        
    )
    
}

export default Home
