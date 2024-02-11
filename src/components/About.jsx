import React from 'react'
import "./About.css"
import papcio from "../assets/papcioswieta.png";
import call from "../assets/call.png";
import car from "../assets/car.png";
import coin from "../assets/coin.png";

const About = () => {
  return (
    <div><div className="wszystko">
    <div className="onas">
        <div className="duzyopis">O Nas</div>
        <div className="malyopis">
            Wynajmujemy samochody sportowe, ekskluzywne limuzyny na
            terenie całej Polski. Zapewniamy najniższe ceny oraz
            miłą obsługę. Zapewniamy możliwość wynajmu
            długoterminowego oraz krótkoterminowego, a także wynajem
            aut do upalania. Ceny za wynajem poszczególnych aut
            ustalamy indywidualnie - telefonicznie.
        </div>
    </div>
    <div className="ja">
        <img src={papcio} alt="to ja" height="400px" />
    </div>
</div>
<div className="klocki">
    <div className="maleklocki">
        <div className="kloc1 kloc">
            <div className="imgwrapper">
                <img src={car} />
            </div>
            <div className="klocnapis">
                <h1>Luksusowe Samochody</h1>
                Naszą flotę zasilają tylko samochody luksusowe,
                które zachowane są w idealnym stanie.
            </div>
        </div>
        <div className="kloc2 kloc">
            <div className="imgwrapper">
                <img src={coin} />
            </div>
            <div className="klocnapis">
                <h1>Najlepsze Ceny</h1>
                Posiadamy najlepsze ceny wynajmu samochodów
                luksusowych w polsce.
            </div>
        </div>
        <div className="kloc3 kloc">
            <div className="imgwrapper">
                <img src={call} />
            </div>
            <div className="klocnapis">
                <h1>Dostępność 24/7</h1>
                +48 501 202 512 / papcio@papcio.eu
            </div>
        </div>
    </div>
</div></div>
  )
}

export default About