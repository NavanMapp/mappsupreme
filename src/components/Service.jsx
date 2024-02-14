import '../styles/service.css'
import hardwarePic from '../images/pic2.png'
import winPic from '../images/pic4.png'
import switchPic from '../images/pic7.png'
import serverPic from '../images/pic8.png'
import { useNavigate } from 'react-router-dom'

function Service() {

    const navigate = useNavigate()

    function handleReadbtn() {
        //other login logic to be added, like when the user had logged in and navigates
        // back to this page, it should be able to store their id.
        //if userid checked and found then it should go to ticket page instead of login
        navigate('/login')
    }
    return (
        <div className='services'>
            <h1>See what services we offer</h1>
            <div className='services_container'>
                <div className='service_card'>
                    <h2>Hardware Support</h2>
                    <p>Laptops, Desktops & Printers</p>
                    <img src={hardwarePic} alt='Hardware' className='main_img' />
                    <button onClick={handleReadbtn} className='main_btn'>Log ticket</button>
                </div>
                <div className='service_card'>
                    <h2>Software Support</h2>
                    <p>Installation & Maintenance</p>
                    <img src={winPic} alt='Hardware' className='main_img' />
                    <button onClick={handleReadbtn} className='main_btn'>Log ticket</button>
                </div>
                <div className='service_card'>
                    <h2>Network Support</h2>
                    <p>Switches, Routers & Cabling</p>
                    <img src={switchPic} alt='Hardware' className='main_img' />
                    <button onClick={handleReadbtn} className='main_btn'>Log ticket</button>
                </div>
                <div className='service_card'>
                    <h2>Server Support</h2>
                    <p>Configuring & Administration</p>
                    <img src={serverPic} alt='Hardware' className='main_img' />
                    <button onClick={handleReadbtn} className='main_btn'>Log ticket</button>
                </div>
            </div>
        </div>
    )
}

export default Service