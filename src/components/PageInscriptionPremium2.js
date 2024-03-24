import React, { useEffect } from 'react';

const InscriptionPremium = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=AUc9A_Q4BlFKrhLXmVpRkDP4DChqyk3mXCqw_v23Kluwo891aTJRXDhuzLWkAdM6042ih1aGG37s9Kwu';
    script.addEventListener('load', () => {
      // Le script PayPal est chargé, nous pouvons maintenant utiliser ses fonctionnalités
      /* global paypal */ // Ce commentaire indique à ESLint que paypal est une variable globale
      paypal.Buttons().render("#paypal-button-container");
    });
    document.body.appendChild(script);

    return () => {
      // Nettoyer le script lors du démontage du composant
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Insérer ici le contenu spécifique à votre composant */}
      <title>Inscription Premium</title>
      <link href="https://fonts.googleapis.com/css2?family=Material+Icons" rel="stylesheet" />
      <link rel="stylesheet" href="PageInscriptionPremium.css" type="text/css" />

      <div id="paypal-button-container"></div>
    </div>
  );
};

export default InscriptionPremium;