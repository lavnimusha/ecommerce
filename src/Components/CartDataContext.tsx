
import React, { useContext, useEffect, useState, FunctionComponent, useCallback } from 'react'
import {database} from "../firebase-config"
import { getDatabase, ref, onValue} from "firebase/database";
import {useReducer, createContext} from 'react'

  interface Product  {
    picture: string,
    title: string,
    price: string
  }
  interface ProductEntry {
    [key:string]: Product
  }
  type Props = {
    children: JSX.Element,
  };

  export const CartContext = createContext<{
    cart: ProductEntry;
    setCart: Function; //action type here
  }>({
    cart: {id:{picture:'', title:'', price:''}},
    setCart: () => null,
  }); 

const CartDataContext = ({children}: Props) =>  {

  const [cart, setCart] =  useState<ProductEntry>({})
  


  useEffect(() => {
    // Update the document title using the browser API
    const starCountRef = ref(database, 'shopping/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setCart(data)
      
    });
    
  },[])

    
  return (
     
<CartContext.Provider value={{cart, setCart}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartDataContext