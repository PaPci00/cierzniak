import React from 'react'
import "../components/Showcase.css"
import FERARI from "../assets/ferari.png";

const Showcase = () => {
  return (
    <div className='calosc'>
        <div className='lewoduze'>
            <div className='auto' style={{
                backgroundImage: `url(${FERARI})`,
            }}>
            <div className='model'>Ferrari 458 Italia</div>
            </div>
        </div>
        <div className='prawoduze'>
            <div className='opis'>
                superfura
            </div>
        </div>
    </div>
  )
}

export default Showcase