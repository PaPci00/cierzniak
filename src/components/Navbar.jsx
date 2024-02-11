import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import SZYBKIEFURY from "../assets/SZYBKIEFURY.png";
import { useUserStore } from "../stores/User";
import {useNavigate} from "react-router-dom";

function App() {
    const userStore = useUserStore();
    const navigation = useNavigate()
    return (
        <nav>
            <div>
                <div className="image">
                    <img className={"logo"} src={SZYBKIEFURY} />
                </div>
            </div>
            <div className="nawigacja">
                <div>
                    <Link to="/">Home</Link>
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
                {!userStore.username ? (
                    <Link to="/login">Login</Link>
                ) : (
                    <a onClick={() => {
                        userStore.logout();
                        navigation("/");
                    }}>Logout</a>
                )}
            </div>
        </nav>
    );
}

export default App;
