import './App.css';
import PersonCard from './Person';

function App() {
  return (
    <div className="App">
      <PersonCard 
      firstName={"Jane"}
      lastName={"Doe"}
      age={45}
      hair={"Black"}
      />
      <PersonCard 
      firstName={"Jogn"}
      lastName={"Smith"}
      age={88}
      hair={"Brown"}
      />
    </div>
  );
}

export default App;
