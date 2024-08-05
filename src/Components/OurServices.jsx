import React from "react";
import './OurService.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const OurService = () => {

  return (
    <section>
      <div className="first">
        <div class="custom-shape-divider-top-1720794752">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
          </svg>
        </div>
      </div>
      <div className="second bg-blac">
        <div className="left">
          <span><h1>OUR SERVICES</h1></span>
          <h2>WHAT WE DO</h2>
          <h5>we are a global product design agency.</h5>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, magni!adipisicing elit. Atque, magni!</p>
        </div>
        <div className="right">
          <img src="https://www.zetalight.com/images/illustrations/home/services.svg" alt="" />
        </div>
      </div>
      <div className="Myflex ">
        <div className="left">
          <FontAwesomeIcon className="text-blue-500" style={{ fontSize: '38px',color: '#e42c40' }} icon={faCode} />
          <h2>UI/UX Designs</h2>
          <p>Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Impedit aperiam enim consequuntur 
            adipisci blanditiis architecto, 
            Praesentium maiores dolorum temporibus repudiandae quis dignissimos quasi.
            </p>
        </div>
        <div className="right">
          <FontAwesomeIcon className="text-blue-500" style={{ fontSize: '38px',color: '#e42c40' }} icon={faCode} />
          <h2>DEVELOPMENT OPERATIONS</h2>
          <p>Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Impedit aperiam enim consequuntur 
            adipisci blanditiis architecto, 
            Praesentium maiores dolorum temporibus repudiandae quis dignissimos quasi.
            </p>
        </div>
      </div>
      <div className="My2flex bg-black">
        <div className="left">
          <FontAwesomeIcon className="text-blue-500" style={{ fontSize: '38px',color: '#e42c40' }} icon={faCode} />
          <h2>Deployment Services</h2>
          <p>Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Impedit aperiam enim consequuntur 
            adipisci blanditiis architecto, 
            Praesentium maiores dolorum temporibus repudiandae quis dignissimos quasi.
            </p>
        </div>
        <div className="right">
          <FontAwesomeIcon className="text-blue-500" style={{ fontSize: '38px',color: '#e42c40' }} icon={faCode} />
          <h2>Maintenance</h2>
          <p>Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Impedit aperiam enim consequuntur 
            adipisci blanditiis architecto, 
            Praesentium maiores dolorum temporibus repudiandae quis dignissimos quasi.
            </p>
        </div>
      </div>
    </section>
  )
}

export default OurService;
