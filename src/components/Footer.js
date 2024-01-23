import React from 'react'
import '../styles/footer.css'

function Footer() {
  return (
    <div className='footer_container'>
        <div className='footer_links'>
            <div className='footer_linkWrap'>
                <div className='foot_linkItems'>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Services</a>
                    <a href="/"></a>
                </div>
                <div className='foot_linkItems'>
                    <h2>Contact Us</h2>
                    <a href="/">Newcastle, Arbor Park</a>
                    <a href="/"></a>
                    <a href="/">mappsupreme@gmail.com</a>
                </div>
                <div className='foot_linkItems'>
                    <h2>Videos</h2>
                    <a href="/">Our Hardware Support</a>
                    <a href="/">Our Software Support</a>
                    <a href="/">Our Server & Networking Support</a>
                    <a href="/"></a>
                </div>
            </div>
        </div>
        <section className='social_media'>
            <div className='footer_logo'>
                <a href='/'>MAPP SUPREME</a>
                <p class="website_rights">© MAPP SUPREME 2024. All Rights Reserved</p>
            </div>
        </section>
    </div>
  )
}

export default Footer