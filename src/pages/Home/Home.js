import React from 'react'
import axios from 'axios';
import './Home.css';
import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar.jsx';
import ProductCard from '../../components/ProductCard/ProductCard.jsx';
import { useCart } from '../../context/cart-context';
const Home = () => {

    const {cart} = useCart();
    console.log(cart);

    const [products,setProducts] = useState([]);
    useEffect(()=>{
        //IIFE
        (async() => {
            try{
                const {data:{books}} = await axios.get("data.json");
                //console.log(books);
                setProducts(books);

            }catch(error){
                console.log(error);

            }
        })()

    },[]);
  console.log(products);
  return (
   <>
   <Navbar/>
   <main className='main d-flex gap wrap'>
   {
    products.map(product => <ProductCard key={product.id} product={product}/>)
   }
   </main>
   </> 
  )
}

export default Home;