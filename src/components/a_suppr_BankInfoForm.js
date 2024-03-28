import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const BankInfoForm = () => {
  const [formData, setFormData] = useState({
    accountHolderName: '',
    accountNumber: '',
    bankName: '',
    routingNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Faire quelque chose avec les données, par exemple les envoyer à un backend
    console.log('Données bancaires soumises :', formData);
    // Réinitialiser le formulaire
    setFormData({
      accountHolderName: '',
      accountNumber: '',
      bankName: '',
      routingNumber: '',
    });
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2>Formulaire d'informations bancaires</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formAccountHolderName">
              <Form.Label>Nom du titulaire du compte</Form.Label>
              <Form.Control
                type="text"
                name="accountHolderName"
                placeholder="Entrez le nom du titulaire du compte"
                value={formData.accountHolderName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formAccountNumber">
              <Form.Label>Numéro de compte</Form.Label>
              <Form.Control
                type="text"
                name="accountNumber"
                placeholder="Entrez le numéro de compte"
                value={formData.accountNumber}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBankName">
              <Form.Label>Nom de la banque</Form.Label>
              <Form.Control
                type="text"
                name="bankName"
                placeholder="Entrez le nom de la banque"
                value={formData.bankName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formRoutingNumber">
              <Form.Label>Numéro de routage</Form.Label>
              <Form.Control
                type="text"
                name="routingNumber"
                placeholder="Entrez le numéro de routage"
                value={formData.routingNumber}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Soumettre
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default BankInfoForm;