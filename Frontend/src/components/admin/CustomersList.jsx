import React, { useContext } from "react";
import CustomerContext from "../../context/CustomerContext";

function CustomersList() {
  const { customers, loading } = useContext(CustomerContext);

  if (loading) {
    return (
      <h1 className="text-center text-2xl mt-10">
        Please wait fetching customer data...
      </h1>
    );
  }

  return (
    <>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 overflow-y-auto h-[calc(100vh-150px)] ">
        {customers.length !== 0 ? (
          <table className="table table-md table-pin-rows table-pin-cols ">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th className="text-black">Name</th>
                <th className="text-black">Email</th>
                <th className="text-black">Phone Number</th>
                <th className="text-black">Business Name</th>
                <th className="text-black">Business Type</th>
                <th className="text-black">Business Address</th>
                <th className="text-black">Company Number</th>
              </tr>
            </thead>
            {/* body */}
            <tbody>
              {customers.map((item, index) => (
                <tr key={index} className="text-2xl">
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.businessName}</td>
                  <td>{item.businessType}</td>
                  <td>{item.businessAddress}</td>
                  <td>{item.companynumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h1 className="text-center text-2xl mt-10 capitalize">
            no customers found
          </h1>
        )}
      </div>
    </>
  );
}

export default CustomersList;
