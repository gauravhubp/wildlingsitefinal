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
        localStorage.setItem(
          "price",
          JSON.stringify(
            cart
              ?.map((item) => item.price * item.quantity)
              .reduce((total, value) => total + value, 0)
          )
        );
      
    }
  }, price);


  
  let submit = (e) => {
    e.preventDefault()
    axios.post('https://check-g0m99xfke-gauravhubp.vercel.app/create-checkout-session', { CART })
        .then(function (response) {
           
                window.location = response.data.redirect;
           
        })
        .catch(function(error) {
            window.location = "/"
        })
}

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
          {CART?.map((item) => item.price * item.quantity).reduce(
                (total, value) => total + value,
                0
              ) !==0 ?
            (<div class="chbtn">
                <button class="cartbtn3" onClick={submit}>
                  CheckOut
                </button>
            </div>): null}
        </div>
      )}

    </div>
  );
}
export default CartList;
