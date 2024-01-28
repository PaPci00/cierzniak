import "./Navbar.css";

function App() {
    return (
        <>
            <ul>
                <li className="image">
                    <a href="home.jsx"><img className={"logo"} src={"/src/assets/SZYBKIEFURY.png"}/></a>
                </li>
                <li className="nav">
                    <a href="login.jsx">Login</a>
                </li>
                <li className="nav">
                    <a href="kontakt.jsx">Kontakt</a>
                </li>
                <li className="nav">
                    <a href="opinie.jsx">Opinie</a>
                </li>
                <li className="nav">
                    <a href="info.jsx">Info</a>
                </li>
                <li className="loginButton">
                    <a href="home.jsx">Home</a>
                </li>
            </ul>
        </>
    );
}

export default App;
