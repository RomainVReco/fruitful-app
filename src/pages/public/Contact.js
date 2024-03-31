import React from 'react';
import Map from '../../components/Map'; // Import the component for the map
import ContactForm from '../../components/FormulaireContact'; // Import the component for the contact form

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="map-section">
                <Map address="3 rue armand moisant 75015 paris" />
            </div>
            <div className="contact-info">
                <h2>fruitful</h2>
                <p>Address: 3 rue armand moisant, 75015 Paris</p>
                <p>Phone: +33 1 23 45 67 89</p>
                <p>Email: contact@fruitful.com</p>
            </div>
            <div className="contact-form">
                <h2>Contactez-nous</h2>
                <ContactForm />
            </div>
        </div>
    );
}

export default Contact;
