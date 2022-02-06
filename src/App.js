
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './Navbar';
import { aBrands } from './Data';

function App() {
  return (
    <Router>
      <Navbar {...aBrands}/>
    </Router>
  
  );
}

export default App;
