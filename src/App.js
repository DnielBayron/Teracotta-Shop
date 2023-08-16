import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/navbar/Navbar';
import {Shop} from './pages/shop/Shop';
import {Cart} from './pages/cart/Cart'; 
import { About } from './pages/about/About';
import { ShopContextProvider } from './context/shop-context';
import { AboutContextProvider } from './context/about-context';


function App() {
  return (
    <div className="App">

  <ShopContextProvider>
  <AboutContextProvider>
      <Navbar />
<Routes>

  <Route path='/' element={<Shop/>} />
  <Route path='/cart' element={<Cart/>} />
  <Route path='/about' element={<About/>} />

      
</Routes>

      
</AboutContextProvider>      
</ShopContextProvider>

    </div>
  );
}

export default App;
