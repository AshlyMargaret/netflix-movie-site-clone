import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className="footerCenterContent">
      <div className="socialMediaIcons">
       <i class="fa-brands fa-facebook"></i>
       <i class="fa-brands fa-instagram"></i>
       <i class="fa-brands fa-twitter"></i>
       <i class="fa-brands fa-youtube"></i>
       </div>
       <div className="footerListItems">
           <div className="firstUlSection">
            <ul className='footerUl'>
              <li><a href="#">Audio Description</a></li>
              <li><a href="#">Investor Relations</a></li>
              <li><a href="#">Legal Notices</a></li>
            </ul>
           </div>
           <div className="secondUlSection">
            <ul className='footerUl'>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="">cookies Preferences</a></li>
            </ul>
           </div>
           <div className="thirdUlSection">
            <ul className='footerUl'>
              <li><a href="#">Gift Cards</a></li>
              <li><a href="#">Terms Of Use</a></li>
              <li><a href="#">Corporate Information</a></li>
            </ul>
           </div>
           <div className="fourthUlSection">
            <ul className='footerUl'>
              <li><a href="#">Media Center</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
           </div>
       </div>
       <div className="serviceCode">
         <button className='serviceBtn'>Service Code</button>
       </div>
       <div className="copyRight">
        <p>@1997-2023 Netflix,Inc</p>
       </div>
      </div>
      
    </div>
  )
}

export default Footer