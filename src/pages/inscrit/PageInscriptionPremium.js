import React, { useState, useEffect } from 'react';
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { gestionConnexion } from '../../_helpers/gestion.connexion';
import axios from 'axios';

const PAYPAL_ID = 'AUc9A_Q4BlFKrhLXmVpRkDP4DChqyk3mXCqw_v23Kluwo891aTJRXDhuzLWkAdM6042ih1aGG37s9Kwu'
const style = { "layout": "vertical" };

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

  useEffect(() => {
    const id = gestionConnexion.getSessionId();
    setidUtilisateur(id)
  }, []);


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

  function createOrder() {
    // replace this url with your server
    return fetch("https://react-paypal-js-storybook.fly.dev/api/paypal/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // use the "body" param to optionally pass additional order information
      // like product ids and quantities
      body: JSON.stringify({
        cart: [
          {
            sku: "1blwyeo8",
            quantity: 2,
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((order) => {
        // Your code here after create the order
        return order.id;
      });
  }
  function onApprove(data) {
    // replace this url with your server
    return fetch("https://react-paypal-js-storybook.fly.dev/api/paypal/capture-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderID: data.orderID,
      }),
    })
      .then((response) => response.json())
      .then((orderData) => {
        const message = `Bravo ${orderData.payer.name.given_name}! Transaction validée par PayPal. Accès Fruitful Premium accordé`;
        setTransactionMessage(message); // Mettre à jour le message de transaction
        setModalShow(true); // Ouvrir la modale
      });
  }

  // Custom component to wrap the PayPalButtons and show loading spinner
  const ButtonWrapper = ({ showSpinner }) => {
    const [{ isPending }] = usePayPalScriptReducer();

    return (
      <>
        {(showSpinner && isPending) && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[style]}
          fundingSource={undefined}
          createOrder={createOrder}
          onApprove={onApprove}
        />
      </>
    );
  }

  return (
    <div>
      <title>Inscription Premium</title>
      <link href="https://fonts.googleapis.com/css2?family=Material+Icons" rel="stylesheet" />
      <link rel="stylesheet" href="PageInscriptionPremium.css" type="text/css" />

      <br />
      <br />

      <Container style={{ borderRadius: '10px' }}>
        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={4} className="text-center" style={{ backgroundColor: '#F4F269', borderRadius: '10px' }}>
            <div>
              <br />
              <h2>
                Envie d'un coaching encore meilleur? <br /> Passez en classe Premium!
              </h2>
            </div>
          </Col>
        </Row>
      </Container>

      <br />
      <br />

      <Container style={{ borderRadius: '10px' }}>
        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={4} className="text-center" style={{ borderRadius: '10px' }}>
            <div style={{ maxWidth: "750px", minHeight: "200px" }}>
              <PayPalScriptProvider options={{ clientId: PAYPAL_ID, components: "buttons", currency: "USD" }}>
                <ButtonWrapper showSpinner={false} />
              </PayPalScriptProvider>
            </div>
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
          </Col>
        </Row>
      </Container>
    </div>

  );
};

export default InscriptionPremium;