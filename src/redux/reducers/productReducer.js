import { createReducer } from "@reduxjs/toolkit";


export const productReducer = createReducer(
    { products: [] },
    {
        getProductsRequest: (state) => {
            state.loading = true;
        },
        getProductsSuccess: (state, action) => {
            state.loading = false;
            state.products = action.payload;

        },
        getProductsFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

    })
export const colorReducer = createReducer(
    { colors: [] },
    {
        getColorsRequest: (state) => {
            state.loading = true;
        },
        getColorsSuccess: (state, action) => {
            state.loading = false;
            state.colors = action.payload;

        },
        getColorsFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

    })
export const materialReducer = createReducer(
    { material: [] },
    {
        getMaterialsRequest: (state) => {
            state.loading = true;
        },
        getMaterialsSuccess: (state, action) => {
            state.loading = false;
            state.material = action.payload;

        },
        getMaterialsFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

    })

export const fearturReducer = createReducer(
    { featured: [] },
    {
        getFeartursRequest: (state) => {
            state.loading = true;
        },
        getFeartursSuccess: (state, action) => {
            state.loading = false;
            state.featured = action.payload;

        },
        getFeartursFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

    })
export const allProductReducer = createReducer(
    { allProduct: [] },
    {
        getAllProductsRequest: (state) => {
            state.loading = true;
        },
        getAllProductsSuccess: (state, action) => {
            console.log('action.payload :>> ', action.payload);
            state.loading = false;
            state.allProduct = action.payload;

        },
        getAllProductsFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

    })



