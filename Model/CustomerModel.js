const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  phoneNumber: {
    type: Number,
    trim: true,
  },
  address: {
    type: String,
    trim: true,
  },
  note: {
    type: String,
    trim: true,
  },
  payment: {
    type: String,
    enum: ["Yes", "No", "Half"],
    default: "No",
    trim: true,
  },
  isProductReady: {
    type: String,
    enum: ["Yes", "No"],
    default: "No",
    trim: true,
  },
  isCouriered: {
    type: String,
    enum: ["Yes", "No"],
    default: "No",
    trim: true,
  },
  isProductReceivedByCustomer: {
    type: String,
    enum: ["Yes", "No"],
    default: "No",
    trim: true,
  },
});

module.exports = mongoose.model("Customer", customerSchema);
// name:string,
// contactNumber:number,
// address:string,
// payment:enum:[yes,no,half],
// isProductReady:enum:[yes,no],
// note:string,
// isCouriered:enum:[yes,no],
// isProductReceivedByCustomer:enum:[yes,no]
