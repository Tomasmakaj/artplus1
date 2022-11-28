import React from 'react'
import './Partner.css'

// import aimco from '../../assets2/aimco.jpeg'
import amax from '../../assets2/amax.jpeg'
import cush from '../../assets2/cush.jpeg'
// import delta from '../../assets2/delta.jpeg'
import douglas from '../../assets2/douglas.jpeg'
import elk from '../../assets2/elk.png'
import greystar from '../../assets2/greystar.jpeg'
import jonathan from '../../assets2/jonathan.png'
import kipp from '../../assets2/kipp.png'
import lepain from '../../assets2/lepain.png'
import ole from '../../assets2/ole.png'
// import orsid from '../../assets2/orsid.jpeg'
import stawski from '../../assets2/stawski.jpeg'
import suit from '../../assets2/suit.png'

const Partner = () => {
  return (
    <div>
        <h1>Overlook of our Partners</h1>
        <div class="row">
            <div class="column">
                <img src= {douglas} />
                <img src= {cush} />
                <img src= {greystar} />
                <img src= {suit} />
                <img src= {jonathan} />
                <img src= {elk} />
                <img src= {lepain} />
                <img src= {ole} />
                <img src= {stawski} />
                <img src= {kipp} />
                <img src= {amax} />
            </div>
        </div>
    </div>
  )
}

export default Partner