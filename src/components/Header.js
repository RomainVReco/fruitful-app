import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function WithHeaderExample() {
  return (
    <Card>
      <Card.Header style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#C12A71', color: 'white' }}>
        <div style={{ marginRight: '10px' }}>
            <img 
                src={require('../assets/logo5.png')} 
                alt="Logo" roundedCircle 
                style={{ 
                    maxWidth: '200px', // Largeur maximale de l'image
                    maxHeight: '100px', // Hauteur maximale de l'image
                    marginRight: '10px' // Espacement à droite de l'image
                }} 
                />
        </div>
        </Card.Header>
    </Card>
  );
}

export default WithHeaderExample;