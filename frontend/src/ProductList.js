
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductList({product,addToCart})
{
    return (
        <div className="flex"> 
           {
            product.map( (productItem,productIndex) =>{
               return (
                 <div class="card1" style={{ width: '19rem' ,padding: '10px'}}>
                  <img src={productItem.image} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{productItem.title} </h5>
                    <p class="card-text"> {productItem.content}</p>
                  </div>
                    <h3><span class="p-v">100%</span><span class="p-v">1M+</span><span class="p-v">95%</span></h3>
                   <div class="card-body">
                   <p class="product-btn btn btn-lg">Rs. {productItem.price}</p>
                   <button class="product-btn btn btn-lg btn-purple btn-dark" type="button" onClick={()=> addToCart(productItem)}>Add to cart</button>
                  </div>
                </div>
               )
            })
           }
        </div>
    )
}

export default ProductList;
