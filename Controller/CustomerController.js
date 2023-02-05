const Customer = require("../Model/CustomerModel");

module.exports.Post_Customer = async (req, res) => {
  const newCustomer = new Customer(req.body);
  try {
    const insertCustomer = await newCustomer.save();
    res.status(201).json(insertCustomer);
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
};

module.exports.get_Customer = async (req, res) => {
  try {
    const getCustomer = await Customer.find({});
    res.json(getCustomer);
  } catch (error) {
    res.status(400).json(error);
    // console.log(error);
  }
};

module.exports.getSingle_Customer = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    res.status(200).json({
      success: true,
      customer,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports.update_Customer = async (req, res) => {
  try {
    const _id = req.params.id;
    const updateCustomer = await Customer.findByIdAndUpdate({ _id }, req.body);
    res.json(updateCustomer);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

module.exports.delete_Customer = async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteCustomer = await Customer.findByIdAndDelete({ _id });
    res.json(deleteCustomer);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};
