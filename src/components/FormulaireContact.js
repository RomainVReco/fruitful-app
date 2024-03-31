import React, { useState } from 'react';

const FormulaireContact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic here to handle form submission (e.g., sending data to backend)
        console.log('Form submitted:', { name, email, message });
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea className="form-control" id="message" rows="4" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default FormulaireContact;
