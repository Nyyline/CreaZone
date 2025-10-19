import React, { useState } from 'react'
import { Twitter, Facebook, Instagram, Github, Mail, Send, Check } from 'lucide-react'
import emailjs from '@emailjs/browser'
import '../styles/Footer.css'
import logoImage from '../assets/LOGO 1.svg'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleJoinUs = async (e) => {
    e.preventDefault()
    if (email) {
      setIsLoading(true)
      setError('')
      
      try {
        // EmailJS configuration - you can change the template ID here
        const serviceId = 'service_tdxzfel'
        const templateId = 'template_jwwsnrv' // Change this to a new template ID if needed
        const publicKey = '5H0JfENQmPNEjNOyJ'
        
        // Template parameters - matching your EmailJS template variables
        const templateParams = {
          email: email, // This matches your template's {{email}} variable
          name: 'New Subscriber', // This matches your template's {{name}} variable
          first_name: 'New Subscriber', // This matches your template's {{first_name}} variable
          from_name: 'CreaZone Newsletter',
          message: 'Thank you for subscribing to CreaZone newsletter! You will receive updates about our latest digital products, tips, and exclusive offers.',
          subject: 'Welcome to CreaZone Newsletter!',
          reply_to: email
        }
        
        console.log('Sending email with params:', templateParams)
        
        // Send email using EmailJS
        const result = await emailjs.send(serviceId, templateId, templateParams, publicKey)
        console.log('EmailJS Success:', result)
        
        // Show success message
        setIsSubscribed(true)
        setEmail('')
        setError('')
        
      } catch (error) {
        console.error('EmailJS Error:', error)
        
        // More specific error messages
        if (error.status === 422) {
          setError('Invalid email template configuration. Please check your EmailJS setup.')
        } else if (error.status === 400) {
          setError('Invalid email address or template parameters.')
        } else if (error.status === 401) {
          setError('EmailJS authentication failed. Please check your API key.')
        } else {
          setError(`Failed to subscribe: ${error.text || 'Unknown error'}`)
        }
      } finally {
        setIsLoading(false)
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubscribed(false)
          setError('')
        }, 5000)
      }
    }
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <div className="footer-logo">
            <img src={logoImage} alt="logo" className='w-40 h-20'/>
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
          <h3>JOIN US</h3>
          <div className="join-us-content">
            <p className="join-us-description">
              Subscribe to our newsletter and get the latest digital products, tips, and exclusive offers delivered to your inbox!
            </p>
            <form onSubmit={handleJoinUs} className="newsletter-form">
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="newsletter-input"
                  required
                />
              </div>
              <button type="submit" className="newsletter-button" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <div className="loading-spinner"></div>
                    Subscribing...
                  </>
                ) : isSubscribed ? (
                  <>
                    <Check size={16} />
                    Subscribed!
                  </>
                ) : (
                  <>
                    <Mail size={16} />
                    Subscribe Now
                  </>
                )}
              </button>
              {isSubscribed && (
                <p className="success-message">
                  🎉 Welcome to CreaZone! Check your email for confirmation.
                </p>
              )}
              {error && (
                <p className="error-message">
                  ❌ {error}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
