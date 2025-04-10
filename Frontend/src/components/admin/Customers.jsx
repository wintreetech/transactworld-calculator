import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CustomersList } from "../admin";
import {
  businessType,
  businessIndustry,
  merchantCategoryTypeWithCode,
} from "../../config";
import toast from "react-hot-toast";
import CustomerContext from "../../context/CustomerContext";
import { IoMdAdd } from "react-icons/io";

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiUrl = import.meta.env.VITE_API_URL;

function Customers() {
  // const ctx = useContext(AuthContext);
  const { customers, loading, addCustomer } = useContext(CustomerContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    businessType: "",
    businessIndustry: "",
    businessAddress: "",
    companynumber: "",
    desiredServices: [],
    merchantCategoryType: "",
    merchantCategoryCode: "",
  });

  const services = [
    "Payment Gateway for online payments",
    "Link Payments",
    "Card Machine / POS",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleCustomerSubmit = async (e) => {
    e.preventDefault();
    for (const key in formData) {
      const value = formData[key];

      if (Array.isArray(value)) {
        if (value.length === 0) {
          toast("Please select at least one service.", {
            duration: 3000,
          });
          return;
        }
      } else if (typeof value === "string" && value.trim() === "") {
        toast("Please fill all the fields.", {
          duration: 3000,
        });
        return;
      }
    }

    try {
      const response = await axios.post(
        `${baseUrl}${apiUrl}/customer`,
        formData
      );
      toast.success(response.data.message);
      addCustomer(response.data.newCustomer);
    } catch (error) {
      console.error(error);
      console.error(error.response.data.message);
      toast.error(error.response.data.message);
    }

    document.getElementById("my_modal_3").close();
  };

  const handleCheckboxChange = (service) => {
    setFormData((prev) => ({
      ...prev,
      desiredServices: prev.desiredServices.includes(service)
        ? prev.desiredServices.filter((item) => item != service) // for remove
        : [...prev.desiredServices, service], // for add
    }));
  };

  return (
    <>
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <h1 className="inline text-2xl">Customers</h1>
          <button
            className="btn text-base float-end tracking-wide"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            <IoMdAdd />
            Add Customer
          </button>
        </div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box w-11/12 max-w-4xl p-8">
            <form method="dialog" onSubmit={handleCustomerSubmit}>
              <div className="grid grid-cols-3 gap-6">
                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-sm font-medium">
                    What is your name?
                  </legend>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input"
                    placeholder="Joe Biden"
                  />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-sm font-medium">
                    What is your Email?
                  </legend>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input"
                    placeholder="joe@transactworld.com"
                  />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-sm font-medium">
                    What is your Phone Number?
                  </legend>
                  <input
                    type="tel"
                    name="phone"
                    pattern="^\d{10}$"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input"
                    placeholder="07123456789"
                  />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-sm font-medium">
                    What is your Business Name?
                  </legend>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="input"
                    placeholder="Acme Corporation"
                  />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-sm font-medium">
                    What is your Business Type?
                  </legend>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="select"
                  >
                    <option default>Select your business type</option>
                    {businessType.map((item, index) => (
                      <option key={index} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-sm font-medium">
                    What is your Business Industry?
                  </legend>
                  <select
                    name="businessIndustry"
                    value={formData.businessIndustry}
                    onChange={handleChange}
                    className="select"
                  >
                    <option default>Select your business industry</option>
                    {businessIndustry.map((item, index) => (
                      <option key={index} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-sm font-medium">
                    What is your Business Address?
                  </legend>
                  <input
                    type="text"
                    name="businessAddress"
                    value={formData.businessAddress}
                    onChange={handleChange}
                    className="input"
                    placeholder="123 Business Street, Springfield"
                  />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-sm font-medium">
                    What is your Company Number?
                  </legend>
                  <input
                    type="text"
                    name="companynumber"
                    value={formData.companynumber}
                    onChange={handleChange}
                    className="input"
                    placeholder="987654321"
                  />
                </fieldset>

                {/* MCC Code  */}
                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-sm font-medium">
                    What is your MCC?
                  </legend>
                  <select
                    name="merchantCategoryType"
                    value={formData.merchantCategoryType}
                    onChange={handleChange}
                    className="select"
                  >
                    <option default>Merchant Category Types</option>
                    {merchantCategoryTypeWithCode.map((item, index) => (
                      <option key={index} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </select>

                  {formData.merchantCategoryType && (
                    <select
                      name="merchantCategoryCode"
                      value={formData.merchantCategoryCode}
                      onChange={handleChange}
                      className="select"
                    >
                      <option default>Merchant Category Codes</option>
                      {merchantCategoryTypeWithCode
                        .find(
                          (cat) => cat.value === formData.merchantCategoryType
                        )
                        ?.mccCodes?.map((code, index) => (
                          <option key={index} value={code.MCC}>
                            {code.MCC} - {code.Description}
                          </option>
                        ))}
                    </select>
                  )}
                </fieldset>

                {/* checkbox */}
                <fieldset className=" fieldset col-start-1">
                  <legend className="fieldset-legend text-sm font-medium">
                    What is your Desired Services?
                  </legend>

                  {services.map((service) => (
                    <label key={service} className="fieldset-label">
                      <input
                        type="checkbox"
                        className="checkbox"
                        value={service}
                        checked={formData.desiredServices.includes(service)}
                        onChange={() => handleCheckboxChange(service)}
                      />
                      {service}
                    </label>
                  ))}
                </fieldset>
              </div>
              <button type="submit" className="btn absolute right-6 bottom-8">
                Submit
              </button>
              <button
                onClick={() => document.getElementById("my_modal_3").close()}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
            </form>
          </div>
        </dialog>
      </div>

      <CustomersList />
    </>
  );
}

export default Customers;
