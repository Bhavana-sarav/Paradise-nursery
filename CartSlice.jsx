import { createSlice } from "@reduxjs/toolkit";

/*
=========================================================
 Paradise Nursery Shopping Cart Slice
---------------------------------------------------------
 This Redux slice manages all shopping cart operations.
 Features:
 - Add items to cart
 - Remove items from cart
 - Update item quantity
 - Calculate total quantity
 - Calculate total amount
=========================================================
*/

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const calculateTotals = (state) => {
  let quantity = 0;
  let amount = 0;

  state.cartItems.forEach((item) => {
    quantity += item.quantity;
    amount += item.quantity * item.price;
  });

  state.totalQuantity = quantity;
  state.totalAmount = Number(amount.toFixed(2));
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {

    /*
    =========================================================
    ADD ITEM
    ---------------------------------------------------------
    Checks whether the product already exists.
    If yes, increases quantity.
    Otherwise inserts a new product.
    =========================================================
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
          description: product.description,
          quantity: 1,
        });
      }

      calculateTotals(state);
    },

    /*
    =========================================================
    REMOVE ITEM
    ---------------------------------------------------------
    Removes the selected product completely from cart.
    =========================================================
    */
    removeItem: (state, action) => {

      const productId = action.payload;

      state.cartItems = state.cartItems.filter(
        (item) => item.id !== productId
      );

      calculateTotals(state);
    },

    /*
    =========================================================
    UPDATE QUANTITY
    ---------------------------------------------------------
    Updates the quantity based on user action.
    Prevents quantity from becoming less than 1.
    =========================================================
    */
    updateQuantity: (state, action) => {

      const { id, quantity } = action.payload;

      const existingItem = state.cartItems.find(
        (item) => item.id === id
      );

      if (existingItem) {

        if (quantity > 0) {
          existingItem.quantity = quantity;
        } else {
          existingItem.quantity = 1;
        }

      }

      calculateTotals(state);
    },

  },
});

export const {
  addItem,
  removeItem,
  updateQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
