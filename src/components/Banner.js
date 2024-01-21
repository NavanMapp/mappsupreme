import '../styles/banner.css'

export default function Banner() {
    return (
    <div>
        <nav className="navbar">
            <div className="navbar_container">
                <a href="/Mapp_Supreme_Site/html/index.html" id="navbar_logo">MAPP SUPREME</a>
                <div className="navbar_toggle" id="mobile-menu">
                    <span className="bar"></span><span class="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className="navbar_menu">
                    <li className="navbar_item">
                        <a href="#home" className="navbar_links" id="home-page">Home</a>
                    </li>
                    <li className="navbar_item">
                        <a href="#about" className="navbar_links" id="about-page">About</a>
                    </li>
                    <li className="navbar_item">
                        <a href="#services" className="navbar_links" id="services-page">Services</a>
                    </li>

                    <li className="navbar_btn">
                        <a href="./login.html" className="button" id="contactus">Sign In</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div> 
    )
}