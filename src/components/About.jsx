import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import '../styles/about.css';
import { useAuth } from '../auth/auth';


function About() {

  const { isLoggedIn, handleLoginPage } = useAuth()

  return (
    <div className='about_container'>
      <div>
        <div className='header'>
          <h1>NEXT GENERATION</h1>
          <h2>TECHNOLOGY</h2>
          <h2>See what makes us different</h2>
          <Link onClick={handleLoginPage} className='main_btn'>Get Started</Link>
        </div>
        <div className='main_content'>
          <h1>What do we do?</h1>
          <h2>We offer quality IT Support & Device Repairs</h2>
          <p>
            Our team of experienced IT professionals is committed to providing
            the highest level of service and support and is dedicated to helping
            you maximize the value of your IT infrastructure.
            We provide the following services: We offer a wide range of IT services and solutions,
            including network and infrastructure services, cloud-based services, application
            development, system integration, and data security. Our team is experienced in working
            with organizations of all sizes, and we have the expertise to help you get the most
            out of your IT investments.We have the skills and resources to help you build and maintain
            your IT environment and ensure that your systems are secure and reliable.
            We understand that effective IT solutions are essential to business success
            and we strive to provide our clients with the best possible service.
          </p>

        </div>
        <div className='button'>
          <Link onClick={handleLoginPage} className="main_btn">Schedule Call</Link>
        </div>

      </div>
    </div>
  );
}

export default About;
