import React, { useState } from "react";

import { CustomersList } from "../admin";
import {
  businessType,
  businessIndustry,
  merchantCategoryType,
} from "../../config";

function Customers() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    businessType: "",
    businessIndustry: "",
    businessAddress: "",
    companyNumber: "",
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

  const handleCustomerSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
            Add Customers
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
                      <>
                        <option key={index} value={item.value}>
                          {item.label}
                        </option>
                      </>
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
                      <>
                        <option key={index} value={item.value}>
                          {item.label}
                        </option>
                      </>
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
                    name="companyNumber"
                    value={formData.companyNumber}
                    onChange={handleChange}
                    className="input"
                    placeholder="987654321"
                  />
                </fieldset>
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
                    {merchantCategoryType.map((item, index) => (
                      <>
                        <option key={index} value={item.value}>
                          {item.label}
                        </option>
                      </>
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
                      {merchantCategoryType.map((item, index) => (
                        <>
                          <option key={index} value={item.value}>
                            {item.label}
                          </option>
                        </>
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
