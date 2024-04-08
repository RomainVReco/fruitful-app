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

  const [idUtilisateur, setIdUtilisateur] = useState(gestionConnexion.getSessionId());
  const [errorMessage, setErrorMessage] = useState('');

  const [modalShow, setModalShow] = useState(false);
  const [transactionMessage, setTransactionMessage] = useState('');
  const [payPalScript, setPayPalScript] = useState(document.createElement('script'))
  const [subscriptionStatus, setSubscriptionStatus] = useState(false);

  useEffect(() => {
    checkSubscription(idUtilisateur);
  }, []);

  const checkSubscription = async (id) => {
    const isAbonne = await gestionConnexion.checkIsAbonne(id);
    setSubscriptionStatus(isAbonne);
  }

  const handleInscription = async () => {
    try {
      // Récupération de l'ID de l'utilisateur connecté en utilisant getSessionId()
      const idUtilisateur = gestionConnexion.getSessionId();

      // Envoyer une requête pour mettre à jour le champ estAbonne
      const response = await axios.post(`http://localhost:8081/updateSubscription/${idUtilisateur}`, { estAbonne: 1 }, { headers });
      console.log(response.data); // Affichage de la réponse du serveur
      setSubscriptionStatus(true);

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
    const thirdLine = `Bienvenue dans Fruitful Premium!`;
    const message = `${firstLine}\n${secondLine}\n${thirdLine}}`; // Concaténer les lignes avec saut de ligne
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
            //currency_code: "EUR", 
            //value: "6.90", // Montant fixe de 6.90 euros
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
        handleApproveTransaction();
        
        //const message = `Bravo ${orderData.payer.name.given_name}! Transaction validée par PayPal. <br /> Accès Fruitful Premium accordé!`;
        const firstLine = "Paypal: transaction validée.";
        const secondLine = `Bravo ${orderData.payer.name.given_name}!`;
        const thirdLine = `Bienvenue dans Fruitful Premium!`;
        const message = `${firstLine}\n${secondLine}\n${thirdLine}`; // Concaténer les lignes avec saut de ligne
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
    <div className='premium'>
      <title>Inscription Premium</title>

      <br />
      <br />

      <Container style={{ borderRadius: '10px', height:'67vh'}}>
        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={4} style={{ borderRadius: '10px' }}>
            <div style={{ maxWidth: "750px", minHeight: "200px" }}>
            {subscriptionStatus ? (
              <>
                <h3>Vous avez le statut Premium</h3>
                <div className='mt-2 text-justify'> Rendez-vous dès à présent dans la rubrique "Évènements" pour profiter de toutes les fonctionnalités premium!
                  </div>
              </>
              ) : (
                <>
                <Container style={{ borderRadius: '10px'}}>
                <Row className="justify-content-center ">
                  <Col xs={12} sm={6} md={4} className="text-center col-premium" style={{ backgroundColor: '#F4F269', borderRadius: '10px' }}>
                    <div>
                      <br />
                      <h2>
                        Envie d'un coaching encore meilleur? <br /> <br /> Passez au statut Premium <br/> pour 6.90 euros!
                      </h2>
                    </div>
                  </Col>
                </Row>
              </Container>

        
              <br />
              <br />
              <PayPalScriptProvider options={{ clientId: PAYPAL_ID, components: "buttons", currency: "USD" }}>
                <ButtonWrapper showSpinner={false} />
              </PayPalScriptProvider>
              </>
            )}
            </div>
              <Modal show={modalShow} onHide={handleCloseModal}>
                <Modal.Header closeButton className="modale-abonnement-paye-header">
                  <Modal.Title>Résultat transaction</Modal.Title>
                </Modal.Header>
                <Modal.Body>{transactionMessage}</Modal.Body>
                <Modal.Footer className="modale-abonnement-paye-footer">
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