const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    amount: { type: Number, required: true },
    currency: { type: String, required: true },
    method: { type: String, required: true },
    description: { type: String },
    customer_id: { type: String, required: true },
    status: { type: String, default: "pending" },
    refund: { type: mongoose.Schema.Types.ObjectId, ref: "Refund" }, // Reference to the refund document
  },
  { timestamps: true }
);

const Payment = mongoose.model("Payment", paymentSchema);
module.exports = Payment;



















async function (){
 try{
  const response=fetch(url);
  if(!response){
    console.error("error");
  }
  const data=await Response.json();
  return data;
}catch{

}
}


const http=require('http');

const a=http.createserver(req,res)=>{
  res.status(200).send("hello world");
}


a.listen(2000,()=>{
  console.log("server is connected");
});









