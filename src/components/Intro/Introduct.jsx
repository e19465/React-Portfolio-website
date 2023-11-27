import React from 'react'
import './introduct.css'
import DP from '../../img/dps.png'
const Introduct = () => {
  return (
    <div className='i-main'>
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className="i-name-first">
                    Hello, my name is
                </h2>
                <h1 className='i-name'>
                    Sasindu Dilshan
                </h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Web Developer</div>
                        <div className="i-title-item">UI/UX Designer</div>
                        <div className="i-title-item">Photographer</div>
                        <div className="i-title-item">Writer</div>
                        <div className="i-title-item">Content Creator</div>
                    </div>
                </div>
                <p className="i-desc">
                    I design and develop services for customers of all sizes, specializing in creative styles, modern websites, web services and online stores.
                </p>
            </div>
        </div>
        <div className="i-right">
            <div className="i-right-bg"></div>
            <img src={DP} alt="" className="i-right-img" />
        </div>
    </div>
  )
}

export default Introduct