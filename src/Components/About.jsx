import React from 'react';
import { Card } from 'primereact/card';
import '../App.css'

const About = () => {
  return (
    <div className="about-page">
      <header className="header">
        <h1>About Us</h1>
        <p>Learn more about our company and mission.</p>
      </header>
      <section className="content">
        <Card className="card" title="Our Mission">
          <p>We strive to provide innovative solutions to our customers' problems.</p>
        </Card>
        <Card className="card" title="Our Team">
          <p>We have a talented team of professionals dedicated to our vision.</p>
        </Card>
        <Card className="card" title="Our Values">
          <p>Integrity, teamwork, and customer satisfaction are at the core of what we do.</p>
        </Card>
      </section>
    </div>
  );
};

export default About;
