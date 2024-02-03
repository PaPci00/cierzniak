import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import SZYBKIEFURY from "../assets/SZYBKIEFURY.png"
import {useEffect} from "react";

function App() {
    const xd = useLocation();
    useEffect(() => {
        console.log(xd);
    }, [xd])
    
    return (
        <nav>
            <div>
                <div className="image">
                    <img
                        className={"logo"}
                        src={SZYBKIEFURY}
                    />
                </div>
            </div>
            <div className="nawigacja">
                <div>
                    <Link to="/" >Home</Link>
                </div>
                <div>
                    <Link to="/info">Info</Link>
                </div>
                <div>
                    <Link to="/opinie">Opinie</Link>
                </div>
                <div>
                    <Link to="/contact">Kontakt</Link>
                </div>
                <div>
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </nav>
    );
}

export default App;
