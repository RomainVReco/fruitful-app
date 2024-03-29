import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const InscriptionPremium = () => {
  const [firstModalShow, setFirstModalShow] = useState(false);
  const [secondModalShow, setSecondModalShow] = useState(false);
  const [transactionMessage, setTransactionMessage] = useState('');

  useEffect(() => {
    try {
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
              setFirstModalShow(true); // Ouvrir la première modale
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
    } catch (error) {
      console.error("Erreur lors de l'appel à l'API PayPal :", error);
      alert("Une erreur est survenue lors de la communication avec PayPal.");
    }
  }, []);

  const handleCloseFirstModal = () => {
    setFirstModalShow(false);
    // Afficher la deuxième modale après avoir fermé la première
    setSecondModalShow(true);
  };

  const handleCloseSecondModal = () => {
    setSecondModalShow(false);
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
    setFirstModalShow(true); // Ouvrir la première modale
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

      {/* Première modale */}
      <Modal show={firstModalShow} onHide={handleCloseFirstModal}>
        <Modal.Header closeButton>
          <Modal.Title>Résultat transaction</Modal.Title>
        </Modal.Header>
        <Modal.Body>{transactionMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseFirstModal}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Deuxième modale */}
      <Modal show={secondModalShow} onHide={handleCloseSecondModal}>
        <Modal.Header closeButton>
          <Modal.Title>Bienvenue en Premium</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Félicitations pour votre inscription en Premium ! Vous pouvez maintenant profiter de tous les avantages.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseSecondModal}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default InscriptionPremium;