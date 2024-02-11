import React from "react";
import "./Zaloguj.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../stores/User";


const correctCreds = {
    admin: "admin",
    123: "123",
};

const Login = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigate();
    const userStore = useUserStore();


    useEffect(() => {
        if (userStore.username) navigation("/dashboard");
    }, []);

    return (
        <>
            <div className="loginbg">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const userPassword = correctCreds[login];
                        if (!userPassword || password != userPassword)
                            return alert("Wrong username or password");
                        userStore.setUsername(login);
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