import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js'
import Container from 'react-bootstrap/Container';
import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
// This value is from the props in the UI
const style = { "layout": "vertical" };
const PAYPAL_ID = 'AUc9A_Q4BlFKrhLXmVpRkDP4DChqyk3mXCqw_v23Kluwo891aTJRXDhuzLWkAdM6042ih1aGG37s9Kwu'

const Test = () => {

    const [modalShow, setModalShow] = useState(false);
    const [transactionMessage, setTransactionMessage] = useState('');

    const handleCloseModal = () => {
        setModalShow(false);
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
        <div style={{ maxWidth: "750px", minHeight: "200px" }}>
            jambon
            <div style={{ maxWidth: "750px", minHeight: "200px" }}>
                <PayPalScriptProvider options={{ clientId: "test", components: "buttons", currency: "USD" }}>
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
        </div>
    );
}
export default Test;