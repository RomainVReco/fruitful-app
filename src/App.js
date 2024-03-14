import logo from './logo.svg';
import './App.css';
import GenericButton from './components/GenericButton';
import Tache from './components/Tache';

const handleSubmit = (event) => {
  event.preventDefault()
  console.log('Bouton cliqué')
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <GenericButton label={'Valider'} buttonStyle={'boutonValider'} method={handleSubmit}/>
      <GenericButton label={'Annuler'} buttonStyle={'boutonAnnuler'} method={handleSubmit}/>
      <Tache/>
    </div>
  );
}

export default App;
