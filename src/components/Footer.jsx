import React from 'react'
import { Twitter, Facebook, Instagram, Github } from 'lucide-react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <div className="footer-logo">
            <h2>CreaLon3</h2>
            <p>Shop Digital. Sell Creative</p>
          </div>
          <div className="social-icons">
            <a href="#" className="social-icon twitter">
              <Twitter size={18} />
            </a>
            <a href="#" className="social-icon facebook">
              <Facebook size={18} />
            </a>
            <a href="#" className="social-icon instagram">
              <Instagram size={18} />
            </a>
            <a href="#" className="social-icon github">
              <Github size={18} />
            </a>
          </div>
        </div>
        
        <div className="footer-column">
          <h3>COMPANY</h3>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Works</a></li>
            <li><a href="#">Career</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>HELP</h3>
          <ul>
            <li><a href="#">Customer Support</a></li>
            <li><a href="#">Delivery Details</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>FAQ</h3>
          <ul>
            <li><a href="#">Account</a></li>
            <li><a href="#">Manage Deliveries</a></li>
            <li><a href="#">Orders</a></li>
            <li><a href="#">Payments</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>RESOURCES</h3>
          <ul>
            <li><a href="#">Free eBooks</a></li>
            <li><a href="#">Development Tutorial</a></li>
            <li><a href="#">How to - Blog</a></li>
            <li><a href="#">Youtube Playlist</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
