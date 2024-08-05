import React from "react";
import '../Styles/OurServices.css'

const OurService = () => {
  return (
    <section>
      <div class="timeline">
        <div class="container left-container">
          <img src="../img/google.png" alt="" />
            <div class="text-box">
            <h2>Dreaming Together</h2>
                <small>Step 1</small>
                <p>
                    It all begins with an idea. Share your vision with us, and let's brainstorm together to bring your dream to life. We listen, understand, and start shaping your concepts.
                </p>
                <span class="left-container-arrow"></span>
            </div>
        </div>
        
        <div class="container right-container">
        <img src="../img/tesla.png" alt="" />
            <div class="text-box">
            <h2>Design & Planning</h2>
                <small>Step 2</small>
                <p>
                    Our creative team transforms your ideas into stunning designs using tools like Figma. We plan every detail to ensure the final product aligns perfectly with your vision.
                </p>
                <span class="right-container-arrow"></span>
            </div>
        </div>
        
        <div class="container left-container">
        <img src="../img/google.png" alt="" />
            <div class="text-box">
            <h2>Development</h2>
                <small>Step 3</small>
                <p>
                    Our developers get to work, turning designs into a fully functional website. We use the latest technologies and best practices to build a robust and scalable solution.
                </p>
                <span class="left-container-arrow"></span>
            </div>
        </div>
        
        <div class="container right-container">
        <img src="../img/tesla.png" alt="" />
            <div class="text-box">
            <h2>Testing</h2>
                <small>Step 4</small>
                <p>
                    We thoroughly test the website to ensure everything works perfectly. This includes usability testing, bug fixing, and performance optimization to deliver a flawless product.
                </p>
                <span class="right-container-arrow"></span>
            </div>
        </div>

        <div class="container left-container">
        <img src="../img/google.png" alt="" />
            <div class="text-box">
            <h2>Launch</h2>
                <small>Step 5</small>
                <p>
                    Once the website is ready, we handle the launch and ensure everything runs smoothly. We deploy your site to a live server, making it accessible to your audience.
                </p>
                <span class="left-container-arrow"></span>
            </div>
        </div>

        <div class="container right-container">
        <img src="../img/tesla.png" alt="" />
            <div class="text-box">
            <h2>Support & Maintenance</h2>
                <small>Step 6</small>
                <p>
                    Our support doesn't end with the launch. We're here to help you with any updates, maintenance, or improvements you need. Your success is our ongoing commitment.
                </p>
                <span class="right-container-arrow"></span>
            </div>
        </div>

    </div>
    </section>
  );
};

export default OurService;
