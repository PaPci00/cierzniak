import React from 'react';
import "../components/Footer.css";
import { Link } from "react-router-dom";
import Police from '../pages/Police'

const Footer = () => {
  return (
    <div className='fjuter'>
        <div className='linki'>
            <div><b>Przydatne linki:</b></div>
            <Link to="/">Home</Link>
            <Link to="/info">Info</Link>
            <Link to="/opinie">Opinie</Link>
            <Link to="/contact">Kontakt</Link>
        </div>
        <div className='copyrighty'>
            <div>Copyright: papcio</div>
        </div>
        <div className='polityka'>
            <div>Polityka prywatności</div>
        </div>
    </div>
  )
}

export default Footer