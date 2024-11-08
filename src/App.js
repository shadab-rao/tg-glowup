import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './components/mainComponent/Main';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route
            path="/"
            element={
              <Main/>
            }
          />
     <Route
            path="/product-details"
            element={
              <ProductDetail/>
            }
          />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
