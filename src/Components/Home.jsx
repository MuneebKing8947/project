import React from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import '../App.css'

const Home = () => {
  return (
    <div className="homepage">
      <header className="header">
        <h1>Welcome to Our Website</h1>
        <p>Discover Amazing Things</p>
        <Button label="Get Started" className="p-button-raised p-button-primary" />
      </header>
      <section className="features">
        <div className="feature-card">
          <Card title="Feature 1" subTitle="Lorem ipsum dolor sit amet">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Card>
        </div>
        <div className="feature-card">
          <Card title="Feature 2" subTitle="Consectetur adipiscing elit">
            <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </Card>
        </div>
        <div className="feature-card">
          <Card title="Feature 3" subTitle="Sed do eiusmod tempor incididunt">
            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </Card>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2024 Our Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;