
import './MainApp.css';
import Products from '../Products/Products';
import Cart from '../Cart2/Cart2'
// import images
import msp from "../images/msp.svg";
import image1 from "../images/gloves.jpg";
import image2 from "../images/camera.jpg";
import image3 from "../images/t-shirts.jpg";
import image4 from "../images/pants.jpg";
import image5 from "../images/dress.jpg";
import image6 from "../images/shoes.jpg";
import image7 from "../images/bag.jpg";
import image8 from "../images/hat.jpg";
import image9 from "../images/sunglasses.jpg";
import image10 from "../images/lamp.jpg";
import image11 from "../images/towel.jpg";
import image12 from "../images/chairs.jpg";
import image13 from "../images/cushion.jpg";
import image14 from "../images/coffeeCups.jpg";
import image15 from "../images/curtain.jpg";
import { useState } from 'react';

function App() {

  const [products , setProducts] = useState([
    { image: image3, name: "T-Shirts", oldPrice: 1000, offer: 30 },
    { image: image10, name: "Lamp", oldPrice: 850, offer: 46 },
    { image: image6, name: "Shoes", oldPrice: 600, offer: 13 },
    { image: image2, name: "Camera", oldPrice: 650, offer: 40 },
    { image: image7, name: "Bag", oldPrice: 300, offer: 5 },
    { image: image12, name: "Chairs", oldPrice: 1000, offer: 33 },
    { image: image15, name: "Curtain", oldPrice: 390, offer: 43 },
    { image: image8, name: "Hat", oldPrice: 70, offer: 7 },
    { image: image5, name: "Dress", oldPrice: 680, offer: 44 },
    { image: image9, name: "Sunglasses", oldPrice: 920, offer: 14 },
    { image: image1, name: "Gloves", oldPrice: 100, offer: 10 },
    { image: image11, name: "Towel", oldPrice: 400, offer: 30 },
    { image: image13, name: "Cushion", oldPrice: 550, offer: 26 },
    { image: image4, name: "Pants", oldPrice: 850, offer: 18 },
    { image: image14, name: "CoffeeCups", oldPrice: 140, offer: 28 },
  ])
  const [cart , setCart] = useState([])
  const [totalPrice , setTotalPrice] = useState(0)

  const addToCart =(e,indexToAdd) => {
     //update cart
     setCart([...cart, products[indexToAdd]])

     //update total price
     const {oldPrice,offer} = products[indexToAdd]
     setTotalPrice(totalPrice + oldPrice*(offer/100).toFixed(2))

     //update products
     setProducts(products.filter((product,idx)=>idx !== indexToAdd))
  }

  const removeFromCart =(e,indexToRemove) => {
    //update cart
    setProducts([cart[indexToRemove], ...products])

    //update total price
    const {oldPrice,offer} = cart[indexToRemove]
    setTotalPrice(totalPrice - (oldPrice*(offer/100)))

    //update products
    setCart(cart.filter((product,idx)=>idx !== indexToRemove))
 }


  return (
    <div class='mainhome'>
      <div className="header">
        <div class="wrapper">
        <div>
        <img src={msp} className="msp" alt="logo" />
        </div>
        <h1>MSP E-COMMERCE</h1>
        </div>
      </div>
      <section>
      <div class='wrapper2'>
         <p class='p1'>{products.length}</p>
         <div><h3 class='p2'>TOP HOME PICkS</h3></div>
      </div>
      <div> 
          <Products list={products} addToCart={addToCart}/>
      </div>
      </section>
      <section>
        <div>
           <Cart list={cart} removeFromCart={removeFromCart} />
        </div>
        <div class='cart'>
          <h3>total price: </h3>
          <span>
          <sub>EGP</sub>
          <p>{totalPrice}</p>
          </span>
        </div>
        
      </section>
    </div>
  );
}

export default App;
