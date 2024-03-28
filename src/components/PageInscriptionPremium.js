import '../App.css';

import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const InscriptionPremium = () => {
  const [modalShow, setModalShow] = useState(false);
  const [transactionMessage, setTransactionMessage] = useState('');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=AUc9A_Q4BlFKrhLXmVpRkDP4DChqyk3mXCqw_v23Kluwo891aTJRXDhuzLWkAdM6042ih1aGG37s9Kwu'; //votre propre identifiant client PayPal
    script.addEventListener('load', () => {
      // Le script PayPal est chargé, nous pouvons maintenant utiliser ses fonctionnalités
      window.paypal.Buttons({
        createOrder: function(data, actions) {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: '0.01' // Montant de la transaction
                }
              }
            ]
          });
        },
        onApprove: function(data, actions) {
          return actions.order.capture().then(function(details) {
            const message = `Bravo ${details.payer.name.given_name}! Transaction validée par PayPal. Accès Fruitful Premium accordé`;
            setTransactionMessage(message); // Mettre à jour le message de transaction
            setModalShow(true); // Ouvrir la modale
          });
        },
        onError: function(err) {
          console.error('Payment Error :', err);
          alert("Paiement a échoué!");
        }
      }).render("#paypal-button-container");
    });

    script.onerror = function() {
      console.error("Erreur lors du chargement du script PayPal.");
    };

    document.body.appendChild(script);

    return () => {
      // Nettoyer le script lors du démontage du composant
      document.body.removeChild(script);
    };
  }, []);

  const handleCloseModal = () => {
    setModalShow(false);
  };

  const handleApproveTransaction = () => {
    const simulatedDetails = {
      payer: {
        name: {
          given_name: "John" // Simulez les données du payer
        }
      }
    };
    const message = `Paypal: transaction validée. Bravo ${simulatedDetails.payer.name.given_name}! Bienvenue dans Fruitful Premium!`;
    setTransactionMessage(message); // Mettre à jour le message de transaction
    setModalShow(true); // Ouvrir la modale
  };

  return (
    <div>
      <title>Inscription Premium</title>
      <link href="https://fonts.googleapis.com/css2?family=Material+Icons" rel="stylesheet" />
      <link rel="stylesheet" href="PageInscriptionPremium.css" type="text/css" />

      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={4}>
            <div id="paypal-button-container">
              {/* Ajout bouton pour simuler l'événement onApprove */}
              <Button onClick={handleApproveTransaction}>Simuler Transaction</Button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Modale pour afficher le message de transaction */}
      <Modal show={modalShow} onHide={handleCloseModal}>
        <Modal.Header closeButton className="modale-abonnement-paye-header">
            <Modal.Title>Résultat transaction</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modale-abonnement-paye-body">{transactionMessage}</Modal.Body>
            <Modal.Footer className="modale-abonnement-paye-footer">
                <Button variant="secondary" onClick={handleCloseModal}>
                Fermer
                </Button>
            </Modal.Footer>
        </Modal>
    </div>
  );
};

export default InscriptionPremium;