import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Dashboard from "../components/Dashboard";

const Home = () => {
    return ( 
        <section id="homepage">
            <NavBar />
            <Dashboard />
            <Footer />
        </section>
    );
}
 
export default Home;