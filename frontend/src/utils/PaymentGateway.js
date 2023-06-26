

const getdata = () => {
  let newCartData = localStorage.getItem("gauravcart");
    if(newCartData===[])
    {return [];}
    else 
    {return JSON.parse(newCartData);} 

}
const getprice = () => {
  let price= localStorage.getItem("price");
  return JSON.parse(price);
}



export default async function displayRazorpay() {
  const data = await fetch("http://localhost:1337/razorpay", {
    method: "POST",
  }).then((t) => t.json());

  const cart =getdata();
  const price =getprice();
  console.log(data);

const c= cart => {
  const obj = {};
  for(let i = 0; i < cart.length; i++){
     const { title,quantity } = cart[i];
     obj[title] = quantity;
  };
  return obj;
};
let val=c(cart);

  const options = {
    key: process.env.RAZORPAY_KEY_ID,
    currency: data.currency,
    amount: price,
    name: "Wildling",
    description: "Wallet",
    image: "http://localhost:1337/logo.png",
    order_id: data.id,
    notes: val,
    handler: function (response) {
      alert("PAYMENT ID ::" + response.razorpay_payment_id);
      alert("ORDER ID :: " + response.razorpay_order_id);
    },
   
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}
