import React from 'react'
import './Partner.css'

const Partner = () => {
  return (
    <div className='container partner_flex'>
        <div className="partner_text">
            <h2>Our Partners</h2>
            <p>We are proud to be powered by them</p>
        </div>

        <div className="partner_brands">
            <div className='partner_imgs'>
                <img src="./assets/images/asset_31.png" alt="" />
            </div>
            <div className='partner_imgs'>
                <img src="./assets/images/asset_32.png" alt="" />
            </div>
            <div className='partner_imgs'>
                <img src="./assets/images/asset_33.png" alt="" />
            </div>
            
        </div>

    </div>
  )
}

export default Partner