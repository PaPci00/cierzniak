import React from "react";
import Navbar from "../components/Navbar";
import "./Login.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const correctCreds = {
    admin: "admin",
    123: "123",
};

const Login = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigate();

    useEffect(() => {
      if(localStorage.getItem("user")) navigation("/dashboard");
    }, []);


    return (
        <>
            <Navbar />
            <div className="loginbg">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const userPassword = correctCreds[login];
                        if (!userPassword || password != userPassword)
                            return alert("Wrong username or password");
                        localStorage.setItem("user", login);
                        navigation("/dashboard");
                    }}
                >
                    <div className="title">Login</div>
                    <div className="inputsWithButton">
                        <div className="inputs">
                            <input
                                onChange={(e) => setLogin(e.target.value)}
                                type="text"
                                className="login"
                                placeholder="Login"
                            />
                            <input
                                type="password"
                                className="login"
                                placeholder="Hasło"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button>Login</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;
