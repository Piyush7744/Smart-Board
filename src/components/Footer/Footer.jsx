import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div class="footer-content">
          <h3>Smart Board using Hand Gesture</h3>
          <p>Smart Board using Hand Gesture is teachnology where user can print or write anything on the board using hsi/her Hand Gestures. </p>
          <ul class="socials">
            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
            <li><a href="#"><i class="fa fa-youtube"></i></a></li>
            <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
          </ul>
        </div>
        <div class="footer-bottom">
          <p>copyright &copy; 2023 <a href="#">Smart Board using Hand Gesture</a>  </p>
          <div class="footer-menu">
            <ul class="f-menu">
              <li><a href="/">Home</a></li>
              <li><a href="/project">How to use</a></li>
            </ul>
          </div>
        </div>

      </footer>
    </div>
  )
}

export default Footer
