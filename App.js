import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="footer">
          <p>© 2024 Your Name. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

const Home = () => (
  <header className="header">
    <h1>Welcome to My Portfolio</h1>
    <p>I'm a Web Developer</p>
  </header>
);

const About = () => (
  <section className="about">
    <h2>About Me</h2>
    <p>I'm Taruna Sri, a third-year Computer Science and Engineering student. I have skills in HTML, CSS, JavaScript, React, and Node.js. I'm passionate about coding, constantly learning new technologies.</p>
    
  </section>
);

const Projects = () => (
  <section className="projects">
    <h2>Projects</h2>
    <div className="project-list">
      <div className="project-item">
        <h3>Hotel Management System</h3>
        <p>The Hotel Booking Management System is a web app
that simplifies hotel reservations for customers and
management tasks for administrators. It streamlines
booking, room availability checks, and reservation
processes, optimizing hotel operations and enhancing
the customer experience.</p>
      </div>
      <div className="project-item">
        <h3>Indian Culture Management System</h3>
        <p>The Indian Culture Management System is a web
platform promoting and preserving Indian culture. It
offers information on traditions, festivals, art, and
historical sites, aiming to raise awareness and
facilitate cultural exchange.</p>
      </div>
     
    </div>
  </section>
);

const Skills = () => (
  <section className="skills">
    <h2>Skills</h2>
    <ul>
    <li>C</li>
      <li>Java</li>
      <li>Python</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
      
    </ul>
  </section>
);

const Contact = () => (
  <section className="contact">
    <h2>Contact</h2>
    <p>Email: 2200030181cseh@gmail.com </p>
    <p>LinkedIn: <a href="https://www.linkedin.com/in/taruna-sri-pamulapati-31321728b">https://www.linkedin.com/in/taruna-sri-pamulapati-31321728b</a></p>
  <p>GitHub: <a href="https://github.com/PTarunaSri">https://github.com/PTarunaSri</a></p>
  </section>
);

export default App;
