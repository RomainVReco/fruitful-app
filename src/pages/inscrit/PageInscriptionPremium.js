import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { gestionConnexion } from '../../_helpers/gestion.connexion';
import axios from 'axios';

  const InscriptionPremium = () => {
  const headers = {
    'Content-Type': 'application/json'
  }

  const [idClient, setIdClient] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [modalShow, setModalShow] = useState(false);
  const [transactionMessage, setTransactionMessage] = useState('');

  useEffect(() => {
      const id = gestionConnexion.getSessionId();
      setIdClient(id);
  }, []);

  const handleInscription = async () => {
    try {
        // Récupération de l'ID de l'utilisateur connecté en utilisant getSessionId()
        const idClient = gestionConnexion.getSessionId();
        
        // Envoyer une requête pour mettre à jour le champ estAbonne
        const response = await axios.post(`http://localhost:8081/updateSubscription/${idClient}`, { estAbonne: 1 }, { headers });
        
        console.log(response.data); // Affichage de la réponse du serveur
        
    } catch (error) {
        console.error('Error:', error);
        setErrorMessage('Failed to update subscription. Please try again.');
    }
  };

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
              setModalShow(true); // Ouvrir la modale
              // Réalisation update dans la base de données pour valider inscription Premium
              handleInscription();
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

  const handleCloseModal = () => {
    setModalShow(false);
  };

  const handleApproveTransaction = () => {
    handleInscription();
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
        <Modal.Header closeButton>
          <Modal.Title>Résultat transaction</Modal.Title>
        </Modal.Header>
        <Modal.Body>{transactionMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    
  );
};

export default InscriptionPremium;