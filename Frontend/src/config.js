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

export const merchantCategoryTypeWithCode = [
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
  {
    value: "3000–3299",
    label: "3000–3299 (Airlines)",
    mccCodes: [
      {
        MCC: "3000",
        Description: "United Airlines",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3001",
        Description: "American Airlines",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3002",
        Description: "Pan American",
        ValidPaymentBrands: ["V", "M"],
      },
      { MCC: "3003", Description: "Eurofly", ValidPaymentBrands: ["V", "M"] },
      {
        MCC: "3004",
        Description: "Dragon Airlines",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3005",
        Description: "British Airways",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3006",
        Description: "Japan Air Lines",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3007",
        Description: "Air France",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3008",
        Description: "Lufthansa German Airlines",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3009",
        Description: "Air Canada",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3010",
        Description: "Royal Dutch Airlines (KLM Airlines)",
        ValidPaymentBrands: ["V", "M"],
      },
      { MCC: "3011", Description: "Aeroflot", ValidPaymentBrands: ["V", "M"] },
      { MCC: "3012", Description: "Qantas", ValidPaymentBrands: ["V", "M"] },
      { MCC: "3013", Description: "Alitalia", ValidPaymentBrands: ["V", "M"] },
      {
        MCC: "3014",
        Description: "Saudi Arabian Airlines",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3015",
        Description: "Swiss International Air Lines",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3016",
        Description: "Scandinavian Airline System (SAS)",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3017",
        Description: "South African Airways",
        ValidPaymentBrands: ["V", "M"],
      },
      { MCC: "3018", Description: "Varig", ValidPaymentBrands: ["V", "M"] },
      {
        MCC: "3019",
        Description: "Germanwings TSYS",
        ValidPaymentBrands: ["V", "M"],
      },
      { MCC: "3020", Description: "Air India", ValidPaymentBrands: ["V", "M"] },
      {
        MCC: "3021",
        Description: "Air Algerie",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3022",
        Description: "Philippine Airlines",
        ValidPaymentBrands: ["V", "M"],
      },
      { MCC: "3023", Description: "Mexicana", ValidPaymentBrands: ["V", "M"] },
      {
        MCC: "3024",
        Description: "Pakistan International",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3025",
        Description: "Air New Zealand Ltd. International",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3026",
        Description: "Emirates Airlines",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3027",
        Description: "Union De Transports Aeriens (UTA/interair)",
        ValidPaymentBrands: ["V", "M"],
      },
      { MCC: "3028", Description: "Air Malta", ValidPaymentBrands: ["V", "M"] },
      {
        MCC: "3029",
        Description: "SN Brussels Airlines",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3030",
        Description: "Aerolineas Argentinas",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3031",
        Description: "Olympic Airways",
        ValidPaymentBrands: ["V", "M"],
      },
      { MCC: "3032", Description: "El Al", ValidPaymentBrands: ["V", "M"] },
      {
        MCC: "3033",
        Description: "Ansett Airlines",
        ValidPaymentBrands: ["V", "M"],
      },
      { MCC: "3034", Description: "Etihadair", ValidPaymentBrands: ["V", "M"] },
      {
        MCC: "3035",
        Description: "TAP Air Portugal (TAP)",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3036",
        Description: "Viacao Aerea Sao Pãulo (VASP)",
        ValidPaymentBrands: ["V", "M"],
      },
      { MCC: "3037", Description: "Egyptair", ValidPaymentBrands: ["V", "M"] },
      {
        MCC: "3038",
        Description: "Kuwait Airways",
        ValidPaymentBrands: ["V", "M"],
      },
      { MCC: "3039", Description: "Avianca", ValidPaymentBrands: ["V", "M"] },
      {
        MCC: "3040",
        Description: "Gulf Air (Bahrain)",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3041",
        Description: "Balkan-Bulgarian Airlines",
        ValidPaymentBrands: ["V", "M"],
      },
      { MCC: "3042", Description: "Finnair", ValidPaymentBrands: ["V", "M"] },
      {
        MCC: "3043",
        Description: "Aer Lingus",
        ValidPaymentBrands: ["V", "M"],
      },
      { MCC: "3044", Description: "Air Lanka", ValidPaymentBrands: ["V", "M"] },
      {
        MCC: "3045",
        Description: "Nigeria Airways",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3046",
        Description: "Cruzeiro Do Sul",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3047",
        Description: "Turk Hava Yollari",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3048",
        Description: "Royal Air Maroc",
        ValidPaymentBrands: ["V", "M"],
      },
      { MCC: "3049", Description: "Tunis Air", ValidPaymentBrands: ["V", "M"] },
      {
        MCC: "3050",
        Description: "Icelandair",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3051",
        Description: "Austrian Airlines",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3052",
        Description: "LAN Airlines",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3053",
        Description: "Aviacion Y Comercio (AVIACO)",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3054",
        Description: "Linea Aerea Del Cobre (LADECO)",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3055",
        Description: "Lloyd Aero Boliviano (LAB)",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3056",
        Description: "Jet Airways",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3057",
        Description: "Virgin America",
        ValidPaymentBrands: ["V", "M"],
      },
      { MCC: "3058", Description: "Delta", ValidPaymentBrands: ["V", "M"] },
      {
        MCC: "3059",
        Description: "DBA Airline",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3060",
        Description: "Northwest Airlines",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3061",
        Description: "Continental",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3062",
        Description: "Hapag-Lloyd Express",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3063",
        Description: "US Airways",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3064",
        Description: "Adria Airways",
        ValidPaymentBrands: ["V", "M"],
      },
      { MCC: "3065", Description: "Airinter", ValidPaymentBrands: ["V", "M"] },
      {
        MCC: "3066",
        Description: "Southwest Airlines",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3067",
        Description: "Vanguard Airlines",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3068",
        Description: "Air Astana",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3069",
        Description: "Sun Country Airlines",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3071",
        Description: "Air British Columbia",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3072",
        Description: "Cebu Pacific Airlines",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3075",
        Description: "Singapore Airlines",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3076",
        Description: "Aeromexico",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3077",
        Description: "Thai Airways",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3078",
        Description: "China Airlines",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3079",
        Description: "Jetstar Airways",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3082",
        Description: "Korean Airlines",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3083",
        Description: "Air Afrique",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3084",
        Description: "Eva Airways",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3085",
        Description: "Midwest Express Airlines",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3086",
        Description: "Carnival Airlines",
        ValidPaymentBrands: ["V"],
      },
      {
        MCC: "3087",
        Description: "Metro Airlines",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3088",
        Description: "Croatia Air",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3089",
        Description: "Transaero",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3090",
        Description: "Uni Airways Corporation",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3094",
        Description: "Zambia Airways",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3096",
        Description: "Air Zimbabwe Corp",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3097",
        Description: "Spanair",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3098",
        Description: "Asiana Airlines",
        ValidPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3099",
        Description: "CATHAY PACIFIC",
      },
      {
        MCC: "3100",
        Description: "MALAYSIAN AIRLINE SYSTEM",
      },
      {
        MCC: "3102",
        Description: "IBERIA",
      },
      {
        MCC: "3103",
        Description: "GARUDA",
      },
      {
        MCC: "3106",
        Description: "BRAATHENS S.A.F.E.",
      },
      {
        MCC: "3110",
        Description: "WINGS AIRWAYS",
      },
      {
        MCC: "3111",
        Description: "BRITISH MIDLAND",
      },
      {
        MCC: "3112",
        Description: "WINDWARD ISLAND",
      },
      {
        MCC: "3115",
        Description: "TOWER AIR",
      },
      {
        MCC: "3117",
        Description: "VASP",
      },
      {
        MCC: "3118",
        Description: "AIR ZIMBABWE",
      },
      {
        MCC: "3121",
        Description: "TRANSBRASIL",
      },
      {
        MCC: "3124",
        Description: "VIRGIN ATLANTIC AIRWAYS",
      },
      {
        MCC: "3125",
        Description: "QANTAS AIRWAYS",
      },
      {
        MCC: "3126",
        Description: "Talair PTY Ltd",
      },
      {
        MCC: "3127",
        Description: "RENO AIR",
      },
      {
        MCC: "3129",
        Description: "Surinam Airways",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3130",
        Description: "Sunworld International",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3131",
        Description: "VLM Airlines",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3132",
        Description: "Frontier Airlines",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3133",
        Description: "Sunbelt Airlines",
        ValmccPaymentBrands: ["V"],
      },
      {
        MCC: "3135",
        Description: "Sudan Airways",
        ValmccPaymentBrands: ["V"],
      },
      {
        MCC: "3136",
        Description: "Qatar Airways",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3137",
        Description: "Singleton",
        ValmccPaymentBrands: ["V"],
      },
      {
        MCC: "3138",
        Description: "Simmons Airlines",
        ValmccPaymentBrands: ["V"],
      },
      {
        MCC: "3143",
        Description: "Scenic Airlines",
        ValmccPaymentBrands: ["V"],
      },
      {
        MCC: "3144",
        Description: "Virgin Atlantic",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3145",
        Description: "San Juan",
        ValmccPaymentBrands: ["V"],
      },
      {
        MCC: "3146",
        Description: "Luxair",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3148",
        Description: "Air Littoral S.A.",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3151",
        Description: "Air Zaire",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3154",
        Description: "Princeville",
        ValmccPaymentBrands: ["V"],
      },
      {
        MCC: "3156",
        Description: "Go Fly Ltd.",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3159",
        Description: "Provincetown-Boston Airways",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3161",
        Description: "All Nipon Airways",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3164",
        Description: "Norontair",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3165",
        Description: "New York Helicopter",
        ValmccPaymentBrands: ["V"],
      },
      {
        MCC: "3167",
        Description: "Aero Continente",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3170",
        Description: "Mount Cook",
        ValmccPaymentBrands: ["V"],
      },
      {
        MCC: "3171",
        Description: "Canadian Airlines International",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3172",
        Description: "Nationair",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3174",
        Description: "Jetblue Airways",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3175",
        Description: "Middle East Air",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3176",
        Description: "Metroflight Airlines",
        ValmccPaymentBrands: ["V"],
      },
      {
        MCC: "3177",
        Description: "AirTran Airways",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3178",
        Description: "Mesa Air",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3180",
        Description: "Westjet Airlines",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3181",
        Description: "Malev",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3182",
        Description: "LOT (Polish Airlines)",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3183",
        Description: "Oman Air",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3184",
        Description: "LIAT",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3185",
        Description: "Linea Aeropostal Venezolana (LAV)",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3186",
        Description: "Lineas Aereas Paraguayas (LAP)",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3187",
        Description: "LACSA (Costa Rica)",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3188",
        Description: "Virgin Express",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3190",
        Description: "Jugoslav Air",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3191",
        Description: "Island Airlines",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3193",
        Description: "Indian Airlines",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3196",
        Description: "Hawaiian Air",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3197",
        Description: "Havasu Airlines",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3200",
        Description: "Guyana Airways",
        ValmccPaymentBrands: ["V", "M"],
      },
      { MCC: 3203, Description: "Golden Pacific Air" },
      { MCC: 3204, Description: "Freedom Airlines" },
      { MCC: 3206, Description: "China Eastern Airlines" },
      { MCC: 3211, Description: "Norwegian Air Shuttle" },
      { MCC: 3212, Description: "Dominicana De Aviacion" },
      { MCC: 3213, Description: "Malmo Aviation" },
      { MCC: 3215, Description: "Dan Air Services" },
      { MCC: 3216, Description: "Cumberland Airlines" },
      { MCC: 3217, Description: "Ceskoslovenske Aerolinie (CSA)" },
      { MCC: 3218, Description: "Crown Air" },
      { MCC: 3219, Description: "Compania Panamena De Aviacion (COPA)" },
      { MCC: 3220, Description: "Compania Faucett" },
      { MCC: 3221, Description: "Transportes Aeros Militares" },
      { MCC: 3222, Description: "Command Airways" },
      { MCC: 3223, Description: "Comair" },
      { MCC: 3226, Description: "Skyways" },
      { MCC: 3228, Description: "Cayman Airways" },
      {
        MCC: 3229,
        Description: "SAETA (Sociedad Ecuatorianos De Transportes Aereos)",
      },
      { MCC: 3231, Description: "SAHSA (Servicio Aero De Honduras)" },
      { MCC: 3233, Description: "Capitol Air" },
      { MCC: 3234, Description: "Caribbean Airlines" },
      { MCC: 3235, Description: "Brockway Air" },
      { MCC: 3236, Description: "Air Arabia Airline" },
      { MCC: 3238, Description: "Bemidji Aviation" },
      { MCC: 3239, Description: "Bar Harbor Airlines" },
      { MCC: 3240, Description: "Bahamasair" },
      { MCC: 3241, Description: "Aviateca" },
      { MCC: 3242, Description: "Avensa" },
      { MCC: 3243, Description: "Austrian Air Service" },
      { MCC: 3245, Description: "Easyjet Air" },
      { MCC: 3246, Description: "Ryanair" },
      { MCC: 3247, Description: "Gol Airlines" },
      { MCC: 3248, Description: "Tam Airlines" },
      { MCC: 3251, Description: "Aloha Airlines" },
      { MCC: 3252, Description: "Antilean Airlines (ALM)" },
      { MCC: 3253, Description: "America West" },
      { MCC: 3254, Description: "U.S. Air Shuttle" },
      { MCC: 3256, Description: "Alaska Airlines Inc." },
      { MCC: 3259, Description: "American Trans Air" },
      { MCC: 3260, Description: "Spirit Airlines" },
      { MCC: 3261, Description: "Air China" },
      { MCC: 3262, Description: "Reno Air" },
      { MCC: 3263, Description: "Aero Servicio Carabobo" },
      { MCC: 3266, Description: "Air Seychelles" },
      { MCC: 3267, Description: "Air Panama International" },
      { MCC: 3273, Description: "Rica Hotels TSYS" },
      { MCC: 3274, Description: "Inter Nor Hotels TSYS" },
      { MCC: 3280, Description: "Air Jamaica" },
      { MCC: 3281, Description: "Air Djibouti TSYS" },
      { MCC: 3282, Description: "Air Djibouti" },
      { MCC: 3284, Description: "Aero Virgin Islands" },
      { MCC: 3285, Description: "Aero Peru" },
      { MCC: 3286, Description: "Aero Nicaraguensis" },
      { MCC: 3287, Description: "Aero Coach Aviation" },
      { MCC: 3292, Description: "Cyprus Airways" },
      { MCC: 3293, Description: "Ecuatoriana" },
      { MCC: 3294, Description: "Ethiopian Airlines" },
      { MCC: 3295, Description: "Kenya Airways" },
      { MCC: 3296, Description: "Air Berlin" },
      { MCC: 3297, Description: "Tarom Romanian Air Transport" },
      { MCC: 3298, Description: "Air Mauritius" },
      { MCC: 3299, Description: "Wideroes Flyveselskap" },
    ],
  },
  {
    value: "3300–3499",
    label: "3300–3499 (Car Rental)",
    mccCodes: [
      {
        MCC: "3351",
        Description: "Affiliated Auto Rental",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3352",
        Description: "American International",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3353",
        Description: "Brooks Rent-A-Car",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3354",
        Description: "Action Auto Rental",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3355",
        Description: "Sixt Car Rental",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3357",
        Description: "Hertz",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3359",
        Description: "Payless Car Rental",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3360",
        Description: "Snappy Car Rental",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3361",
        Description: "Airways",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3362",
        Description: "Altra Auto Rental",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3364",
        Description: "Agency Rent-A-Car",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3366",
        Description: "Budget Rent-A-Car",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3368",
        Description: "Holiday Rent-A-Car",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3370",
        Description: "Rent-A-Wreck",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3374",
        Description: "Accent Rent-A-Car",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3376",
        Description: "Ajax Rent-A-Car",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3380",
        Description: "Triangle Rent-A-Car",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3381",
        Description: "Europcar",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3385",
        Description: "Tropical Rent-A-Car",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3386",
        Description: "Showcase Rental Cars",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3387",
        Description: "Alamo Rent-A-Car",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3388",
        Description: "Merchants Rent-A-Car",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3389",
        Description: "Avis Rent-A-Car",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3390",
        Description: "Dollar Rent-A-Car",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3391",
        Description: "Europe By Car",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3393",
        Description: "National Car Rental",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3394",
        Description: "Kemwell Group",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3395",
        Description: "Thrifty Car Rental",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3396",
        Description: "Tilden Rent-A-Car",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3398",
        Description: "Econo-Car Rent-A-Car",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3400",
        Description: "Auto Host Rental Cars",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3405",
        Description: "Enterprise Rent-A-Car",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3409",
        Description: "General Rent-A-Car",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3412",
        Description: "A1 Rent-A-Car",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3414",
        Description: "Godfrey National",
        ValmccPaymentBrands: ["V"],
      },
      {
        MCC: "3420",
        Description: "Ansa International",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3421",
        Description: "Allstate",
        ValmccPaymentBrands: ["V"],
      },
      {
        MCC: "3423",
        Description: "AVCAR",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3425",
        Description: "Automate",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3427",
        Description: "Avon Rent-A-Car",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3428",
        Description: "Carey",
        ValmccPaymentBrands: ["V"],
      },
      {
        MCC: "3429",
        Description: "Insurance Rent-A-Car",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3430",
        Description: "Major Rent-A-Car",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3431",
        Description: "Replacement Rent-A-Car",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3432",
        Description: "Reserve Rent-A-Car",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3433",
        Description: "Ugly Duckling Rent-A-Car",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3434",
        Description: "USA",
        ValmccPaymentBrands: ["V"],
      },
      {
        MCC: "3435",
        Description: "Value Rent-A-Car",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3436",
        Description: "Autohansa",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3437",
        Description: "Cite",
        ValmccPaymentBrands: ["V"],
      },
      {
        MCC: "3438",
        Description: "Interent",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3439",
        Description: "Milleville",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3441",
        Description: "Advantage Rent A Car",
        ValmccPaymentBrands: ["V", "M"],
      },
    ],
  },
  {
    value: "3500–3999",
    label: "3500–3999 (Lodging)",
    mccCodes: [
      {
        MCC: "3501",
        Description: "Holiday Inns",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3502",
        Description: "Best Western",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3503",
        Description: "Sheraton",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3504",
        Description: "Hilton",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3505",
        Description: "Trusthouse Forte",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3506",
        Description: "Golden Tulip",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3507",
        Description: "Friendship Inns International",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3508",
        Description: "Quality International",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3509",
        Description: "Marriott",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3510",
        Description: "Days Inns Of America",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3511",
        Description: "Arabella Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3512",
        Description: "Intercontinental",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3513",
        Description: "Westin Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3514",
        Description: "Amerisuites",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3515",
        Description: "Rodeway Inns International",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3516",
        Description: "La Quinta Motor Inns",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3517",
        Description: "Americana Hotels Corporation",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3518",
        Description: "Sol Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3519",
        Description: "PLM/ETAP International",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3520",
        Description: "Meridien",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3521",
        Description: "Crest Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3522",
        Description: "Tokyo Group",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3523",
        Description: "Peninsula Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3524",
        Description: "Welcomgroup",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3525",
        Description: "Dunfey Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3526",
        Description: "Prince Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3527",
        Description: "Downtowner Passport",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3528",
        Description: "Thunderbird/Red Lion",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3529",
        Description: "CP (Canadian Pacific)",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3530",
        Description: "Renaissance Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3531",
        Description: "Kauai Coconut Beach Resort",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3532",
        Description: "Royal Kona Resort",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3533",
        Description: "Park Inn by Radisson",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3534",
        Description: "Southern Pacific Hotel",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3535",
        Description: "Hilton International",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3536",
        Description: "AMFAC Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3537",
        Description: "Ana Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3538",
        Description: "Concorde Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3539",
        Description: "Summerfield Suites Hotel",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3540",
        Description: "Iberotel",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3541",
        Description: "Hotel Okura",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3542",
        Description: "Royal Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3543",
        Description: "Four Seasons",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3544",
        Description: "Cigahotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3545",
        Description: "Shangri-La International",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3546",
        Description: "Hotel Sierra",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3547",
        Description: "Breakers Resort",
        ValmccPaymentBrands: ["M"],
      },
      {
        MCC: "3548",
        Description: "Hotels Melia",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3549",
        Description: "Auberge Des Governeurs",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3550",
        Description: "Regal 8 Inns",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3551",
        Description: "Mirage Hotel and Casino",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3552",
        Description: "Coast Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3553",
        Description: "Parks Inns International",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3554",
        Description: "Pinehurst Resort",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3555",
        Description: "Treasure Island Hotel and Casino",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3556",
        Description: "Barton Creek Resort",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3557",
        Description: "Manhattan East Suite Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3558",
        Description: "Jolly Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3559",
        Description: "Candlewood Suites",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3560",
        Description: "Aladdin Resort and Casino",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3561",
        Description: "Golden Nugget",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3562",
        Description: "Comfort Hotel International",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3563",
        Description: "Journeys End Motels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3564",
        Description: "Sams Town Hotel and Casino",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3565",
        Description: "Relax Inns",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3566",
        Description: "Garden Place Hotel",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3567",
        Description: "Soho Grand Hotel",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3568",
        Description: "Ladbroke Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3569",
        Description: "Tribeca Grand Hotel",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3570",
        Description: "Grand Met Forum Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3571",
        Description: "Grand Wailea Resort",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3572",
        Description: "Miyako Hotel/Kintetsu",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3573",
        Description: "Sandman Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3574",
        Description: "Venture Inn",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3575",
        Description: "Vagabond Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3576",
        Description: "La Quinta Resort",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3577",
        Description: "Mandarin International",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3578",
        Description: "Frankenmuth Bavarian",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3579",
        Description: "Hotel Mercure",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3580",
        Description: "Hotel Del Coronado",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3581",
        Description: "Delta Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3582",
        Description: "California Hotel and Casino",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3583",
        Description: "Radisson BLU",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3584",
        Description: "Princess Hotels International",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3585",
        Description: "Hungar Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3586",
        Description: "Sokos Hotel",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3587",
        Description: "Doral Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3588",
        Description: "Helmsley Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3589",
        Description: "Doral Golf Resort",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3590",
        Description: "Fairmont Hotels Corporation",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3591",
        Description: "Sonesta International Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3592",
        Description: "Omni International",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3593",
        Description: "Cunard Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3594",
        Description: "Arizona Biltmore",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3595",
        Description: "Hospitality Inns",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3596",
        Description: "Wynn Las Vegas",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3597",
        Description: "Riverside Resort and Casino",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3598",
        Description: "Regent Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3599",
        Description: "Pannonia Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3600",
        Description: "Saddlebrook Resort-Tampa",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3601",
        Description: "Tradewinds Resort",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3602",
        Description: "Hudson Hotel",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3603",
        Description: "Noahs Hotel (Melbourne)",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3604",
        Description: "Hilton Garden Inn",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3605",
        Description: "Jurys Doyle Hotel Group",
        ValmccPaymentBrands: ["M"],
      },
      {
        MCC: "3606",
        Description: "Jefferson Hotel",
        ValmccPaymentBrands: ["M"],
      },
      {
        MCC: "3607",
        Description: "Fontainebleau Resort",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3608",
        Description: "Gaylord Opryland",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3609",
        Description: "Gaylord Palms",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3610",
        Description: "Gaylord Texan",
        ValmccPaymentBrands: ["M"],
      },
      {
        MCC: "3611",
        Description: "C MON INN",
        ValmccPaymentBrands: ["M"],
      },
      {
        MCC: "3612",
        Description: "Moevenpick",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3613",
        Description: "Microtel Inn and Suites",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3614",
        Description: "AmericInn",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3615",
        Description: "Travelodge Motels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3616",
        Description: "Hermitage Hotels",
        ValmccPaymentBrands: ["M"],
      },
      {
        MCC: "3617",
        Description: "America’s Best Value Inn",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3618",
        Description: "Great Wolf",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3619",
        Description: "Aloft",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3620",
        Description: "Binions Horseshoe Club",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3621",
        Description: "Extended Stay",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3622",
        Description: "Merlin Hotel (Perth)",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3623",
        Description: "Dorint Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3624",
        Description: "Lady Luck Hotel and Casino",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3625",
        Description: "Hotel Universal",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3626",
        Description: "Studio Plus",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3627",
        Description: "Extended Stay America",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3628",
        Description: "Excalibur Hotel and Casino",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3629",
        Description: "Dan Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3630",
        Description: "Extended Stay Deluxe",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3631",
        Description: "Sleep Inn",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3632",
        Description: "The Phoenician",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3633",
        Description: "Rank Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3634",
        Description: "Swissotel",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3635",
        Description: "Reso Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3636",
        Description: "Sarova Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3637",
        Description: "Ramada Inns",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3638",
        Description: "Howard Johnson",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3639",
        Description: "Mount Charlotte Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3640",
        Description: "Hyatt Hotels/International",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3641",
        Description: "Sofitel Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3642",
        Description: "Novotel Sieh (Accor)",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3643",
        Description: "Steigenberger",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3644",
        Description: "Econo-Travel Motor Hotel",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3645",
        Description: "Queens Moat Houses",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3646",
        Description: "Swallow Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3647",
        Description: "Grupo Hotels HUSA SA",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3648",
        Description: "De Vere Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3649",
        Description: "Radisson",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3650",
        Description: "Red Roof Inns",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3651",
        Description: "Imperial London Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3652",
        Description: "Embassy Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3653",
        Description: "Penta Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3654",
        Description: "Loews Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3655",
        Description: "Scandic Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3656",
        Description: "Sara Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3657",
        Description: "Oberoi Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3658",
        Description: "New Otani Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3659",
        Description: "Taj Hotels Intl",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3660",
        Description: "Knights Inn",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3661",
        Description: "Metropole Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3662",
        Description: "Circus Circus Hotel and Casino",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3663",
        Description: "Hoteles El Presidente",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3664",
        Description: "Flag Inns",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3665",
        Description: "Hampton Inns",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3666",
        Description: "Stakis Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3667",
        Description: "Luxor Hotel and Casino",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3668",
        Description: "Maritim",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3669",
        Description: "Eldorado Hotel and Casino",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3670",
        Description: "Arcade",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3671",
        Description: "Arctia",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3672",
        Description: "Campanile",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3673",
        Description: "Ibusz Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3674",
        Description: "Rantasipi Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3675",
        Description: "Interhotel Cedok",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3676",
        Description: "Monte Carlo Hotel and Casino",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3677",
        Description: "Climat De France",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3678",
        Description: "Cumulus Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3679",
        Description: "Silver Legacy Hotel and Casino",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3680",
        Description: "Hoteis Othan",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3681",
        Description: "Adams Mark",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3682",
        Description: "Sahara Hotel and Casino",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3683",
        Description: "Bradbury Suites",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3684",
        Description: "Budget Host Inns",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3685",
        Description: "Budgetel",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3686",
        Description: "Suisse Chalet",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3687",
        Description: "Clarion Hotel",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3688",
        Description: "Compri Hotel",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3689",
        Description: "Consort",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3690",
        Description: "Courtyard by Marriott",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3691",
        Description: "Dillon Inn",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3692",
        Description: "Doubletree",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3693",
        Description: "Drury Inn",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3694",
        Description: "Economy Inns Of America",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3695",
        Description: "Embassy Suites",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3696",
        Description: "Excel Inn",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3697",
        Description: "Fairfield Hotel",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3698",
        Description: "Harley Hotel",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3699",
        Description: "Midway Motor Lodge",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3700",
        Description: "Motel 6",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3701",
        Description: "La Mansion Del Rio",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3702",
        Description: "Registry Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3703",
        Description: "Residence Inn",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3704",
        Description: "Royce Hotel",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3705",
        Description: "Sandman Inn",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3706",
        Description: "Shilo Inn",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3707",
        Description: "Shoneys Inn",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3708",
        Description: "Virgin River Hotel and Casino",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3709",
        Description: "Super 8 Motel",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3710",
        Description: "Ritz-Carlton",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3711",
        Description: "Flag Inns (Australia)",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3712",
        Description: "Buffalo Bills Hotel and Casino",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3713",
        Description: "Quality Pacific Hotel",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3714",
        Description: "Four Seasons (Australia)",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3715",
        Description: "Fairfield Inn",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3716",
        Description: "Carlton Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3717",
        Description: "City Lodge Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3718",
        Description: "Karos Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3719",
        Description: "Protea Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3720",
        Description: "Southern Sun Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3721",
        Description: "Conrad Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3722",
        Description: "Wyndham",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3723",
        Description: "Rica Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3724",
        Description: "Inter Nor Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3725",
        Description: "Sea Pines Resort",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3726",
        Description: "Rio Suites",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3727",
        Description: "Broadmoor Hotel",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3728",
        Description: "Ballys Hotel and Casino",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3729",
        Description: "John Ascuagas Nugget",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3730",
        Description: "MGM Grand Hotel",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3731",
        Description: "Harrah’s Hotels and Casinos",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3732",
        Description: "Opryland Hotel",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3733",
        Description: "Boca Raton Resort",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3734",
        Description: "Harvey Bristol Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3735",
        Description: "Masters Economy Inns",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3736",
        Description: "Colorado Belle Edgewater Resort",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3737",
        Description: "Riviera Hotel and Casino",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3738",
        Description: "Tropicana Resort and Casino",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3739",
        Description: "Woodside Hotels and Resorts",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3740",
        Description: "Towneplace Suites",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3741",
        Description: "Millennium Broadway Hotel",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3742",
        Description: "Club Med",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3743",
        Description: "Biltmore Hotel and Suites",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3744",
        Description: "Carefree Resorts",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3745",
        Description: "St. Regis Hotel",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3746",
        Description: "The Eliot Hotel",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3747",
        Description: "Club Corporation/Club Resorts",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3748",
        Description: "Wellesley Inns",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3749",
        Description: "Beverly Hills Hotel",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3750",
        Description: "Crowne Plaza Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3751",
        Description: "Homewood Suites",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3752",
        Description: "Peabody Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3753",
        Description: "Greenbriar Resorts",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3754",
        Description: "Amelia Island Plantation",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3755",
        Description: "Homestead",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3757",
        Description: "Canyon Ranch",
        ValmccPaymentBrands: ["TSYS"],
      },
      {
        MCC: "3758",
        Description: "Kahala Mandarin Oriental Hotel",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3759",
        Description: "Orchid At Mauna Lai",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3760",
        Description: "Halekulani Hotel/Waikiki Parc",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3761",
        Description: "Primadonna Hotel and Casino",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3762",
        Description: "Whiskey Pete’s Hotel and Casino",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3763",
        Description: "Chateau Elan Winery and Resort",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3764",
        Description: "Beau Rivage Hotel and Casino",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3765",
        Description: "Bellagio",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3766",
        Description: "Fremont Hotel and Casino",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3767",
        Description: "Main Street Station Hotel and Casino",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3768",
        Description: "Silver Star Hotel and Casino",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3769",
        Description: "Stratosphere Hotel and Casino",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3770",
        Description: "Springhill Suites",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3771",
        Description: "Caesars Hotel and Casino",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3772",
        Description: "Nemacolin Woodlands",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3773",
        Description: "Venetian Resort Hotel and Casino",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3774",
        Description: "New York-New York Hotel and Casino",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3775",
        Description: "Sands Resort",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3776",
        Description: "Nevele Grande Resort and Country Club",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3777",
        Description: "Mandalay Bay Resort",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3778",
        Description: "Four Points Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3779",
        Description: "W Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3780",
        Description: "Disneyland Resorts",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3781",
        Description: "Patricia Grand Resort Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3782",
        Description: "Rosen Hotel and Resorts",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3783",
        Description: "Town and Country Resort and Convention Center",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3784",
        Description: "First Hospitality Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3785",
        Description: "Outrigger Hotels and Resorts",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3786",
        Description: "Ohana Hotels of Hawaii",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3787",
        Description: "Caribe Royal Resort Suite and Villas",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3788",
        Description: "Ala Moana Hotel",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3789",
        Description: "Smugglers Notch Resort",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3790",
        Description: "Raffles Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3791",
        Description: "Staybridge Suites",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3792",
        Description: "Claridge Casino Hotel",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3793",
        Description: "The Flamingo Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3794",
        Description: "Grand Casino Hotels",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3795",
        Description: "Paris Las Vegas Hotel",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3796",
        Description: "Peppermill Hotel Casino",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3797",
        Description: "Atlantic City Hilton",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3798",
        Description: "Embassy Vacation Resort",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3799",
        Description: "Hale Koa Hotel",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3800",
        Description: "Homestead Suites",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3801",
        Description: "Wilderness Hotel and Resort",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3802",
        Description: "The Palace Hotel",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3803",
        Description: "The Wigwam Golf Resort and Spa",
        ValmccPaymentBrands: ["M"],
      },
      {
        MCC: "3804",
        Description: "The Diplomat Country Club and Spa",
        ValmccPaymentBrands: ["M"],
      },
      {
        MCC: "3805",
        Description: "The Atlantic",
        ValmccPaymentBrands: ["M"],
      },
      {
        MCC: "3806",
        Description: "Princeville Resort",
        ValmccPaymentBrands: ["M"],
      },
      {
        MCC: "3807",
        Description: "Element",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3808",
        Description: "LXR (Luxury Resorts)",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3809",
        Description: "Settle Inn",
        ValmccPaymentBrands: ["M"],
      },
      {
        MCC: "3810",
        Description: "La Costa Resort",
        ValmccPaymentBrands: ["M"],
      },
      {
        MCC: "3811",
        Description: "Premier Travel Inns",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3812",
        Description: "Hyatt Place",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3813",
        Description: "Hotel Indigo",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3814",
        Description: "The Roosevelt Hotel NY",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3815",
        Description: "Nickelodeon Family Suites by Holiday Inn",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3816",
        Description: "Home2Suites",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3817",
        Description: "Affinia",
        ValmccPaymentBrands: ["M"],
      },
      {
        MCC: "3818",
        Description: "Mainstay Suites",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3819",
        Description: "Oxford Suites",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3820",
        Description: "Jumeirah Essex House",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3821",
        Description: "Caribe Royal",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3822",
        Description: "Crossland",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3823",
        Description: "Grand Sierra Resort",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3824",
        Description: "Aria",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3825",
        Description: "Vdara",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3826",
        Description: "Autograph",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3827",
        Description: "Galt House",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3828",
        Description: "Cosmopolitan of Las Vegas",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3829",
        Description: "Country Inn By Carlson",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3830",
        Description: "Park Plaza Hotel",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "3831",
        Description: "Waldorf",
        ValmccPaymentBrands: ["V", "M"],
      },
    ],
  },
  {
    value: "4000–4799",
    label: "4000–4799 (Transportation Services)",
    mccCodes: [
      {
        MCC: "4011",
        Description: "Railroads–Freight",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "4111",
        Description:
          "Transportation–Suburban and Local Commuter Passenger, including Ferries",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "4112",
        Description: "Passenger Railways",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "4119",
        Description: "Ambulance Services",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "4121",
        Description: "Taxicabs and Limousines",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "4131",
        Description: "Bus Lines",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "4214",
        Description:
          "Motor Freight Carriers, Trucking–Local/Long Distance, Moving and Storage Companies, Local Delivery",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "4215",
        Description: "Courier Services–Air and Ground, Freight Forwarders",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "4225",
        Description:
          "Public Warehousing–Farm Products, Refrigerated Goods, Household Goods Storage",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "4411",
        Description: "Cruise Lines",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "4457",
        Description: "Boat Leases and Boat Rentals",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "4468",
        Description: "Marinas, Marine Service/Supplies",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "4511",
        Description: "Air Carriers, Airlines–not elsewhere classified",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "4582",
        Description: "Airports, Airport Terminals, Flying Fields",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "4722",
        Description: "Travel Agencies and Tour Operators",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "4723",
        Description: "Package Tour Operators (Germany Only)",
        ValmccPaymentBrands: ["V"],
      },
      {
        MCC: "4761",
        Description: "Telemarketing of Travel Related Services and Vitamins",
        ValmccPaymentBrands: ["TSYS"],
      },
      {
        MCC: "4784",
        Description: "Bridge and Road Fees, Tolls",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "4789",
        Description: "Transportation Services Not Elsewhere Classified",
        ValmccPaymentBrands: ["V", "M"],
      },
    ],
  },
  {
    value: "4800–4999",
    label: "4800–4999 (Utility Services)",
    mccCodes: [
      {
        MCC: "4812",
        Description: "Telecommunication Equipment Including Telephone Sales",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "4813",
        Description:
          "Key-Entry Telecom Merchant providing single local and long-distance phone calls using a central access number in a non-face-to-face environment using key entry",
        ValmccPaymentBrands: ["M"],
      },
      {
        MCC: "4814",
        Description:
          "Telecommunication Services including but not limited to prepaid phone services and recurring phone services",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "4816",
        Description: "Computer Network/Information Services",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "4821",
        Description: "Telegraph Services",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "4829",
        Description:
          "Wire Transfer Money Orders (V, D, G, X) / Money Transfer (M)",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "4899",
        Description:
          "Cable, Satellite, and Other Pay Television and Radio Services",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "4900",
        Description: "Utilities–Electric, Gas, Heating Oil, Sanitary, Water",
        ValmccPaymentBrands: ["V", "M"],
      },
    ],
  },
  {
    value: "5000–5599",
    label: "5000–5599 (Retail Outlet Services)",
    mccCodes: [
      {
        MCC: "5013",
        Description: "Motor Vehicle Supplies and New Parts",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5021",
        Description: "Office and Commercial Furniture",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5039",
        Description: "Construction Materials Not Elsewhere Classified",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5044",
        Description: "Office, Photographic, Photocopy and Microfilm Equipment",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5045",
        Description: "Computers, Computer Peripheral Equipment, Software",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5046",
        Description: "Commercial Equipment Not Elsewhere Classified",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5047",
        Description:
          "Dental/Laboratory/Medical/Ophthalmic Hospital Equipment and Supplies",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5051",
        Description: "Metal Service Centers and Offices",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5065",
        Description: "Electrical Parts and Equipment",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5072",
        Description: "Hardware Equipment and Supplies",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5074",
        Description: "Plumbing and Heating Equipment",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5085",
        Description: "Industrial Supplies Not Elsewhere Classified",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5094",
        Description: "Precious Stones and Metals, Watches and Jewelry",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5099",
        Description: "Durable Goods Not Elsewhere Classified",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5111",
        Description: "Stationery, Office Supplies, Printing and Writing Paper",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5122",
        Description: "Drugs, Drug Proprietors and Druggists Sundries",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5131",
        Description: "Piece Goods, Notions, and Other Dry Goods",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5137",
        Description:
          "Men’s, Women’s and Children’s Uniforms and Commercial Clothing",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5139",
        Description: "Commercial Footware",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5169",
        Description: "Chemicals and Allied Products Not Elsewhere Classified",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5172",
        Description: "Petroleum and Petroleum Products",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5192",
        Description: "Books, Periodicals and Newspapers",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5193",
        Description: "Florists Supplies, Nursery Stock and Flowers",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5198",
        Description: "Paints, Varnishes and Supplies",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5199",
        Description: "Non-Durable Goods Not Elsewhere Classified",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5200",
        Description: "Home Supply Warehouse Stores",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5211",
        Description: "Building Materials, Lumber Stores",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5231",
        Description: "Glass, Paint, Wallpaper Stores",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5251",
        Description: "Hardware Stores",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5261",
        Description: "Lawn and Garden Supply Stores",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5271",
        Description: "Mobile Home Dealers",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5299",
        Description: "Warehouse Club Gas",
        ValmccPaymentBrands: ["TSYS"],
      },
      {
        MCC: "5300",
        Description: "Wholesale Clubs",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5309",
        Description: "Duty Free Stores",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5310",
        Description: "Discount Stores",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5311",
        Description: "Department Stores",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5331",
        Description: "Variety Stores",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5399",
        Description: "Miscellaneous General Merchandise Stores",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5411",
        Description: "Grocery Stores, Supermarkets",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5422",
        Description: "Freezer and Locker Meat Provisioners",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5441",
        Description: "Candy, Nut and Confectionery Stores",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5451",
        Description: "Dairy Products Stores",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5462",
        Description: "Bakeries",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5499",
        Description:
          "Miscellaneous Food Stores–Convenience Stores, Markets, Specialty Stores, and Vending Machines",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5511",
        Description:
          "Automobile and Truck Dealers–Sales, Service, Repairs, Parts and Leasing",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5521",
        Description: "Automobile and Truck Dealers–(Used Only)–Sales",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5532",
        Description: "Automotive Tire Stores",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5533",
        Description: "Automotive Parts and Accessories Stores",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5541",
        Description: "Service Stations (With or Without Ancillary Services)",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5542",
        Description: "Fuel Dispenser, Automated",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5551",
        Description: "Boat Dealers",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5561",
        Description: "Camper Dealers, Recreational and Utility Trailers",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5571",
        Description: "Motorcycle Shops and Dealers",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5592",
        Description: "Motor Home Dealers",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5598",
        Description: "Snowmobile Dealers",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5599",
        Description:
          "Miscellaneous Automotive, Aircraft, and Farm Equipment Dealers–Not Elsewhere Classified",
        ValmccPaymentBrands: ["V", "M"],
      },
    ],
  },
  {
    value: "5600–5699",
    label: "5600–5699 (Clothing Stores)",
    mccCodes: [
      {
        MCC: "5611",
        Description: "Men’s and Boys’ Clothing and Accessories Stores",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5621",
        Description: "Women’s Ready to Wear Stores",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5631",
        Description: "Women’s Accessory and Specialty Stores",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5641",
        Description: "Children’s and Infants’ Wear Stores",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5651",
        Description: "Family Clothing Stores",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5655",
        Description: "Sports Apparel, and Riding Apparel Stores",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5661",
        Description: "Shoe Stores",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5681",
        Description: "Furriers and Fur Shops",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5691",
        Description: "Men’s and Women’s Clothing Stores",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5697",
        Description: "Alterations, Mending, Seamstresses, Tailors",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5698",
        Description: "Wig and Toupee Shops",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5699",
        Description: "Accessory and Apparel Stores–Miscellaneous",
        ValmccPaymentBrands: ["V", "M"],
      },
    ],
  },
  {
    value: "5700–7299",
    label: "5700–7299 (Miscellaneous Stores)",
    mccCodes: [
      {
        MCC: "5712",
        Description:
          "Equipment, Furniture and Home Furnishings Stores (except Appliances)",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5713",
        Description: "Floor Covering Stores",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5714",
        Description: "Drapery, Upholstery and Window Coverings Stores",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5718",
        Description: "Fireplace, Fireplace Screens and Accessories Stores",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5719",
        Description: "Miscellaneous House Furnishing Specialty Shops",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5722",
        Description: "Household Appliance Stores",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5732",
        Description: "Electronics Sales",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5733",
        Description: "Music Stores–Musical Instruments, Pianos and Sheet Music",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5734",
        Description: "Computer Software Stores",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5735",
        Description: "Record Shops",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5811",
        Description: "Caterers",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5812",
        Description: "Eating Places and Restaurants",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5813",
        Description:
          "Bars, Cocktail Lounges, Discotheques, Nightclubs and Taverns–Drinking Places (Alcoholic Beverages)",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5814",
        Description: "Fast Food Restaurants",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5815",
        Description: "Digital Goods: Books, Movies, Music",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5816",
        Description: "Digital Goods: Games",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5817",
        Description: "Digital Goods: Applications (Excludes Games)",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5818",
        Description:
          "Digital Goods: Large Digital Goods Merchant (V) / Digital Goods: Multi-Category (M)",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5912",
        Description: "Drug Stores and Pharmacies",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5921",
        Description: "Package Stores–Beer, Wine and Liquor",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5931",
        Description: "Second Hand Stores, Used Merchandise Stores",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5932",
        Description: "Antique Shops–Sales, Repairs and Restoration Services",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5933",
        Description: "Pawn Shops",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5935",
        Description: "Wrecking and Salvage Yards",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5937",
        Description: "Antique Reproduction Stores",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5940",
        Description: "Bicycle Shops–Sales and Service",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5941",
        Description: "Sporting Goods Stores",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5942",
        Description: "Book Stores",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5943",
        Description: "Office, School Supply and Stationery Stores",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5944",
        Description: "Clock, Jewelry, Watch and Silverware Stores",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5945",
        Description: "Game, Toy and Hobby Shops",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5946",
        Description: "Camera and Photographic Supply Stores",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5947",
        Description: "Card, Gift, Novelty and Souvenir Shops",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5948",
        Description: "Leather Goods and Luggage Stores",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5949",
        Description: "Fabric, Needlework, Piece Goods and Sewing Stores",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5950",
        Description: "Crystal and Glassware Stores",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5960",
        Description: "Direct Marketing Insurance Services",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5961",
        Description: "Mail Order Houses Including Catalog Order Stores",
        ValmccPaymentBrands: ["TSYS"],
      },
      {
        MCC: "5962",
        Description: "Direct Marketing–Travel Related Arrangement Services",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5963",
        Description: "Door-to-Door Sales",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5964",
        Description: "Direct Marketing–Catalog Merchants",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5965",
        Description: "Direct Marketing–Combination Catalog and Retail Merchant",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5966",
        Description: "Direct Marketing–Outbound Telemarketing Merchants",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5967",
        Description: "Direct Marketing–Inbound Telemarketing Merchants",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5968",
        Description: "Direct Marketing–Continuity/Subscription Merchants",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5969",
        Description:
          "Direct Marketing–Other Direct Marketers–Not Elsewhere Classified",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5970",
        Description: "Artist Supply Stores, Craft Shops",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5971",
        Description: "Art Dealers and Galleries",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5972",
        Description: "Stamp and Coin Stores–Philatelic and Numismatic Supplies",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5973",
        Description: "Religious Goods Stores",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5974",
        Description: "Rubber Stamp Store",
        ValmccPaymentBrands: ["TSYS"],
      },
      {
        MCC: "5975",
        Description: "Hearing Aids–Sales, Service, Supply Stores",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5976",
        Description: "Orthopedic Goods–Artificial Limb Stores",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5977",
        Description: "Cosmetic Stores",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5978",
        Description: "Typewriter Stores–Rentals, Sales, Service",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5983",
        Description: "Fuel Dealers–Coal, Fuel Oil, Liquefied Petroleum, Wood",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5992",
        Description: "Florists",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5993",
        Description: "Cigar Stores and Stands",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5994",
        Description: "News Dealers and Newsstands",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5995",
        Description: "Pet Shops, Pet Food and Supplies",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5996",
        Description: "Swimming Pools–Sales and Supplies",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5997",
        Description: "Electric Razor Stores–Sales and Service",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5998",
        Description: "Tent and Awning Shops",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "5999",
        Description: "Miscellaneous and Specialty Retail Stores",
        ValmccPaymentBrands: ["V", "M"],
      },

      {
        MCC: "6010",
        Description: "Member Financial Institution–Manual Cash Disbursements",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "6011",
        Description:
          "Member Financial Institution–Automated Cash Disbursements",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "6012",
        Description: "Member Financial Institution–Merchandise And Services",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "6050",
        Description: "Quasi Cash–Member Financial Institution",
        ValmccPaymentBrands: ["M"],
      },
      {
        MCC: "6051",
        Description: "Quasi Cash–Merchant",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "6211",
        Description: "Securities–Brokers and Dealers",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "6236",
        Description: "Aero Servicio Carabobo",
        ValmccPaymentBrands: ["TSYS"],
      },
      {
        MCC: "6300",
        Description: "Insurance Sales, Underwriting and Premiums",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "6381",
        Description: "Insurance–Premiums",
        ValmccPaymentBrands: ["TSYS"],
      },
      {
        MCC: "6513",
        Description: "Real Estate Agents and Managers–Rentals",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "6529",
        Description: "Remote Stored Value Load — Member Financial Institution",
        ValmccPaymentBrands: ["TSYS"],
      },
      {
        MCC: "6530",
        Description: "Remove Stored Value Load — Merchant",
        ValmccPaymentBrands: ["TSYS"],
      },
      {
        MCC: "6535",
        Description: "Value Purchase–Member Financial Institution",
        ValmccPaymentBrands: ["TSYS"],
      },
      {
        MCC: "6536",
        Description: "MoneySend Intracountry",
        ValmccPaymentBrands: ["M"],
      },
      {
        MCC: "6537",
        Description: "MoneySend Intercountry",
        ValmccPaymentBrands: ["M"],
      },
      {
        MCC: "6538",
        Description: "MoneySend Funding",
        ValmccPaymentBrands: ["M"],
      },
      {
        MCC: "6539",
        Description: "Funding Transaction (Excluding MoneySend)",
        ValmccPaymentBrands: ["M"],
      },
      {
        MCC: "6540",
        Description:
          "POI (Point of Interaction) Funding Transactions (Excluding MoneySend)",
        ValmccPaymentBrands: ["M"],
      },
      {
        MCC: "6611",
        Description: "Overpayments",
        ValmccPaymentBrands: ["TSYS"],
      },
      {
        MCC: "6760",
        Description: "Savings Bonds",
        ValmccPaymentBrands: ["TSYS"],
      },
      {
        MCC: "7011",
        Description: "Lodging–Hotels, Motels, Resorts–not elsewhere classified",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7012",
        Description: "Timeshares",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7032",
        Description: "Sporting and Recreational Camps",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7033",
        Description: "Campgrounds and Trailer Parks",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7210",
        Description: "Cleaning, Garment and Laundry Services",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7211",
        Description: "Laundry Services–Family and Commercial",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7216",
        Description: "Dry Cleaners",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7217",
        Description: "Carpet and Upholstery Cleaning",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7221",
        Description: "Photographic Studios",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7230",
        Description: "Barber and Beauty Shops",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7251",
        Description:
          "Hat Cleaning Shops, Shoe Repair Shops, Shoe Shine Parlors",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7261",
        Description: "Funeral Service and Crematories",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7273",
        Description: "Dating Services",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7276",
        Description: "Tax Preparation Service",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7277",
        Description: "Debt, Marriage, Personal–Counseling Services",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7278",
        Description: "Buying/Shopping Clubs, Services",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7280",
        Description: "Hospital Patient-Personal Funds Withdrawal",
        ValmccPaymentBrands: ["TSYS"],
      },
      {
        MCC: "7295",
        Description: "Babysitting Services",
        ValmccPaymentBrands: ["TSYS"],
      },
      {
        MCC: "7296",
        Description: "Clothing Rental–Costumes, Uniforms and Formal Wear",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7297",
        Description: "Massage Parlors",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7298",
        Description: "Health and Beauty Spas",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7299",
        Description: "Other Services–Not Elsewhere Classified",
        ValmccPaymentBrands: ["V", "M"],
      },
    ],
  },
  {
    value: "7300–7999",
    label: "7300–7999 (Business Services)",
    mccCodes: [
      {
        MCC: "7311",
        Description: "Advertising Services",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7321",
        Description: "Consumer Credit Reporting Agencies",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7332",
        Description: "Blueprinting and Photocopying Services",
        ValmccPaymentBrands: ["TSYS"],
      },
      {
        MCC: "7333",
        Description: "Commercial Art, Graphics, Photography",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7338",
        Description: "Quick Copy, Reproduction and Blueprinting Services",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7339",
        Description: "Stenographic and Secretarial Support Services",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7342",
        Description: "Exterminating and Disinfecting Services",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7349",
        Description: "Cleaning and Maintenance, Janitorial Services",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7361",
        Description: "Employment Agencies and Temporary Help Services",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7372",
        Description:
          "Computer Programming, Data Processing and Integrated System Design Services",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7375",
        Description: "Information Retrieval Services",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7379",
        Description:
          "Computer Maintenance, Repair And Services–Not Elsewhere Classified",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7392",
        Description: "Consulting, Management and Public Relations Services",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7393",
        Description:
          "Detective Agencies, Protective Agencies, Security Services including Armored Cars, Guard Dogs",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7394",
        Description:
          "Equipment Rental and Leasing Services, Furniture Rental, Tool Rental",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7395",
        Description: "Photo Developing, Photofinishing Laboratories",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7399",
        Description: "Business Services Not Elsewhere Classified",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7512",
        Description: "Automobile Rental Agency–Not Elsewhere Classified",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7513",
        Description: "Truck Rental",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7519",
        Description: "Motor Home and Recreational Vehicle Rental",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7523",
        Description: "Automobile Parking Lots and Garages",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7524",
        Description:
          "Express Payment Service Merchants–Parking Lots and Garages",
        ValmccPaymentBrands: ["TSYS"],
      },
      {
        MCC: "7531",
        Description: "Automotive Body Repair Shops",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7534",
        Description: "Tire Retreading and Repair Shops",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7535",
        Description: "Automotive Paint Shops",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7538",
        Description: "Automotive Service Shops",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7542",
        Description: "Car Washes",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7549",
        Description: "Towing Services",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7622",
        Description: "Electronic Repair Shops",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7623",
        Description: "Air Conditioning and Refrigeration Repair Shops",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7629",
        Description: "Appliance Repair Shops, Electrical and Small",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7631",
        Description: "Clock, Jewelry and Watch Repair Shops",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7641",
        Description: "Furniture–Reupholstery, Repair and Refinishing",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7692",
        Description: "Welding Repair",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7699",
        Description: "Miscellaneous Repair Shops and Related Services",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7800",
        Description: "Government Owned Lottery",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7801",
        Description:
          "Government-Licensed Casinos (Online or Internet Gambling)",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7802",
        Description: "Government-Licensed Horse/Dog Racing",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7829",
        Description:
          "Motion Picture and Video Tape Production and Distribution",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7832",
        Description: "Motion Picture Theaters",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7833",
        Description: "Express Payment Service — Motion Picture Theater",
        ValmccPaymentBrands: ["TSYS"],
      },
      {
        MCC: "7841",
        Description: "DVD/Video Tape Rental Stores",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7911",
        Description: "Dance Halls, Schools and Studios",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7922",
        Description:
          "Theatrical Producers (Except Motion Pictures), Ticket Agencies",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7929",
        Description:
          "Bands, Orchestras and Miscellaneous Entertainers–Not Elsewhere Classified",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7932",
        Description: "Pool and Billiard Establishments",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7933",
        Description: "Bowling Alleys",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7941",
        Description:
          "Athletic Fields, Commercial Sports, Professional Sports Clubs, Sports Promoters",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7991",
        Description: "Tourist Attractions and Exhibits",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7992",
        Description: "Golf Courses, Public",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7993",
        Description: "Video Amusement Game Supplies",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7994",
        Description: "Video Game Arcades and Establishments",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7995",
        Description:
          "Gambling Transactions Betting (Sportsbook, fantasy, social gaming; when regulated and not covered by other MCCs) (D)",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7996",
        Description:
          "Amusement Parks, Carnivals, Circuses, Carnivals, Fortune Tellers",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7997",
        Description:
          "Clubs–Country Clubs, Membership (Athletic, Recreation, Sports), Private Golf Courses",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7998",
        Description: "Aquariums, Dolphinariums, Zoos and Seaquariums",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "7999",
        Description: "Recreation Services–Not Elsewhere Classified",
        ValmccPaymentBrands: ["V", "M"],
      },
    ],
  },
  {
    value: "8000–8999",
    label: "8000–8999 (Professional Services and Membership Organizations)",
    mccCodes: [
      {
        MCC: "8011",
        Description: "Doctors–not elsewhere classified",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "8021",
        Description: "Dentists and Orthodontists",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "8031",
        Description: "Osteopathic Physicians",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "8041",
        Description: "Chiropractors",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "8042",
        Description: "Optometrists and Ophthalmologists",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "8043",
        Description: "Opticians, Optical Goods and Eyeglasses",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "8044",
        Description: "Optical Goods and Eyeglasses",
        ValmccPaymentBrands: ["TSYS"],
      },
      {
        MCC: "8049",
        Description: "Chiropodists, Podiatrists",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "8050",
        Description: "Nursing and Personal Care Facilities",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "8062",
        Description: "Hospitals",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "8071",
        Description: "Dental and Medical Laboratories",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "8099",
        Description:
          "Health Practitioners, Medical Services–Not Elsewhere Classified",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "8111",
        Description: "Attorneys, Legal Services",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "8211",
        Description: "Schools, Elementary and Secondary",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "8220",
        Description:
          "Colleges, Universities, Professional Schools and Junior Colleges",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "8241",
        Description: "Schools, Correspondence",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "8244",
        Description: "Schools, Business and Secretarial",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "8249",
        Description: "Schools, Trade and Vocational",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "8299",
        Description:
          "Schools And Educational Services–Not Elsewhere Classified",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "8351",
        Description: "Child Care Services",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "8398",
        Description: "Organizations, Charitable and Social Service",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "8641",
        Description: "Associations–Civic, Social and Fraternal",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "8651",
        Description: "Organizations, Political",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "8661",
        Description: "Organizations, Religious",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "8675",
        Description: "Automobile Associations",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "8699",
        Description: "Organizations, Membership–Not Elsewhere Classified",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "8734",
        Description: "Testing Laboratories (Non-Medical)",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "8743",
        Description: "Testing Laboratories (Non-Medical)",
        ValmccPaymentBrands: ["TSYS"],
      },
      {
        MCC: "8911",
        Description: "Architectural, Engineering and Surveying Services",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "8931",
        Description: "Accounting, Auditing and Bookkeeping Services",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "8999",
        Description: "Professional Services–Not Elsewhere Classified",
        ValmccPaymentBrands: ["V", "M"],
      },
    ],
  },
  {
    value: "9000–9999",
    label: "9000–9999 (Government Services)",
    mccCodes: [
      {
        MCC: "9034",
        Description: "I-Purchasing Pilot",
        ValmccPaymentBrands: ["TSYS"],
      },
      {
        MCC: "9211",
        Description: "Court Costs Including Alimony and Child Support",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "9222",
        Description: "Fines",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "9223",
        Description: "Bail and Bond Payments",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "9311",
        Description: "Tax Payments",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "9399",
        Description: "Government Services–Not Elsewhere Classified",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "9401",
        Description: "I-Purchasing Pilot",
        ValmccPaymentBrands: ["TSYS"],
      },
      {
        MCC: "9402",
        Description: "Postal Services–Government Only",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "9405",
        Description: "Intra-Government Purchases–Government Only",
        ValmccPaymentBrands: ["V", "M"],
      },
      {
        MCC: "9700",
        Description: "Automated Referral Service",
        ValmccPaymentBrands: ["V"],
      },
      {
        MCC: "9701",
        Description: "Visa Credential Server",
        ValmccPaymentBrands: ["V"],
      },
      {
        MCC: "9702",
        Description: "GCAS Emergency Services",
        ValmccPaymentBrands: ["V"],
      },
      {
        MCC: "9751",
        Description: "UK Supermarkets, Electronic Hot File",
        ValmccPaymentBrands: ["TSYS"],
      },
      {
        MCC: "9752",
        Description: "UK Petrol Stations, Electronic Hot File",
        ValmccPaymentBrands: ["TSYS"],
      },
      {
        MCC: "9754",
        Description: "Gambling-Horse, Dog Racing, State Lottery",
        ValmccPaymentBrands: ["M"],
      },
      {
        MCC: "9950",
        Description: "Intra-Company Purchases",
        ValmccPaymentBrands: ["V", "M"],
      },
    ],
  },
];
