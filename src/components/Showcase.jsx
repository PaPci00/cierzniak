import React from "react";
import "../components/Showcase.css";
import FERARI from "../assets/ferari.png";
import CUPRA from "../assets/cupra.png";

const Showcase = () => {
    return (
        <div className="calosc">
            <div className="wiekszacalosc">
                <div className="wrapper">
                    <div className="lewoduze">
                        <div className="auto">
                            <div className="flota">
                                W naszej flocie posiadamy:
                            </div>
                            <div className="model">
                                <img src={CUPRA} height="400px" />
                            </div>
                            <div className="nazmiane">
                                <div className="lewybutton">
                                    <button>l</button>
                                </div>
                                <div className="nazwa">Cupra Formentor VZ5</div>
                                <div className="prawybutton">
                                    <button>p</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="prawoduze">
                        <div className="opis">
                            <div className="staty">
                                <h1>Potężny układ napędowy.</h1>
                                <h3>
                                    Największy silnik w historii modelu CUPRA,
                                    390 KM i ryk, który przyprawi Cię o gęsią
                                    skórkę.
                                </h3>
                            </div>
                            <div className="splitter" />

                            <div className="staty">
                                <h1>Szybszy niż ktokolwiek inny.</h1>
                                <h3>
                                    VZ5 osiąga 100 km/h w zaledwie 4,2 sekundy —
                                    poczujesz, jak wciska Cię w inspirowane
                                    wyścigami fotele kubełkowe.
                                </h3>
                            </div>
                            <div className="splitter" />
                            <div className="staty">
                                <h1>Niesamowite przyspieszenie.</h1>
                                <h3>
                                    Układ zapłonu 1-2-4-5-3 minimalizuje
                                    wibracje i zapewnia maksymalne emocje.
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Showcase;
