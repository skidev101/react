import React from 'react'
import './Inputfield.css'

const Inputfield = ({ type, placeholder }) => {
  return(
      <div className="inputs">
         <div className="input-wrap">
              <input 
              type={ type }
              placeholder={ placeholder }
              required
              />
        </div>
      </div>
    )
}

export default Inputfield