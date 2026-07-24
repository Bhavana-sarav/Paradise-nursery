import { createSlice } from "@reduxjs/toolkit";

/*
==========================================================
 Paradise Nursery - CartSlice.jsx

 Description:
 Redux Toolkit slice responsible for managing the
 shopping cart state.

 Features:
 • Add new products
 • Remove products
 • Increase quantity
 • Decrease quantity
 • Update quantity directly
 • Calculate total items
 • Calculate total amount
 • Clear entire cart
==========================================================
*/

const initialState = {
  cartItems: [],
  totalItems: 0,
  totalAmount: 0,
};

const calculateTotals = (state) => {
  state.totalItems = state.cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  state.totalAmount = state.cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    /*
    ==================================================
    ADD ITEM
    Adds a new product or increases quantity if
    product already exists.
    ==================================================
    */

    addItem: (state, action) => {
      const product = action.payload;

      const existingItem = state.cartItems.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          category: product.category,
          quantity: 1,
        });
      }

      calculateTotals(state);
    },

    /*
    ==================================================
    REMOVE ITEM
    Completely removes a product from the cart.
    ==================================================
    */

    removeItem: (state, action) => {
      const productId = action.payload;

      state.cartItems = state.cartItems.filter(
        (item) => item.id !== productId
      );

      calculateTotals(state);
    },

    /*
    ==================================================
    UPDATE QUANTITY

    Accepts:
    {
      id: 1,
      quantity: 4
    }

    ==================================================
    */

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      const item = state.cartItems.find(
        (product) => product.id === id
      );

      if (item) {
        if (quantity <= 0) {
          state.cartItems = state.cartItems.filter(
            (product) => product.id !== id
          );
        } else {
          item.quantity = quantity;
        }
      }

      calculateTotals(state);
    },

    /*
    ==================================================
    INCREASE QUANTITY
    ==================================================
    */

    increaseQuantity: (state, action) => {
      const id = action.payload;

      const item = state.cartItems.find(
        (product) => product.id === id
      );

      if (item) {
        item.quantity += 1;
      }

      calculateTotals(state);
    },

    /*
    ==================================================
    DECREASE QUANTITY
    ==================================================
    */

    decreaseQuantity: (state, action) => {
      const id = action.payload;

      const item = state.cartItems.find(
        (product) => product.id === id
      );

      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.cartItems = state.cartItems.filter(
            (product) => product.id !== id
          );
        }
      }

      calculateTotals(state);
    },

    /*
    ==================================================
    CLEAR CART
    ==================================================
    */

    clearCart: (state) => {
      state.cartItems = [];
      state.totalItems = 0;
      state.totalAmount = 0;
    },
  },
});

/*
==================================================
Export Reducer Functions
==================================================
*/

export const {
  addItem,
  removeItem,
  updateQuantity,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

/*
==================================================
Export Cart Reducer
==================================================
*/

export default cartSlice.reducer;
