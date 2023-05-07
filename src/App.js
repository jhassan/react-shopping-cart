import HomePage from "./pages/index";
import Mascara from "./pages/Mascara";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="mascara" element={<Mascara />} />
        <Route path="/details" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
