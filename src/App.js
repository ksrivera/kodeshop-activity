import './App.css';
import { ProductList } from './components/ProductList'; 
import { Route, Switch, NavLink, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <ProductList />
    </div>
  );
}

export default App;
