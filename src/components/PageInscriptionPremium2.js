import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const InscriptionPremium = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=AUc9A_Q4BlFKrhLXmVpRkDP4DChqyk3mXCqw_v23Kluwo891aTJRXDhuzLWkAdM6042ih1aGG37s9Kwu'; // Assurez-vous de remplacer YOUR_SANDBOX_CLIENT_ID par votre propre identifiant client sandbox PayPal
    script.addEventListener('load', () => {
      // Le script PayPal est chargé, nous pouvons maintenant utiliser ses fonctionnalités
      window.paypal.Buttons({
        createOrder: function(data, actions) {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: '0.01'
                }
              }
            ]
          });
        },
        onApprove: function(data, actions) {
          return actions.order.capture().then(function(details) {
            alert("Transaction réalisée : " + details.payer.name.given_name);
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

    const handlePaymentComplete = () => {
        alert("Paiement effectué!");
    };
    


  return (
    <div>
      {/* Insérer ici le contenu spécifique à votre composant */}
      <title>Inscription Premium</title>
      <link href="https://fonts.googleapis.com/css2?family=Material+Icons" rel="stylesheet" />
      <link rel="stylesheet" href="PageInscriptionPremium.css" type="text/css" />

      <Container>
      <Row className="justify-content-center">
        <Col xs={12} sm={6} md={4}>
          <div id="paypal-button-container"></div>
          {/* Bouton "Paiement effectué" */}
          <div className="text-center">
             <button onClick={handlePaymentComplete} className="payment-complete-button">Confirmer paiement OK</button>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default InscriptionPremium;