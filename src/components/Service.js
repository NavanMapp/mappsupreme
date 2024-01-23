import React from 'react'
import '../styles/service.css'

function Service() {
  return (
      <div className='services'>
        <h1>See what services we offer</h1>
        <div>
            <div className='service_card'>
                <h2>Hardware Support</h2>
                <p>Laptops, Desktops & Printers</p>
                <button>Log Repair</button>
            </div>
              <div className='service_card'>
                  <h2>Software Support</h2>
                  <p>Installation & Maintenance</p>
                  <button>Read More</button>
              </div>
              <div className='service_card'>
                  <h2>Network Support</h2>
                  <p>Switches, Routers & Cabling</p>
                  <button>Read More</button>
              </div>
              <div className='service_card'>
                  <h2>Server Support</h2>
                  <p>Configuring & Administration</p>
                  <button>Read More</button>
              </div>
        </div>
    </div>
  )
}

export default Service