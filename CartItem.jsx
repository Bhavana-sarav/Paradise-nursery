import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  removeItem,
  updateQuantity,
} from "../redux/CartSlice";
import "./CartItem.css";

const CartItem = () => {
  const dispatch = useDispatch();

  const {
    cartItems,
    totalQuantity,
    totalAmount,
  } = useSelector((state) => state.cart);

  const increaseQuantity = (item) => {
    dispatch(addItem(item));
  };

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    } else {
      dispatch(removeItem(item.id));
    }
  };

  const deleteItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="cart-container">

      <header className="cart-header">
        <h1>🛒 Shopping Cart</h1>

        <p>
          Review your selected plants before placing your order.
        </p>
      </header>

      {cartItems.length === 0 ? (

        <div className="empty-cart">

          <h2>Your Cart is Empty</h2>

          <p>
            Browse our collection and add your favorite plants to begin shopping.
          </p>

          <button
            className="continue-btn"
            onClick={() => window.history.back()}
          >
            Continue Shopping
          </button>

        </div>

      ) : (

        <>
          <div className="cart-summary">

            <div className="summary-card">
              <h3>Total Items</h3>
              <p>{totalQuantity}</p>
            </div>

            <div className="summary-card">
              <h3>Total Amount</h3>
              <p>₹ {totalAmount.toFixed(2)}</p>
            </div>

          </div>

          <div className="cart-list">

            {cartItems.map((item) => (

              <div
                className="cart-card"
                key={item.id}
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="plant-image"
                />

                <div className="plant-details">

                  <h2>{item.name}</h2>

                  <p>{item.description}</p>

                  <h3>
                    Category: {item.category}
                  </h3>

                  <h3>
                    Price: ₹ {item.price}
                  </h3>

                  <h3>
                    Quantity: {item.quantity}
                  </h3>

                  <h3>
                    Subtotal: ₹{" "}
                    {(item.price * item.quantity).toFixed(2)}
                  </h3>

                </div>

                <div className="cart-actions">

                  <button
                    className="quantity-btn"
                    onClick={() =>
                      decreaseQuantity(item)
                    }
                  >
                    -
                  </button>

                  <span className="quantity">
                    {item.quantity}
                  </span>

                  <button
                    className="quantity-btn"
                    onClick={() =>
                      increaseQuantity(item)
                    }
                  >
                    +
                  </button>

                  <button
                    className="remove-btn"
                    onClick={() =>
                      deleteItem(item.id)
                    }
                  >
                    Remove Item
                  </button>

                </div>

              </div>

            ))}

          </div>

          <div className="checkout-section">

            <h2>
              Grand Total : ₹ {totalAmount.toFixed(2)}
            </h2>

            <div className="checkout-buttons">

              <button
                className="continue-btn"
                onClick={() => window.history.back()}
              >
                Continue Shopping
              </button>

              <button
                className="checkout-btn"
                onClick={() =>
                  alert(
                    "Thank you for shopping with Paradise Nursery!"
                  )
                }
              >
                Proceed to Checkout
              </button>

            </div>

          </div>
        </>
      )}

      <footer className="cart-footer">

        <p>
          Paradise Nursery © 2026 | Growing Happiness One Plant at a Time
        </p>

      </footer>
    </div>
  );
};

export default CartItem;
