import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  clearCart,
} from "../redux/CartSlice";
import "./CartItem.css";

const CartItem = () => {
  const dispatch = useDispatch();

  const { cartItems, totalItems, totalAmount } = useSelector(
    (state) => state.cart
  );

  return (
    <div className="cart-container">

      <div className="cart-header">
        <h1>🛒 Shopping Cart</h1>
        <p>
          Review the plants you have selected before placing your order.
        </p>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
            alt="Empty Cart"
            width="180"
          />

          <h2>Your Cart is Empty</h2>

          <p>
            It looks like you haven't added any plants yet.
            Browse our collection and add your favorite plants to begin
            shopping.
          </p>
        </div>
      ) : (
        <>
          <div className="cart-list">

            {cartItems.map((item) => (

              <div className="cart-card" key={item.id}>

                <img
                  src={item.image}
                  alt={item.name}
                  className="product-image"
                />

                <div className="product-details">

                  <h2>{item.name}</h2>

                  <p>
                    <strong>Category:</strong> {item.category}
                  </p>

                  <p>
                    {item.description}
                  </p>

                  <h3>₹ {item.price}</h3>

                </div>

                <div className="quantity-section">

                  <button
                    className="qty-btn"
                    onClick={() =>
                      dispatch(decreaseQuantity(item.id))
                    }
                  >
                    −
                  </button>

                  <span className="quantity">
                    {item.quantity}
                  </span>

                  <button
                    className="qty-btn"
                    onClick={() =>
                      dispatch(increaseQuantity(item.id))
                    }
                  >
                    +
                  </button>

                </div>

                <div className="subtotal">

                  <h3>
                    ₹ {item.price * item.quantity}
                  </h3>

                  <button
                    className="remove-btn"
                    onClick={() =>
                      dispatch(removeItem(item.id))
                    }
                  >
                    Remove
                  </button>

                </div>

              </div>

            ))}

          </div>

          <div className="cart-summary">

            <h2>Order Summary</h2>

            <hr />

            <div className="summary-row">
              <span>Total Items</span>
              <span>{totalItems}</span>
            </div>

            <div className="summary-row">
              <span>Total Amount</span>
              <span>₹ {totalAmount}</span>
            </div>

            <div className="summary-row">
              <span>Delivery Charges</span>
              <span>FREE</span>
            </div>

            <div className="summary-row">
              <span>GST</span>
              <span>Included</span>
            </div>

            <hr />

            <h2>
              Grand Total : ₹ {totalAmount}
            </h2>

            <button
              className="checkout-btn"
              onClick={() =>
                alert("Order placed successfully!")
              }
            >
              Proceed to Checkout
            </button>

            <button
              className="clear-btn"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>

          </div>
        </>
      )}

      <footer className="cart-footer">

        <p>
          Paradise Nursery © 2026 | Bringing Nature Closer to Your Home
        </p>

      </footer>

    </div>
  );
};

export default CartItem;
