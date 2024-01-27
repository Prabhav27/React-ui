import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header,{HeaderPhone} from "./Components/Header";
import "./Styles/App.css"
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import { useState } from "react";

function App(){

    const [menuOpen, setMenuOpen] = useState(false);



    return(
<>

<Router>
<HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
<Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <Routes>
       <Route path="/" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Services" element={<Services/>}/>
    </Routes>

    <Footer/>
</Router>
</>
    );
}

export default App;