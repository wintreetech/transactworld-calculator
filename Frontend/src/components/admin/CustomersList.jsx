import React from "react";

function CustomersList() {
  const dummyData = [
    {
      businessAddress: "London",
      businessName: "SM Advertising",
      businessType: "Technology",
      companyNumber: "987654321",
      email: "shubham@gmail.com",
      name: "Shubham Makwana",
      phone: "1234567890",
    },
    {
      businessAddress: "Manchester",
      businessName: "ABC Marketing",
      businessType: "Retail",
      companyNumber: "123456789",
      email: "alice.johnson@abcmarketing.co.uk",
      name: "Alice Johnson",
      phone: "07123456789",
    },
    {
      businessAddress: "Birmingham",
      businessName: "Innovative Solutions",
      businessType: "Services",
      companyNumber: "555666777",
      email: "info@innovativesolutions.com",
      name: "Bob Smith",
      phone: "07987654321",
    },
    {
      businessAddress: "Liverpool",
      businessName: "Creative Minds",
      businessType: "Design",
      companyNumber: "222333444",
      email: "contact@creativeminds.co.uk",
      name: "Carol White",
      phone: "07894561230",
    },
    {
      businessAddress: "Leeds",
      businessName: "NextGen Tech",
      businessType: "Technology",
      companyNumber: "444555666",
      email: "support@nextgentech.com",
      name: "David Brown",
      phone: "07712345678",
    },
    {
      businessAddress: "Glasgow",
      businessName: "Glasgow Ventures",
      businessType: "Finance",
      companyNumber: "333444555",
      email: "info@glasgowventures.co.uk",
      name: "Emma Wilson",
      phone: "07698765432",
    },
    {
      businessAddress: "Edinburgh",
      businessName: "Highland Crafts",
      businessType: "Manufacturing",
      companyNumber: "111222333",
      email: "sales@highlandcrafts.com",
      name: "Fiona McDonald",
      phone: "07543219876",
    },
    {
      businessAddress: "Bristol",
      businessName: "Bristol Innovations",
      businessType: "Technology",
      companyNumber: "777888999",
      email: "hello@bristolinnovations.com",
      name: "George Taylor",
      phone: "07432109876",
    },
    {
      businessAddress: "Coventry",
      businessName: "Coventry Solutions",
      businessType: "Consulting",
      companyNumber: "666777888",
      email: "contact@coventrysolutions.com",
      name: "Hannah Davies",
      phone: "07321098765",
    },
    {
      businessAddress: "Nottingham",
      businessName: "Nottingham Enterprises",
      businessType: "Services",
      companyNumber: "999000111",
      email: "info@nottinghamenterprises.co.uk",
      name: "Ian Roberts",
      phone: "07210987654",
    },
    {
      businessAddress: "Nottingham",
      businessName: "Nottingham Enterprises",
      businessType: "Services",
      companyNumber: "999000111",
      email: "info@nottinghamenterprises.co.uk",
      name: "Ian Roberts",
      phone: "07210987654",
    },
    {
      businessAddress: "Nottingham",
      businessName: "Nottingham Enterprises",
      businessType: "Services",
      companyNumber: "999000111",
      email: "info@nottinghamenterprises.co.uk",
      name: "Ian Roberts",
      phone: "07210987654",
    },
    {
      businessAddress: "Nottingham",
      businessName: "Nottingham Enterprises",
      businessType: "Services",
      companyNumber: "999000111",
      email: "info@nottinghamenterprises.co.uk",
      name: "Ian Roberts",
      phone: "07210987654",
    },
    {
      businessAddress: "Nottingham",
      businessName: "Nottingham Enterprises",
      businessType: "Services",
      companyNumber: "999000111",
      email: "info@nottinghamenterprises.co.uk",
      name: "Ian Roberts",
      phone: "07210987654",
    },
  ];

  return (
    <>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 overflow-y-auto h-[calc(100vh-150px)]">
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
            {dummyData.map((item, index) => (
              <tr key={index} className="text-2xl">
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.businessName}</td>
                <td>{item.businessType}</td>
                <td>{item.businessAddress}</td>
                <td>{item.companyNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CustomersList;
