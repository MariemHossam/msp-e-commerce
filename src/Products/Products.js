import React from 'react'
import "./Products.css"

const Products = ({list, addToCart}) =>{
    return(
        <>
        <div class='products'>
            {list.map(({image,name,oldPrice,offer},idx)=>(       
          <div key={idx}>
              <div class='image' style={{backgroundImage:`url(${image})`}}></div>
              <div class='productdet'>
              <h3>{name}</h3>
              <span>
                  <sub>EGP</sub>
                  <p>{(oldPrice*(offer/100)).toFixed(2)}</p>
              </span>
              <span>
                  <del>{oldPrice}</del>
                  <p>{offer}% off</p>
              </span>
              <button onClick={(e)=>addToCart(e, idx)}>Add To Cart</button>
              </div>
            </div>
            ))}
           
        </div>
        </>
    )
}
export default Products;