import React, {useState, Dispatch} from 'react';
import './App.css';
import LayOut from './Components/LayOut';
import {
  Routes,
  Route,
} from "react-router-dom";
import LandingPage from './Pages/LandingPage';
import Register from './Pages/Register';
import Products from './Pages/Products';
import ViewProduct from './Pages/ViewProduct';
import Cart from './Pages/Cart'
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import Success from './Pages/Success';
import CartDataContext from './Components/CartDataContext'


/* export const CartContext = createContext<{
  cartCount: number;
  setCartCount: Function; //action type here
}>({
  cartCount: 0,
  setCartCount: () => null,
}); */

 
function App() {
 
 /*  const [cartCount, setCartCount] = useState(0) */
   {/* <CartContext.Provider value={{cartCount,setCartCount}}> */ /*  </CartContext.Provider> */}
 
    return (  
    <CartDataContext>
        <LayOut>
        <Routes>
            <Route path='/' element={<LandingPage />}/>
            <Route path='/allProducts' element={<Products category={'men'} />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/viewproduct' element={<ViewProduct />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/signup' element={<SignUp />}/>
            <Route path='/signin' element={<SignIn />}/>
            <Route path='/success' element={<Success />}/>
        </Routes> 
        </LayOut>
    </CartDataContext> 
  );
}

export default App;
