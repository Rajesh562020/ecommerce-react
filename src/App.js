import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import { Routes, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>

  );
}

export default App;





















// import React from 'react';
// import Home from './pages/Home/Home.js';
// // import Cart from './pages/Cart/Cart.js';
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import AppRoute from './AppRoute.js';
// import './App.css';

// function App() {
//   return (
   
//      <BrowserRouter>
//         <Home/>
//         <AppRoute/>
//     </BrowserRouter>
   
   
//   );
// }

// export default App;
