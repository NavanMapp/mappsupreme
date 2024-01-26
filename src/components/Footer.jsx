import React from 'react';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className='footer_container'>
      <div className='footer_links'>
        <div className='footer_linkItems'>
          <h2>Navigation</h2>
          <a href="/" aria-label="Home">Home</a>
          <a href="/" aria-label="About">About</a>
          <a href="/" aria-label="Services">Services</a>
        </div>
        <div className='footer_linkItems'>
          <h2>Contact Us</h2>
          <p>Newcastle, Arbor Park</p>
          <a href="mailto:mappsupreme@gmail.com">mappsupreme@gmail.com</a>
        </div>
        <div className='footer_linkItems'>
          <h2>Videos</h2>
          <a href="/">Our Hardware Support</a>
          <a href="/">Our Software Support</a>
          <a href="/">Our Server & Networking Support</a>
        </div>
      </div>
      <section className='social_media'>
        <div className='footer_logo'>
          <a href='/'>MAPP SUPREME</a>
          <p className="website_rights">© MAPP SUPREME 2024. All Rights Reserved</p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
