import React, { Fragment } from 'react'
import "./Cart2.css"

const Cart = ({list,removeFromCart})=>{
    return(
        <>
        <div class='cart-wrapper'>
          <div class='icon'>
            <i class="fa-solid fa-cart-shopping"></i>
            <p>{list.length}</p>
          </div>
        <div class='maincart'>
          {list.map(({image,name,oldPrice,offer},idx)=>(
            <Fragment key={idx}>

              <div>
              <div class='image'style={{backgroundImage:`url(${image})`}}></div>
              <div class='details'>
                    <h3>{name}</h3>
                  <div class='cartfooter'>
                      <div class='price'>
                       <span>
                         <sub>EGP</sub>
                         <p>{(oldPrice*(offer/100)).toFixed(2)}</p>
                        </span>
                        <span>
                          <del>{oldPrice}</del>
                          <p>{offer}% off</p>
                         </span>
                      </div>
                      <button onClick={(e)=>removeFromCart(e,idx)}>Remove</button>
                  </div>
              </div>
              </div>
              <div class='hr'></div>
              
            </Fragment>
          ))}
          </div>
          </div>
        </>
    )
}
export default Cart;
    