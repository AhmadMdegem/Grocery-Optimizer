import './app.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Home from './components/home/home';
import ProductsSearch from './components/products_search/products_search';
import StoreSearch from './components/stores_search/stores_search';
import Navbar from './components/navigation_bar/navigation_bar'


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductsSearch />} />
          <Route path='/stores' element={<StoreSearch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;