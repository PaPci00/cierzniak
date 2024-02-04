import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Opinions from "./pages/Opinions";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="info" element={<Info />} />
                <Route path="opinie" element={<Opinions />} />
                <Route path="kontakt" element={<Contact />} />
                <Route path="login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
