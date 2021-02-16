import './App.css';
import ContainerGrid from './ContainerGrid';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  //Pendiente de agregar el grid para hacerlo responsive
    return ( 
    <div className = "App" >
      <header className = "App-header" >
        <ContainerGrid></ContainerGrid>
      </header> 
    </div>
    );
}

export default App;