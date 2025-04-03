export const businessIndustry = [
  { value: "Aerospace & Automotive", label: "Aerospace & Automotive" },
  { value: "Agriculture & Forestry", label: "Agriculture & Forestry" },
  { value: "Construction", label: "Construction" },
  { value: "Defence & Arms", label: "Defence & Arms" },
  { value: "eCommerce", label: "eCommerce" },
  { value: "Education", label: "Education" },
  { value: "Electronics", label: "Electronics" },
  { value: "Entertainment", label: "Entertainment" },
  { value: "Export", label: "Export" },
  { value: "Food, Drink (Retail)", label: "Food, Drink (Retail)" },
  {
    value: "Hotels, Catering & Tourism (Hospitality)",
    label: "Hotels, Catering & Tourism (Hospitality)",
  },
  { value: "Import", label: "Import" },
  { value: "Life Sciences", label: "Life Sciences" },
  {
    value: "Logistics, Transport & Shipping",
    label: "Logistics, Transport & Shipping",
  },
  { value: "Luxury Goods", label: "Luxury Goods" },
  { value: "Manufacturing", label: "Manufacturing" },
  { value: "Metals & Commodities", label: "Metals & Commodities" },
  { value: "Oil, Gas & Energy", label: "Oil, Gas & Energy" },
  {
    value: "Payroll and Financial Services",
    label: "Payroll and Financial Services",
  },
  {
    value: "Real Estate & Property Management",
    label: "Real Estate & Property Management",
  },
  {
    value: "Retail, Textiles & Clothing",
    label: "Retail, Textiles & Clothing",
  },
  { value: "Software & Technology", label: "Software & Technology" },
  { value: "Sport", label: "Sport" },
  { value: "Travel", label: "Travel" },
  { value: "Yachting and Aviation", label: "Yachting and Aviation" },
];

export const businessType = [
  {
    value: "Sole Trader",
    label: "Sole Trader",
  },
  {
    value: "Partnership",
    label: "Partnership",
  },
  {
    value: "Limited Company",
    label: "Limited Company",
  },
  {
    value: "Limited Liability Partnership",
    label: "Limited Liability Partnership",
  },
  {
    value: "Public Limited Company",
    label: "Public Limited Company",
  },
  {
    value: "Other",
    label: "Other",
  },
];

export const merchantCategoryType = [
  {
    value: "0001–1499",
    label: "0001–1499 (Agricultural Services)",
    mccCodes: [
      {
        MCC: "0742",
        Description: "Veterinary Services",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "0763",
        Description: "Agricultural Cooperatives",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "0780",
        Description: "Horticultural and Landscaping Services",
        ValidPaymentBrands: ["V", "M"],
      },
    ],
  },
  {
    value: "1500–2999",
    label: "1500–2999 (Contracted Services)",
    mccCodes: [
      {
        MCC: "1520",
        Description: "General Contractors–Residential and Commercial",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "1711",
        Description: "Air Conditioning, Heating and Plumbing Contractors",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "1731",
        Description: "Electrical Contractors",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "1740",
        Description:
          "Insulation, Masonry, Plastering, Stonework and Tile Setting Contractors",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "1750",
        Description: "Carpentry Contractors",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "1761",
        Description: "Roofing and Siding, Sheet Metal Work Contractors",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "1771",
        Description: "Concrete Work Contractors",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "1799",
        Description:
          "Contractors, Special Trade Contractors–not elsewhere classified",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "2741",
        Description: "Miscellaneous Publishing and Printing",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "2791",
        Description: "Typesetting, Plate Making and Related Services",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "2842",
        Description:
          "Sanitation, Polishing and Specialty Cleaning Preparations",
        ValidPaymentBrands: ["V", "M"],
      },
    ],
  },
  { value: "3000–3299", label: "3000–3299 (Airlines)" },
  { value: "3300–3499", label: "3300–3499 (Car Rental)" },
  { value: "3500–3999", label: "3500–3999 (Lodging)" },
  { value: "4000–4799", label: "4000–4799 (Transportation Services)" },
  { value: "4800–4999", label: "4800–4999 (Utility Services)" },
  { value: "5000–5599", label: "5000–5599 (Retail Outlet Services)" },
  { value: "5600–5699", label: "5600–5699 (Clothing Stores)" },
  { value: "5700–7299", label: "5700–7299 (Miscellaneous Stores)" },
  { value: "7300–7999", label: "7300–7999 (Business Services)" },
  {
    value: "8000–8999",
    label: "8000–8999 (Professional Services and Membership Organizations)",
  },
  { value: "9000–9999", label: "9000–9999 (Government Services)" },
];

const merchantCategoryCode = [
  {
    value: "0001–1499",
    label: "0001–1499 (Agricultural Services)",
  },
  { value: "1500–2999", label: "1500–2999 (Contracted Services)" },
  { value: "3000–3299", label: "3000–3299 (Airlines)" },
  { value: "3300–3499", label: "3300–3499 (Car Rental)" },
  { value: "3500–3999", label: "3500–3999 (Lodging)" },
  { value: "4000–4799", label: "4000–4799 (Transportation Services)" },
  { value: "4800–4999", label: "4800–4999 (Utility Services)" },
  { value: "5000–5599", label: "5000–5599 (Retail Outlet Services)" },
  { value: "5600–5699", label: "5600–5699 (Clothing Stores)" },
  { value: "5700–7299", label: "5700–7299 (Miscellaneous Stores)" },
  { value: "7300–7999", label: "7300–7999 (Business Services)" },
  {
    value: "8000–8999",
    label: "8000–8999 (Professional Services and Membership Organizations)",
  },
  { value: "9000–9999", label: "9000–9999 (Government Services)" },
];
