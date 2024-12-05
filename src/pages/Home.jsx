import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Dashboard from "../components/Dashboard";

import { useContext } from "react";
import UserContext from "../context/UserContext";

const Home = () => {

    const { userEmail } = useContext(UserContext);

    return ( 
        <section id="homepage">
            <NavBar />
            <h1 style={{margin: "20vh 5vw"}}>Welcome
                <span className="text-primary"> {userEmail}</span>
            </h1>
            <Dashboard />
            <Footer />
        </section>
    );
}
 
export default Home;