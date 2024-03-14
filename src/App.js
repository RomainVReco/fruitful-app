import logo from './logo.svg';
import './App.css';
import GenericButton from './components/GenericButton';

const handleSubmit = () => {
  console.log('Bouton cliqué')
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <GenericButton label={'Valider'} buttonStyle={'boutonValider'}/>
      <GenericButton label={'Annuler'} buttonStyle={'boutonAnnuler'}/>
    </div>
  );
}

export default App;
