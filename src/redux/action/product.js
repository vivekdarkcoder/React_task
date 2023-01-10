import axios from "axios";
import { server } from "../store"
import {modifiProduct} from "../../utils"

const token = 'Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo'

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: "getProductsRequest" });
    const headers = { Authorization: `Bearer ${token}` };
    const { data } = await axios.get(`${server}/products`, {headers})

    dispatch({ type: "getProductsSuccess", payload: data.products});
  } catch (error) {
    dispatch({ type: "getProductsFail", payload: error.response.message });
  }
};
export const getColors = () => async (dispatch) => {
  try {
    dispatch({ type: "getColorsRequest" });
    const headers = { Authorization: `Bearer ${token}` };
    const { data } = await axios.get(`${server}/colors`, {headers})

    dispatch({ type: "getColorsSuccess", payload: data.colors});
  } catch (error) {
    dispatch({ type: "getColorsFail", payload: error.response.message });
  }
};
export const getMaterials = () => async (dispatch) => {
  try {
    dispatch({ type: "getMaterialsRequest" });
    const headers = { Authorization: `Bearer ${token}` };
    const { data } = await axios.get(`${server}/material`, {headers})

    dispatch({ type: "getMaterialsSuccess", payload: data.material});
  } catch (error) {
    dispatch({ type: "getMaterialsFail", payload: error.response.message });
  }
}

export const getFeatured = () => async (dispatch) => {
  try {
    dispatch({ type: "getFeartursRequest" });
    const headers = { Authorization: `Bearer ${token}` };
    const { data } = await axios.get(`${server}/featured`, {headers})

    dispatch({ type: "getFeartursSuccess", payload: data.featured});
  } catch (error) {
    dispatch({ type: "getFeartursFail", payload: error.response.message });
  }
}
export const getAllProducts = (products, colors, material) => async (dispatch) => {
  
  try {
    dispatch({ type: "getAllProductsRequest" });
    dispatch({ type: "getAllProductsSuccess", payload:modifiProduct(products, colors, material)});
  } catch (error) {
    dispatch({ type: "getAllProductsFail", payload: error.response.message });
  }
}
