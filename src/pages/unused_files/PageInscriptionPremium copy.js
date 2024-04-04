/**********************************/
// Copie back up de PageInscriptionPremium

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

  const [idUtilisateur, setidUtilisateur] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [modalShow, setModalShow] = useState(false);
  const [transactionMessage, setTransactionMessage] = useState('');
  const [payPalScript, setPayPalScript] = useState(document.createElement('script'))
  const [loadingScript, setLoadingScript] = useState(payPalScript['src'] = 'https://www.paypal.com/sdk/js?client-id=AUc9A_Q4BlFKrhLXmVpRkDP4DChqyk3mXCqw_v23Kluwo891aTJRXDhuzLWkAdM6042ih1aGG37s9Kwu')


  const handleInscription = async () => {
    try {
        // Récupération de l'ID de l'utilisateur connecté en utilisant getSessionId()
        const idUtilisateur = gestionConnexion.getSessionId();
        
        // Envoyer une requête pour mettre à jour le champ estAbonne
        const response = await axios.post(`http://localhost:8081/updateSubscription/${idUtilisateur}`, { estAbonne: 1 }, { headers });
        
        console.log(response.data); // Affichage de la réponse du serveur
        
    } catch (error) {
        console.error('Error:', error);
        setErrorMessage('Failed to update subscription. Please try again.');
    }
  };

  useEffect(() => {
      const id = gestionConnexion.getSessionId();
      setidUtilisateur(id);
      setupPayPal();
      
  }, []);

  const setupPayPal = () => {
    
    payPalScript.addEventListener('load', () => {
      // Le script PayPal est chargé, nous pouvons maintenant utiliser ses fonctionnalités
      window.paypal.Buttons({
        createOrder: function(data, actions) {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: '12.00' // Montant de la transaction
                }
              }
            ]
          });
        },
        onApprove: async function(data, actions) {
          const details = await actions.order.capture();
          const message = `Bravo ${details.payer.name.given_name}! Transaction validée par PayPal. Accès Fruitful Premium accordé`;
          setTransactionMessage(message); // Mettre à jour le message de transaction
          setModalShow(true); // Ouvrir la modale
          // Réalisation update dans la base de données pour valider inscription Premium
          handleInscription();
        },
        onError: function(err) {
          console.error('Payment Error :', err);
          alert("Paiement a échoué!");
        }
      }).render("#paypal-button-container");
    });

    payPalScript.onerror = function() {
      console.error("Erreur lors du chargement du script PayPal.");
    };

    document.body.appendChild(payPalScript);

    return () => {
      // Nettoyer le script lors du démontage du composant
      document.body.removeChild(payPalScript);
    };
  }

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
    const firstLine = "Paypal: transaction validée.";
    const secondLine = `Bravo ${simulatedDetails.payer.name.given_name}! Bienvenue dans Fruitful Premium!`;
    const message = `${firstLine}\n${secondLine}`; // Concaténer les deux lignes avec une balise <br>
    setTransactionMessage(message); // Mettre à jour le message de transaction
    setModalShow(true); // Ouvrir la modale
  };

  return (
    <div>
      <title>Inscription Premium</title>
      <link href="https://fonts.googleapis.com/css2?family=Material+Icons" rel="stylesheet" />
      <link rel="stylesheet" href="PageInscriptionPremium.css" type="text/css" />

      <br />
      <br />

      <Container style={{ borderRadius: '10px' }}>
        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={4} className="text-center" style={{backgroundColor: '#F4F269', borderRadius: '10px'}}>
            <div>
              <br />
              <h2>
                Envie d'un coaching encore meilleur? Passer en classe Premium!
              </h2>
            </div>
          </Col>
        </Row>
      </Container>

      <br />
      <br />

      <Container style={{ borderRadius: '10px' }}>
        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={4} className="text-center" style={{borderRadius: '10px'}}>
            <div id="paypal-button-container">
              <br />
              {/* Ajout bouton pour simuler l'événement onApprove */}
              {/*<Button onClick={handleApproveTransaction}>Simuler Transaction</Button>*/}
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