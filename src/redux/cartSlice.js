import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: []
  },
  reducers: {
    addProductsToCart: (state, action) => {
      const { name, price, image, quantity } = action.payload;

      const existingProduct = state.products.find(
        (product) => product.name === name
      );

      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        state.products.push({
          name,
          price,
          image,
          quantity,
        });
      }
    },
    incrementProduct: (state, action) => {
      const { name } = action.payload;
      const existingProduct = state.products.find(
        (product) => product.name === name
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      }
    },
    decrementProduct: (state, action) => {
      const { name } = action.payload;

      const existingProduct = state.products.find(
        (product) => product.name === name
      )

      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
        } else {
          state.products = state.products.filter(
            (product) => product.name !== name
          );
        }
      }
    },
  }
})

export const { addProductsToCart, incrementProduct, decrementProduct } = cartSlice.actions

export default cartSlice.reducer