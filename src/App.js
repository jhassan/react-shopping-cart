import HomePage from "./pages/index";
import Mascara from "./pages/Mascara";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="mascara" element={<Mascara />} />
          <Route path="cart" element={<Cart />} />
          <Route path="/details" element={<ProductDetail isShowCategory="false" />} />
        </Routes>
      </Provider>  
    </div>
  );
}

export default App;
