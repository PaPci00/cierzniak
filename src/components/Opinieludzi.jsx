import React from "react";
import kali from "../assets/kali.png";
import antoni from "../assets/xd.png";
import star from "../assets/star.png";
import phpuser from "../assets/php.png";
import "./Opinieludzi.css";

const Opinieludzi = () => {
    return (
        <div className="all">
            <div className="ocena">
                <div className="profilowe">
                    <img src={kali} width="200px" />
                </div>
                <div className="opisane">
                    <div className="nazwaprof">
                        kalempster:&nbsp;
                        <img src={star} width="20px" />
                        <img src={star} width="20px" />
                        <img src={star} width="20px" />
                        <img src={star} width="20px" />
                        <img src={star} width="20px" />
                    </div>
                    <div className="komentarz">
                        Mega super wypożyczalnia, serdecznie polecam i
                        pozdrawiam z rodzinką. Zapraszam na {" "}
                        <a
                        target="_blank"
                            style={{
                                color: "black",
                                textDecoration: "underline",
                            }}
                            href="https://kalempster.dev"
                        >
                            kalempster.dev
                        </a>
                    </div>
                    <div className="car">Wypożyczył(a) - Toyota Auris 2008</div>
                </div>
            </div>
            <div className="ocena">
                <div className="profilowe">
                    <img src={antoni} width="200px" />
                </div>
                <div className="opisane">
                    <div className="nazwaprof">
                        Antoni:&nbsp;
                        <img src={star} width="20px" />
                    </div>
                    <div className="komentarz">
                        Ta furka tak popierdziela, że to hit! Daje 5 gwiazdek i
                        chętnie tu wrócę!
                    </div>
                    <div className="car">Wypożyczył(a) - Volkswagen Golf R</div>
                </div>
            </div>
            <div className="ocena">
                <div className="profilowe">
                    <img src={phpuser} width="200px" />
                </div>
                <div className="opisane">
                    <div className="nazwaprof">
                        PHP USER:&nbsp;
                        <img src={star} width="20px" />
                        <img src={star} width="20px" />
                        <img src={star} width="20px" />
                        <img src={star} width="20px" />
                        <img src={star} width="20px" />
                    </div>
                    <div className="komentarz">
                        Cupra po tej mapie silnika na 450 kuca wyrywa każdą damę
                        w okolicy. Coś pięknego!
                    </div>
                    <div className="car">Wypożyczył(a) - Cupra Formentor VZ5</div>
                </div>
            </div>
        </div>
    );
};

export default Opinieludzi;
