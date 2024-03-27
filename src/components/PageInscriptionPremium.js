import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const InscriptionPremium = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=AUc9A_Q4BlFKrhLXmVpRkDP4DChqyk3mXCqw_v23Kluwo891aTJRXDhuzLWkAdM6042ih1aGG37s9Kwu'; // Remplacez YOUR_CLIENT_ID par votre propre identifiant client PayPal
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
            const message = `Transaction réalisée par ${details.payer.name.given_name} via PayPal.`;
            displayTransactionMessage(message); // Appeler la fonction pour afficher le message de transaction
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

  const displayTransactionMessage = (message) => {
    // Mettre à jour l'état de votre composant ou effectuer d'autres actions pour afficher le message de transaction
    alert(message); // Exemple : affichage d'une boîte de dialogue avec le message
  };

  return (
    <div>
      <title>Inscription Premium</title>
      <link href="https://fonts.googleapis.com/css2?family=Material+Icons" rel="stylesheet" />
      <link rel="stylesheet" href="PageInscriptionPremium.css" type="text/css" />

      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={4}>
            <div id="paypal-button-container"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InscriptionPremium;