import React from 'react'
import './Support.css'

const Support = () => {
  return (
    <div className='container support_flex'>
        <div className='support_text'>
            <h2>It’s time to go social! We’ll make it simple. With passion as the engine of our business, we provide:
            </h2>
        </div>
        <div className='support_card'>
            <div className="support_desc myasset_one">
                <img src="./assets/images/asset_46.png" alt="" />
                <h3>Dedicated Account Managers</h3>
                <p>Single point of contact for every query</p>
            </div>
            <div className="support_desc">
                <img src="./assets/images/asset_47.png" alt="" />
                <h3>360 Degree Digital Marketing</h3>
                <p>One company for all your marketing needs</p>
            </div>
            <div className="support_desc">
                <img src="./assets/images/asset_48.png" alt="" />
                <h3>Frequent Communication</h3>
                <p>Keeping you in the loop at all times</p>
            </div>
            <div className="support_desc">
                <img src="./assets/images/asset_49.png" alt="" />
                <h3>Weekly Reporting</h3>
                <p>Updating you on the status of the digital marketing activities regularly</p>
            </div>
        </div>
    </div>
  )
}

export default Support