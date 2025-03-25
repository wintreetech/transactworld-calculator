import Customer from "../models/customer.model.js";

// New Customer
const createCustomer = async (req, res) => {
  try {
    const {
      businessAddress,
      businessIndustry,
      businessName,
      businessType,
      desiredServices,
      name,
      email,
      phone,
      merchantCategoryCode,
      merchantCategoryType,
      companynumber,
    } = req.body;

    if (
      !businessAddress ||
      !businessIndustry ||
      !businessName ||
      !businessType ||
      !companynumber ||
      !desiredServices ||
      !email ||
      !merchantCategoryCode ||
      !merchantCategoryType ||
      !name ||
      !phone
    ) {
      return res.status(400).json({
        success: false,
        message: "all fields required when you add the customer",
      });
    }

    const customer = await Customer.findOne({ email });

    if (customer) {
      return res.status(400).json({
        success: false,
        message: "customer is already added with this email",
      });
    }

    const newCustomer = await Customer.create({
      businessAddress,
      businessIndustry,
      businessName,
      businessType,
      desiredServices,
      name,
      email,
      phone,
      merchantCategoryCode,
      merchantCategoryType,
      companynumber,
    });

    return res.status(201).json({
      success: true,
      message: "customer created successfully",
      newCustomer,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Customers
const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json({
      success: true,
      message: "customers fetched successfully",
      customers,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get  customer based on  Id
const getCustomerById = async (req, res) => {
  try {
    const { id } = req.params;

    const customer = await Customer.findById(id);

    if (!customer)
      return res.status(400).json({
        success: false,
        message: "customer not found with this id",
      });

    return res.status(200).json({
      success: true,
      message: "customer fetched successfully",
      customer,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Updated customer based on Id
const updateCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      email,
      phone,
      companyname,
      companytype,
      companyaddress,
      companynumber,
    } = req.body;

    const updatedCustomer = await Customer.findByIdAndUpdate(
      id,
      {
        name,
        email,
        phone,
        companyname,
        companytype,
        companyaddress,
        companynumber,
      },
      { new: true, runValidators: true }
    );

    if (!updatedCustomer)
      return res.status(404).json({ message: "Customer not found" });

    return res.status(200).json({
      success: true,
      message: "customer updated successfully",
      updatedCustomer,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// delete customer based on id
const deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCustomer = await Customer.findByIdAndDelete(id);
    if (!deletedCustomer)
      return res.status(404).json({ message: "Customer not found" });

    res.json({ success: true, message: "Customer deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export {
  createCustomer,
  getCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};
