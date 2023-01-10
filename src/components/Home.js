import ProductsPage from "./ProductsPage";
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts, getColors, getMaterials, getFeatured } from '../redux/action/product'
import toast from "react-hot-toast"
import Header from "./Header";
import {modifiProduct} from "../utils"

const Home = () => {
  const { products } = useSelector((state) => state.product)
  const { colors } = useSelector((state) => state.color)
  const { material } = useSelector((state) => state.material)
  const { featured } = useSelector((state) => state.feature)
  const [data, setData] = useState([])
  const dispatch = useDispatch()


  const feartureValue = (data, featured) => {
    const newProductValue = featured.map((val) => {
      const featur = modifiProduct(products, colors, material)?.find((data) => data.id === val.productId);
      return { ...featur }
    })
    console.log(newProductValue, "value")
    return newProductValue
  }
  useEffect(() => {
    dispatch(getProducts())
    dispatch(getColors())
    dispatch(getMaterials())
    dispatch(getFeatured())
  },[])
 
  useEffect(() => {
 if(products.length > 0){
  setData(modifiProduct(products, colors, material))
 }
  }, [products])
  


  const handleFeatures = () => {
    const finaleData = feartureValue(data, featured)
    setData(finaleData)
  }
  const handleAllproducts = ()=>{
    const allProduct = modifiProduct(products, colors, material)
    setData(allProduct)
  }
  const filterColor = (e) => {
    console.log(e.target.value)
    const colorFilter = modifiProduct(products, colors, material)?.filter((val) => val.colorId === e.target.value)
    setData(colorFilter)
  }
  const filterMaterial = (e) =>{
    console.log(e.target.value)
    const materialFilter = modifiProduct(products, colors, material)?.filter((val) => val.materialId === e.target.value)
    setData(materialFilter)
  }


  return (
    <>
      <Header
        setData={setData}
        handleFeatures={handleFeatures}
        handleAllproducts={handleAllproducts}
      />
      <div className="container">
        <div className="sidebar">

          <h4>COLOR</h4>
          {colors.length !== 0 ? colors.map((value) => {
            return (
              <ul key={value.id}>
                <button onClick={(e) => filterColor(e)} value={value.name}>{value.name}</button>
              </ul>
            )
          }) : <span>No data</span>}

          <h4>Material</h4>
          {material.length !== 0 ? material.map((value) => {
            return (
              <ul key={value.id}>
                <button onClick={(e) => filterMaterial(e)} value={value.name}>{value.name}</button>
              </ul>
            )
          }) : <span>No data</span>}
        </div>
        <ProductsPage products={data} colors={colors} material={material} />
      </div>
    </>
  );
}
export default Home;