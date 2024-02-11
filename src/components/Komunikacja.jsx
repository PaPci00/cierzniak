import React from 'react'
import "./Komunikacja.css"

const Kontakty = () => {
  return (
    <div className='kontakty'>
      <div className='klocuch'>
        <div className='gora'>
          ADRES:
        </div>
        <div className='dol'>
        Podwale Staromiejskie 51/52, 80-845 Gdańsk
        </div>
      </div>
      <div className='klocuch'>
      <div className='gora'>
          SZCZEGÓŁY:
        </div>
        <div className='dol'>
        nr tel: +48 412 412 455 / email: papcio@papcio.eu
        </div>
      </div>
      <div className='klocuch'>
      <div className='gora'>
          GODZINY OTWARCIA:
        </div>
        <div className='dol'>
        Jesteśmy dla Was dostępni 24h/7!
        </div>
      </div>
    </div>
  )
}

export default Kontakty