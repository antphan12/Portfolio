// filepath: /E:/Personal Projects/Portfolio/Main/Home.js
import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <title>Anthony Phan Personal Portfolio</title>

    {/*Home Container*/}
      <div className="container">
        <div className="glass-container">
          <nav className="navbar">
            <div className="name">Anthony Phan</div>
            <div className="nav-social-media">
              <a href="https://www.linkedin.com/in/anthony-phan-8bb143231/" className="fa fa-linkedin"></a>
              <a href="https://github.com/antphan12" className="fa fa-github"></a>
              <a href="mailto:antphan12@gmail.com" className="fa fa-envelope"></a>
              <a href="https://www.instagram.com/its_meant12/" className="fa fa-instagram"></a>
            </div>
          </nav>
          <div className="content">
            <div className="main">
              <h2>Hello! 👋,<br />I'm Anthony</h2>
              <p>
                Welcome to my personal portfolio. Click below to learn more about me.
              </p>
              <a href="#aboutMeContainer"><button>About Me!</button></a>
            </div>
            <div className="image-wrapper">
              <img src="./icons/VSA Portrait.jpg" alt="Portrait" />
            </div>
          </div>
        </div>
      </div>

    {/*About Container*/}
    <div class="container" id="aboutMeContainer">
        <div class="glass-container">
            <nav class="navbar">
                <div class="name">About Me</div>
            </nav>
            <div class="who-am-i-content">
                <div class="who-am-i">
                    <h1>Who Am I as a Student?</h1>
                    <p>
                       As a current student at <strong id="isu">Iowa State Universtiy</strong>, pursuing a Bachelor's degree in Software Engineering, set to gradute May of 2026. I am an eager and motivated individual who is always looking 
                       to learn and grow my network with here at Iowa State and outside of my education. With a solid foundation in <em>AWS, Java, JavaScript, CSS, C, HTML, and other languages.</em> I’ve honed my skills through 
                       hands-on projects which I am eager to take on with the challenges ahead. <strong id="opportunities">I’m looking forward to connecting and seeking a Summer internship</strong> with professionals and organizations where I can 
                       contribute my skills and continue to grow as a software engineer.
                    </p>
                </div>
                <div class="cyclone-img">
                    <img src="./icons/Iowa-State-Cyclones-Logo-1978.png" alt="Iowa-State-Cyclones-Logo-1978" />
                </div>
            </div>
            <div class="about-me-container">
                <div class="portrait">
                    <img src="./icons/portrait.jpg" alt="portrait" />
                </div>
                <div class="about-me">
                    <h1>Who Am I as a Person?</h1>
                    <p>
                       Hello!! My name is <strong id="name">Anthony Phan</strong> and I was born and raised in Davenport, Iowa. I am a first-generation college student from a Vietnamese family, where I am bilingual in both English and Vietnamese.
                       Growing up I was always interested in technogy and how it works, which led me to pursue a degree in Software Engineering. I am a very outgoing and social person who loves to meet new people and
                       learn about the world around me. In my free time, I enjoy playing video games, cooking, and spending time with my friends and family. Please feel free to reach out to me through email or connect on LinkedIn
                    </p>
                </div>
            </div>
        </div>
    </div>

      <footer>
        <div className="footer">
          <p>Anthony Phan © 2024</p>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/anthony-phan-8bb143231/" className="fa fa-linkedin"></a>
            <a href="https://github.com/antphan12" className="fa fa-github"></a>
            <a href="mailto:antphan12@gmail.com" className="fa fa-envelope"></a>
            <a href="https://www.instagram.com/its_meant12/" className="fa fa-instagram"></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;