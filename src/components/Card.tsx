//@ts-ignore
import React from 'react'
import './Card.scss'
// import * as logo from '../images/icon-brand-recognition.svg'
const logo: string = require("../images/icon-brand-recognition.svg").default;

const Card = () => {
  return (
    <div className="card">
        <div className='img-div'>
    <img src={logo}/>
        </div>
     
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
  )
}

export default Card