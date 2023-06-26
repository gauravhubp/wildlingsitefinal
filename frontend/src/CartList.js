import React, { useEffect, useState, useCallback } from "react";
import App from "./App";
import ReactDOM from "react-dom";
import { useAuth0 } from "@auth0/auth0-react";
import displayRazorpay from "./utils/PaymentGateway";
import { Auth0Provider } from "@auth0/auth0-react";
import axios from "axios";
import Confirm from "./Confirm";
import cimg from "./cart-img.png";
import "./carts.css"

function CartList({ cart }) {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const [CART, setCART] = useState([]);

  useEffect(() => {
      setCART(cart);
  }, [cart]);

  useEffect(() => {
    {
        localStorage.setItem("gauravcart", JSON.stringify(CART));
      
    }
  }, [CART]);
  (console.log(cart));
  const price = useState(0);

  useEffect(() => {
    {
      if (cart) {
        localStorage.setItem(
          "price",
          JSON.stringify(
            cart
              ?.map((item) => item.price * item.quantity)
              .reduce((total, value) => total + value, 0)
          )
        );
      }
    }
  }, price);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };
  const [c, setc] = useState(false);
  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  });

  let submit = async (e) => {
    e.preventDefault();
    try {
      setc(true);
      console.log(c);
      await axios.post("http://localhost:1337/", { cart });
    } catch (e) {
      console.log(e);
    }
  };
  console.log(cart);

  return (
    <div>
      <button
        class="Nav-left btn btn-light"
        onClick={() =>
          ReactDOM.render(
            <Auth0Provider>
              <App />
            </Auth0Provider>,
            document.getElementById("root")
          )
        }
      >
        Home
      </button>
      <div>
        <h2 class="cart-head">MY CART</h2>
      </div>
      {CART?.map((cartItem, cartindex) => {
        return (
          <div class="row cart-div">
            <div class="col-lg-6">
            <img src={cartItem.image} />
            </div>
            <div class="col-lg-6 cartdivcol2">
            <div class="cartpn">{cartItem.title}</div>
              <div class="qtydiv">
            <button class="cartbtn" 
              onClick={() => {
                const _CART = CART?.map((item, index) => {
                  return cartindex === index
                    ? {
                        ...item,
                        quantity: item.quantity > 1 ? item.quantity - 1 : 1,
                      }
                    : item;
                });
                setCART(_CART);
              }}
            >
              -
            </button>
            <span>{cartItem.quantity}</span>
            <button class="cartbtn"
              onClick={() => {
                const _CART = CART?.map((item, index) => {
                  return cartindex === index
                    ? { ...item, quantity: item.quantity + 1 }
                    : item;
                });
                setCART(_CART);
              }}
            >
              +
            </button>
            </div>
            <p class="cartprice">Rs. {cartItem.price * cartItem.quantity}</p>
            <button class="cartbtn2"
              onClick={() => {
                const newList = CART?.filter((item) => item.id !== cartItem.id);
                setCART(newList);
              }}
            >
             Remove 
            </button>
            </div>
          </div>
        );
      })}
      {cart===null || cart===[] || cart.length===0 ? (
        <div class="center-emp">
          <h1 class="ecart">
            Your Cart is Empty, Add something to make me happy
          </h1>
          <img src={cimg} class="e-img" alt="..." />
        </div>
      ) : (
        <div class="checkpay">
          <p>
            {" "}
            Total Rs.{" "}
            <span>
              {" "}
              {CART?.map((item) => item.price * item.quantity).reduce(
                (total, value) => total + value,
                0
              )}{" "}
            </span>
          </p>
          {!c ? (
            <div>
              <form action="POST">
                <button class="cartbtn3" id="ask-button" onClick={submit}>
                  CheckOut
                </button>
              </form>
            </div>
          ) : (
            <Confirm />
          )}
        </div>
      )}

    </div>
  );
}
export default CartList;
