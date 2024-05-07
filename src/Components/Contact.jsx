import React from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import '../App.css'

const Contact = () => {
  return (
    <div className="contact-page">
      <header className="header">
        <h1>Contact Us</h1>
        <p>Get in touch with us for any inquiries or feedback.</p>
      </header>
      <section className="content">
        <Card className="card" title="Send us a Message">
          <form>
            <div className="p-field">
              <span className="p-float-label">
                <InputText id="name" />
                <label htmlFor="name">Name</label>
              </span>
            </div>
            <div className="p-field">
              <span className="p-float-label">
                <InputText id="email" />
                <label htmlFor="email">Email</label>
              </span>
            </div>
            <div className="p-field">
              <span className="p-float-label">
                <InputText id="message" />
                <label htmlFor="message">Message</label>
              </span>
            </div>
            <Button label="Send" className="p-button-raised p-button-primary" />
          </form>
        </Card>
        <Card className="card" title="Contact Information">
          <p>Email: info@example.com</p>
          <p>Phone: +123-456-7890</p>
          <p>Address: 123 Main St, City, Country</p>
        </Card>
      </section>
    </div>
  );
};

export default Contact;
