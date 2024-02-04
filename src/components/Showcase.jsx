import React from "react";
import "../components/Showcase.css";
import { useState } from "react";

const cars = [
    {
        name: "Cupra Formentor VZ5",
        image: "cupra.png",
        lines: [
            {
                title: "Potężny układ napędowy.",
                content:
                    "Największy silnik w historii modelu CUPRA, 390 KM i ryk, który przyprawi Cię o gęsią skórkę.",
            },
            {
                title: "Szybszy niż ktokolwiek inny.",
                content:
                    "VZ5 osiąga 100 km/h w zaledwie 4,2 sekundy — poczujesz, jak wciska Cię w inspirowane wyścigami fotele kubełkowe.",
            },
            {
                title: "Niesamowite przyspieszenie.",
                content:
                    "Układ zapłonu 1-2-4-5-3 minimalizuje wibracje i zapewnia maksymalne emocje.",
            },
        ],
    },
    {
        name: "Volkswagen Golf R",
        image: "golf.png",
        lines: [
            {
                title: "Gwiazda swojej generacji.",
                content:
                    "Od 0 do 100 km/h w zaledwie 4,7 sekundy – silnik TSI EA888 evo4 z momentem obrotowym 420 Nm i mocą 235 kW (320 KM) pokazuje, do czego zdolny jest model „R”.",
            },
            {
                title: "Zaprojektowany do wysokich osiągów.",
                content:
                    "Stylistyka nowego Golfa R jest niepowtarzalna i wyrazista, począwszy od nowego przedniego zderzaka ze spojlerem, bocznymi elementami aerodynamicznymi i osłonami wlotów powietrza w stylu „R”.",
            },
            {
                title: "Witamy w kokpicie.",
                content:
                    "Wnętrze Golfa R powita Cię sportowym komfortem, który od razu zobaczysz i poczujesz. Na kierowcę i przedniego pasażera czekają fotele sportowe „Top” w stylistyce R ze zintegrowanymi zagłówkami.",
            },
        ],
    },
    {
        name: "Toyota Corolla GR",
        image: "corollagr.png",
        lines: [
            {
                title: "Sportowa stylistyka.",
                content:
                    "Nowa GR Corolla została zbudowana na bazie Corolli Hatchback, którą zmodyfikowano pod kątem stabilności i osiągów w warunkach sportowej jazdy.",
            },
            {
                title: "Napęd na cztery koła GR-FOUR.",
                content:
                    "Znany z GR Yarisa napęd GR-FOUR wykorzystuje elektroniczne sprzęgło wielopłytkowe, które pozwala zmieniać ustawienia rozdziału mocy między przednią i tylną oś.",
            },
            {
                title: "Pełna kontrola nad pojazdem.",
                content:
                    "Zwiększono rozstaw osi i rozstaw kół, dzięki czemu sportowa odmiana Corolli będzie się charakteryzowała większą stabilnością podczas pokonywania zakrętów z dużą prędkością.",
            },
        ],
    },
    {
        name: "Toyota Auris 2008",
        image: "aurisaaaa.png",
        lines: [
            {
                title: "Flagowy 1.4 D-4D",
                content:
                    "Dopracowany przez inżynierów Toyoty do perfekcji silnik 1.4 D-4D zapewnia niebywały komfort podróży, bezawaryjność oraz skrywa moc aż 90 koni mechanicznych.",
            },
            {
                title: "Niesamowite doświadczenie muzyczne",
                content:
                    "Zaprojektowane z myślą o największych zapaleńcach muzyki sparowane z transmiterem firmy NAVITEL głośniki o mocy 25W odkrywają nowe sposoby doświadczania muzyki.",
            },
            {
                title: "Bezpieczeństwo, moc, wygoda",
                content:
                    "ABS, LTE, ESP, BMW, DSTC, AMG, SWM oraz 2115 to pakiet systemów ochrony za który Toyota otrzymała 5 gwiazdek od organizacji NCAP stawiając ją na pozycji lidera jeśli chodzi o bezpieczeństwo.",
            },
        ],
    },
    
];

const Showcase = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="calosc">
                <div className="wrapper">
                    <div className="lewoduze">
                        <div className="auto">
                            <div className="flota">
                                W naszej flocie posiadamy:
                            </div>
                            <div className="model">
                                <img
                                    src={cars[currentIndex].image}
                                    height="400px"
                                />
                            </div>
                            <div className="nazmiane">
                                <button
                                    className="lewybutton sidebutton"
                                    onClick={() =>
                                        setCurrentIndex((v) =>
                                            v - 1 <= -1
                                                ? cars.length - 1
                                                : v - 1
                                        )
                                    }
                                >
                                    <svg
                                        width="40"
                                        height="40"
                                        viewBox="0 0 50 50"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M33 12L18 24.5L33 37"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        />
                                    </svg>
                                </button>
                                <div className="nazwa">
                                    {cars[currentIndex].name}
                                </div>
                                <button
                                    className="prawybutton sidebutton"
                                    onClick={() =>
                                        setCurrentIndex((v) =>
                                            v + 1 >= cars.length ? 0 : v + 1
                                        )
                                    }
                                >
                                    <svg
                                        width="40"
                                        height="40"
                                        viewBox="0 0 50 50"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M17 12L32 24.5L17 37"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="prawoduze">
                        <div className="opis">
                            {cars[currentIndex].lines.map((chuj, i) => {
                                return (
                                    <>
                                        <div className="staty">
                                            <h1>{chuj.title}</h1>
                                            <h3>{chuj.content}</h3>
                                        </div>
                                        {i == 0 || i == 1 ? (
                                            <div className="splitter" />
                                        ) : (
                                            <></>
                                        )}
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Showcase;
