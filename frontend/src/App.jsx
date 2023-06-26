import React, {useEffect, useReducer, useState} from "react";
import ReactDOM from "react-dom";
import ProductList from './ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import gua from './images/gua.png';
import gua2 from './images/gua2.png';
import gua3 from './images/gua3.png';
import about1 from './images/about1.jpg';
import about2 from './images/about2.jpg';
import b1 from './images/b1.png';
import b2 from './images/b2.png';
import log1 from './images/log1.jpg';
import log2 from './images/log2.jpg';
import log3 from './images/log3.jpg';
import log4 from './images/log4.jpg';
import f1 from './images/f1.png';
import f2 from './images/f2.png';
import f3 from './images/f3.png';
import pr1 from './images/pr1.jpg';
import pr2 from './images/pr2.jpg';
import pr3 from './images/pr3.jpg';
import pr4 from './images/pr4.jpg';
import buy from './images/buy.jpg';
import sale from './images/sale.jpg';
import guavid from './images/gua-vid.mp4';
import CartList from "./CartList";
import { useAuth0 } from "@auth0/auth0-react";
import { Auth0Provider } from "@auth0/auth0-react";
import { createRoot } from 'react-dom/client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./back.css"
import { Button } from "bootstrap";
import Flag from "./Flag";

function clickflag()
{
  ReactDOM.render(
    <Auth0Provider><Flag/></Auth0Provider>,
    document.getElementById("root")
  );
}

function App() {
 
  const { loginWithRedirect,isAuthenticated,logout } = useAuth0();

  const [product,setProduct] = useState([
  {id: 0,
  image: pr1,
  title: "Express Tonic",
  content: "Itaque earum rerum hic tenetur a sapiente delectus.the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly.",
  price: 285}
  ,
  {id: 1,
      image: pr2,
      title: "Higher self oil",
      content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly.",
      price: 399
  },
  {id: 2,
      image: pr3,
      title: "Rejuvenate serum",
      content: "Itaque earum rerum hic tenetur a sapiente delectus.the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly.",
      price: 699
  },
      {id: 3,
          image: pr4,
          title: "Natural glow ",
          content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly.",
          price: 589
      }     
  ])

  const getdata = () => {
    let newCartData = localStorage.getItem("gauravcart");
    
      if(newCartData===[] || newCartData===undefined || newCartData===null)
      {return [];}
      else 
      {return JSON.parse(newCartData);} 
  }
  const [cart,setCart] = useState(getdata()? getdata() : []);
  
   useEffect(() => {
   { 
    localStorage.setItem("gauravcart",JSON.stringify(cart))};
   },[cart]);


  const addToCart = (data) => {
   toast("Item added");
   console.log(cart);
     let exist = cart?.find(
      (c) => c.id===data.id
     )
     if(!exist)
    setCart([...cart,{...data,quantity: 1}]);
  }

  function clickcart()
  {
    console.log("clicked");
    ReactDOM.render(
      <Auth0Provider><CartList cart={cart}/></Auth0Provider>,
      document.getElementById("root")
    );
  }


  return (
      <div className="Home-app">   
        
       <div class="top">
        <div class="stick" id="sticky">

        {!isAuthenticated ? (<button class="Nav-right btn btn-light"  onClick={() => loginWithRedirect()}><i class="fa-solid fa-user "></i> Sign in</button>) :
        (<button class="Nav-right btn btn-light" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><i class="fa-solid fa-user "></i> Logout</button>)
        }
      <button class="Nav-right btn btn-light" onClick={clickflag}><i class="fa-solid fa-heart"></i> Flagship</button>
      <button class="Nav-right btn btn-light" onClick={() => ReactDOM.render(
      <Auth0Provider><CartList cart={cart}></CartList></Auth0Provider>,
  document.getElementById("root")
)}><i class="fa fa-shopping-cart" aria-hidden="true"></i> Cart <span style={{marginBottom: '9px'}}></span></button>
     
     </div>
     </div>

     <nav class="navbar navbar-expand-lg" id="top">
    <div class="container-fluid">
      <a class="navbar-brand">WILDLING</a>

      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#About-us">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#pr">Products</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#pills-tab">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Buy-now">Buy</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Reviews">Reviews</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Contact">Contact Us</a>
          </li>
        </ul>

      </div>
    </div>
  </nav>

    
       
       
<h1 class="main-heading">Protecting the Beauty !</h1>



<div class="row">
    <div class="ourproduct-l col-lg-6 col-md-12">
      <p class="a-l">It improves circulation and improves lymphatic function,resulting in a naturally dewy and glowing complexion.</p>
      <p class="a-l">Gua sha is also used to prevent and clear acne, decongesting the skin and lessening inflamation.</p>
      <br />

        <h4 class="op">Our Products</h4>
     
    <div class="button-center">
      <a href="https://en.wikipedia.org/wiki/Gua_sha"><button class="search-btn-view btn btn-outline-purple" type="submit"><ul class="design"><span>View Detail </span></ul></button></a>
    </div>

      <div class="sale">
        <p class="sale-t">Wildling</p>
        <p class="sale-t">Sale is Live now</p>
      </div>

    </div>
    <div class="beauty col-lg-6 col-md-12">


          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" data-interval="50">
           <div class="carousel-inner">
             <div class="carousel-item active">
             <img class="beaut" src={gua} alt="gua-mockup" />
             </div>
             <div class="carousel-item">
             <img class="beaut" src={gua2} alt="gua-mockup" />
             </div>
             <div class="carousel-item">
             <img class="beaut" src={gua3} alt="gua-mockup" />
             </div>
           </div>
           <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
             <span class="visually-hidden">Previous</span>
           </button>
           <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
             <span class="carousel-control-next-icon" aria-hidden="true"></span>
             <span class="visually-hidden">Next</span>
           </button>
          </div>

    </div>

</div>


<h2 class="sub-head">About Us</h2>
<div class="aboutus-section row" id="About-us">
  <div class="aboutus-div col-lg-6">

    <p class="aboutusp">It improves circulation and improves lymphatic function,resulting in a naturally dewy and glowing complexion.</p>
    <img class="aboutus-img" src={about1} alt=""/>
  </div>
  <div class="aboutus-div2 col-lg-6">
<img class="aboutus-img" src={about2} alt=""/>
<p class="aboutusp">Gua sha has been proven to help relieve tension in the face, reduce puffiness and inflammation.However,since the musculature of the face is much thinner, you’ll want to avoid applying too much pressure as you’re working on this area.</p>

  </div>
</div>






<div class="logo-section row">
    <div class="logo col-lg-3 col-md-6 col-sm-6">
      <img class="logo-img" src={log1} alt=""/>
    </div>
    <div class="logo col-lg-3 col-md-6 col-sm-6">
      <img class="logo-img" src={log2} alt=""/>
    </div>
    <div class="logo col-lg-3 col-md-6 col-sm-6">
      <img class="logo-img" src={log3} alt=""/>
    </div>
    <div class="logo col-lg-3 col-md-6 col-sm-6">
      <img class="logo-img" src={log4} alt=""/>
    </div>
</div>

<div id="pr"><ProductList product={product} addToCart={addToCart}></ProductList></div>





<div class="js-pill" id="pills-tab" role="tablist">


    <button class="nav-link-js btn active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Reasons to love</button>

    <button class="nav-link-js btn" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Goodness inside</button>


    <button class="nav-link-js btn" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">How to use</button>

</div>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

       <div class="row">
         <div class="tab-c col">
           <p>A gua sha stone is an ancient traditional Chinese treatment, where the skin is scraped intentionally and gently to promote blood circulation and natural drainage of the lymph nodes. This scraping anti-aging massage tool works to improve skin tone, texture, and remove wrinkles. It is the best de-puffer tool for releasing muscle strain and removing toxins. It will instantly result in firm, vibrant, tighter, and naturally glowing skin. A gua sha massage can be used all over the face and neck. The best beauty tool for self-care!</p>
           <p>Material: Pure and natural rose quartz crystal</p>
           <ul><p><em>Reasons to ♥</em></p>
             <li>A natural massaging and scraping tool that promotes skin rejuvenation</li>
             <li>Reduces the appearance of puffiness and wrinkles</li>
             <li>Helps improve circulation and vitality, helping to freshen your complexion</li>
             <li>After cleansing and toning, smooth a few drops of facial oil or apply serum into skin. It glides across the skin with ease, while helping the skin care product to absorb better, increasing its benefit</li>
           </ul>
         </div>

         <div class="tab-c col">
            <span>
              <img class="b" src={b1} alt="" />
              <h6>Improves circulation and soothes skin</h6>
            </span>

            <span>
              <img class="b" src={b2} alt="" />
              <h6>Promotes skin clearity</h6>
            </span>
         </div>
       </div>

  </div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">

       <div class="beauty-panel">
         <p class="tabfadestatement">Beauty inspired by Science,nature & you</p>
       </div>

  </div>
  <div class="last-content tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
    <ul>
      <li>Use the heart shaped end to make sweeping motions across the jawline.</li>
      <li>Start at the chin and move the tool upwards towards the ear.</li>
      <li>Drag the tool upwards, following the contours of the cheekbones.</li>
      <li>Use the longest curve to massage the under-eye area.</li>
      <li>Pull upwards from above the eyebrows towards the top of the forehead</li>
      <li>Repeat on the other side.</li>
    </ul>

  </div>
</div>



<div class="video-div">
  <video id="myVideo" class="video" controls autoPlay>
    <source src={guavid} type="video/mp4" />
    Your browser does not support HTML5 video.
  </video>
</div>





<div class="buymain row" id="Buy-now">
  <div class="buy-now1 col">
     <img src={buy} alt="" />
  </div>
  <div class="buy-now2 col">
    <h2 class="h2s">We provide you the best taste</h2>
    <p class="ps">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi</p>
    <button class="btn btn-lg btn-black btn-outline-dark" onClick={clickcart} type="button">Buy Now</button>
  </div>
</div>


<h2 class="sub-head2">What our customers are saying</h2>
<div class="row people" id="Reviews">

  <div class="peeps col-lg-3 col-md-5 col-sm-12">
     <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p>
    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how</p>
     <div class="people">
       <img src={f1} alt="" />
       <span>Albert oran</span>
     </div>
  </div>
  <div class="peeps col-lg-3 col-md-5 col-sm-12">
     <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p>
    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how</p>
     <div class="people">
       <img src={f2} alt="" />
       <span>Gorilla</span>
     </div>
  </div>
  <div class="peeps col-lg-3 col-md-5 col-sm-12">
     <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p>
    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how</p>
     <div class="people">
       <img src={f3} alt="" />
       <span>Barack Obama</span>
     </div>
  </div>
</div>



<div class="row" id="Contact">
  <div class="copyright-left col">
    <h5>WILDLING</h5>
    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure i</p>

  </div>

  <div class="copyright-right col">
      <div class="container">
           <h6>About Us</h6>
           <p>Who are you?</p>
           <p>Contact us</p>
           <button class="btn btn-light" onClick={(e) => {window.location.href ='mailto:gauravpatel5436@gmail.com';}} type="button">Email Me</button>
      </div>

  </div>

</div>

<a class="backtotop" href="#top">
  <div class="back" href="#">
  <span class="back-text">Back to top</span>
</div>
</a>


<footer id="footer">
  <div class="foot">
    <p>© Copyright Wildling<span class="Gaurav">Gaurav Patel</span></p>
    
  </div>
  </footer>
  <ToastContainer autoClose={500}/>
    <script src="index1.js" charset="utf-8"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js" integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-kjU+l4N0Yf4ZOJErLsIcvOU2qSb74wXpOhqTvwVx3OElZRweTnQ6d31fXEoRD1Jy" crossorigin="anonymous"></script>

  </div>

     );}

    export default App;
