import React from 'react'
import './Footer1.css'

const Footer1 = () => {
  return (
    <div className='footer_flex'>
        <div className='footer_area'>
            <div className='footer_desc'>
                <h2>Osumare</h2>
                <p>The best digital marketing agency in Pune with a proven track record of consistently delivering quality service.</p>
            </div>
            <div className='footer_desc'>
                <h2>Address</h2>
                <p>Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi, Pune-14, Maharastra, India.</p>
            </div>
            <div className='footer_desc'>
                <h2>Contact Us</h2>
                <i class="fa-light fa-envelope">hello@osumare.in</i>
                
                <i class="fa-solid fa-phone">+91 9890 4006 46</i>
                
                {/* <div><img src="./assets/images/mail1.png" alt="" />hello@osumare.in</div>
                <div><img src="./assets/images/phone1.png" alt="" />+91 9890 4006 46</div>
                <div><img src="./assets/images/phone1.png" alt="" />+91 9890 4006 46</div> */}
            </div>
            <div className='footer_desc'>
                <h2>Socialize with Us</h2>
                <div class="footer-social">
                    <a href=""><img src="./assets/images/icons8-internet-35.png" alt="" /></a>
                    <a href=""><img src="./assets/images/icons8-facebook-35.png" alt="" /></a>
                    <a href=""><img src="./assets/images/icons8-twitter-35.png" alt="" /></a>
                    <a href=""><img src="./assets/images/icons8-linkedin-2-35.png" alt="" /></a>
                    <a href=""><img src="./assets/images/icons8-github-35.png" alt="" /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer1