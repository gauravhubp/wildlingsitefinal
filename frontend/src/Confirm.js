
import displayRazorpay from "./utils/PaymentGateway";
import { useAuth0 } from "@auth0/auth0-react";


function Confirm({cart}){
    const { loginWithRedirect,isAuthenticated} = useAuth0();

    return (
        <div>
             <h1>Confirm Order</h1>
             { isAuthenticated ? (
        <button class="cartbtn3" onClick={displayRazorpay}>Confirm and pay</button>) : <button onClick={() => loginWithRedirect()}>Login</button>}
        </div>  
)
}

export default Confirm;