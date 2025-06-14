import React from 'react';

const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "SET_API_DATA":
      const featureProducts = action.payload.products.filter(
        (product) => product.rating >= 4.5
      );
      return {
        ...state,
        isLoading: false,
        products: action.payload.products,
        featureProducts: featureProducts,
      };
    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default ProductReducer;