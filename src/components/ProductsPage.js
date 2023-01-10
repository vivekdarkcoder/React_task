import React, { useEffect } from 'react'
import { useDispatch} from 'react-redux'
import {modifiProduct} from "../utils"

const ProductsPage = ({products, colors, material}) => {

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch({ type: "cartItemsIncrement" });
  }

  return (
    <div className="items">
      {
        products?.map((val) => {
          return (
            <div className="item" key={val.id}>
              <div className="img-container">
                <span id='hover'><button onClick={handleClick}>Add to cart</button></span>
                <img src={val.image} alt="img" />
              </div>
              <div className="item-data">
                <div id="name">{val.name}</div>
                <div id="color"> {val.colorId} <span>{val.materialId}</span> </div>
                <div id="price"> inr {val.price} </div>
              </div>
            </div>
          )

        })
      }
    </div>

  )
}

export default ProductsPage