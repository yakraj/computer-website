var Used = {
  property: "Two",
  title: "Used Duration",
  Item: [
    {
      property: "Picker",
      find: "UsedYears",
      SetOn: "setUsedYears",
      items: ["0 Year", "1 Year", "2 Year", "3 Year", "4 Year", "5 Year +"],
    },
    {
      property: "Picker",
      find: "UsedMonths",
      SetOn: "setUsedMonths",
      items: [
        "0 Months",
        "1 Months",
        "2 Months",
        "3 Months",
        "4 Months",
        "5 Months",
        "6 Months",
        "7 Months",
        "8 Months",
        "9 Months",
        "10 Months",
        "11 Months",
      ],
    },
  ],
};
var PetGenerator = {
  property: "Picker",
  title: "Pet Gender",
  find: "PetGender",
  SetOn: "setPetGender",
  items: ["select", "Male", "Female"],
  labelDesc: "Gender of your pet.",
};
var PetAge = {
  property: "Two",
  title: "Pet Age",
  Item: [
    {
      property: "Picker",
      find: "UsedYears",
      SetOn: "setUsedYears",
      items: ["0 Year", "1 Year", "2 Year", "3 Year", "4 Year", "5 Year +"],
    },
    {
      property: "Picker",
      find: "UsedMonths",
      SetOn: "setUsedMonths",
      items: [
        "0 Months",
        "1 Months",
        "2 Months",
        "3 Months",
        "4 Months",
        "5 Months",
        "6 Months",
        "7 Months",
        "8 Months",
        "9 Months",
        "10 Months",
        "11 Months",
      ],
    },
  ],
};

const CarParking = {
  property: "Radio",
  find: "CarParking",
  title: "Car Parking",
  SetOn: "setCarParking",
  items: ["Not Available", "1", "2", "3", "4", "5+"],
};

const DisplayDevice = {
  property: "Two",
  title: "Display Information",
  Item: [
    {
      property: "Text",
      maxLength: 10,
      SetOn: "setMonitorSize",
      find: "MonitorSize",
      keytype: "default",
      placeholder: "Eg: 19 Inch",
      labelDesc: "Display Size of your Device. (Eg: 15 Inch, 23 Inch)",
    },
    {
      property: "Picker",
      labelDesc: "Type of your visual device.",
      find: "MonitorType",
      SetOn: "setMonitorType",
      items: [
        "select",
        "LED",
        "LCD",
        "IPS",
        "CRT",
        "OLED",
        "Plasma Monitor",
        "Other",
      ],
    },
  ],
};

const Brand = {
  property: "Text",
  maxLength: 50,
  title: "Brand",
  SetOn: "setBrandname",
  find: "Brandname",
  keytype: "default",
  placeholder: "Brand Name",
  labelDesc: "Brand of your Item.",
};

const CarBrand = {
  property: "Text",
  maxLength: 30,
  title: "Brand",
  SetOn: "setVehicleBrand",
  find: "VehicleBrand",
  keytype: "default",
  placeholder: "Vehicle Brand Name. ",
};
const VehicleModel = {
  property: "Text",
  title: "Model",
  maxLength: 30,
  SetOn: "setVehicleModel",
  find: "VehicleModel",
  keytype: "default",
  placeholder: "Model Name of your Vehicle.",
};
const VehicleYear = {
  property: "Text",
  title: "Year",
  maxLength: 15,
  SetOn: "setVehicleYear",
  find: "VehicleYear",
  keytype: "default",
  placeholder: "2015 June",
};
const VehicleDriven = {
  property: "Text",
  title: "KM Driven",
  maxLength: 7,
  SetOn: "setKmDriver",
  find: "KmDriver",
  keytype: "numeric",
  placeholder: "Total Driven KM of your vehicle.",
};

const ComputerProcessor = {
  property: "Text",
  title: "Processor",
  maxLength: 40,
  placeholder: "Eg: Intel",
  SetOn: "setComputerProcessor",
  find: "ComputerProcessor",
  keytype: "default",
  labelDesc: "Processor of Your Computer (ex: Intel, AMD)",
};
const ComputerRam = {
  property: "Text",
  maxLength: 20,
  maxLength: 15,
  title: "Ram",
  SetOn: "setComputerRam",
  find: "ComputerRam",
  keytype: "default",
  placeholder: "Eg: 4 GB",
  labelDesc: "Available RAM on your device. (ex: 2GB, 4GB)",
};
const ComputerStorage = {
  property: "Two",
  title: "Storage",
  Item: [
    {
      property: "Text",
      SetOn: "setComputerStorage",
      find: "ComputerStorage",
      maxLength: 15,
      keytype: "number-pad",
      placeholder: "Eg: 500 GB",
      labelDesc: "Available Storage on your computer (ex: 500GB, 1000GB)",
    },
    {
      property: "Picker",
      find: "ComputerStorageType",
      SetOn: "setComputerStorageType",
      items: ["select", "HDD", "SSD", "Other"],
      labelDesc: "Storage type of your computer.",
    },
  ],
};
const ComputerGraphicsCard = {
  property: "Two",
  title: "Graphics Card",
  Item: [
    {
      property: "Text",
      maxLength: 30,
      SetOn: "setComputerGraphics",
      find: "ComputerGraphics",
      keytype: "default",
      placeholder: "Eg: AMD",
      labelDesc: "Graphics Card of your computer (ex: Intel, NVIDIA, AMD, ...)",
    },

    {
      property: "Text",
      maxLength: 15,
      SetOn: "setComputerGraphicsMemory",
      find: "ComputerGraphicsMemory",
      keytype: "number-pad",
      placeholder: "Eg: 512 MB",
      labelDesc: "Graphics Card Memory (ex: 512MB, 2GB, ... )",
    },
  ],
};

export const Sellings = {
  sellApart: [
    {
      property: "Radio",
      find: "SelectedItem",
      title: "Property Type",
      SetOn: "setSelectedItem",
      items: ["Apartments", "Builder Floors", "Houses And Villas"],
    },
    // {
    //   property: "Two",
    //   title: "Selling Now",
    //   Item: [
    //     {
    //       property: "Text",
    //       title: "Super Buildup area (ft)",
    //       SetOn: "setBuildArea",
    //       keytype: "number-pad",
    //       placeholder: "your text here",
    //       labelDesc:
    //         "Is that your real Building, you have to think again and again.",
    //     },
    //     {
    //       property: "Picker",
    //       find: "facingDropdown",
    //       title: "Facing",
    //       SetOn: "setFacingDropdown",
    //       items: [
    //         "select",
    //         "north",
    //         "north-east",
    //         "north-west",
    //         "south",
    //         "south-east",
    //         "south-west",
    //         "west",
    //       ],
    //       labelDesc:
    //         "Is that your real Building, you have to think again and again.",
    //     },
    //   ],
    // },

    {
      property: "Radio",
      find: "Furnishing",
      title: "Furnishing",
      SetOn: "setFurnishing",
      items: ["Furnished", "Semi Furnished", "Unfurnished"],
    },
    {
      property: "Radio",
      find: "Bedrooms",
      title: "Bedrooms",
      SetOn: "setBedrooms",
      items: ["1", "2", "3", "4", "5+"],
    },
    {
      property: "Radio",
      find: "Bathrooms",
      title: "Bathrooms",
      SetOn: "setBathrooms",
      items: ["1", "2", "3", "4", "5+"],
    },
    {
      property: "Radio",
      find: "ConstructionStatus",
      title: "Construction Status",
      SetOn: "setConstructionStatus",
      items: ["New Launch", "Ready To Move", "Under Construction"],
    },
    {
      property: "Radio",
      find: "ListedBy",
      title: "Listed By",
      SetOn: "setListedBy",
      items: ["Builder", "Dealer", "Owner"],
    },

    {
      property: "Text",
      title: "Super Buildup area (ft)",
      SetOn: "setBuildArea",
      find: "BuildArea",
      keytype: "number-pad",
      placeholder: "your text here",
    },
    {
      property: "Text",
      title: "Carpet Area (ft)",
      SetOn: "setCarpetArea",
      find: "CarpetArea",
      keytype: "number-pad",
      placeholder: "your text here",
    },
    {
      property: "Text",
      title: "Maintenance (Monthly)",
      SetOn: "setBuildArea",
      find: "BuildArea",
      keytype: "number-pad",
      placeholder: "your text here",
    },
    {
      property: "Text",
      title: "Total Floors",
      SetOn: "setBuildArea",
      find: "BuildArea",
      keytype: "number-pad",
      placeholder: "your text here",
    },
    {
      property: "Text",
      title: "Floor No",
      SetOn: "setBuildArea",
      find: "BuildArea",
      keytype: "number-pad",
      placeholder: "your text here",
    },
    CarParking,
    {
      property: "Picker",
      find: "facingDropdown",
      title: "Facing",
      SetOn: "setFacingDropdown",
      items: [
        "select",
        "north",
        "north-east",
        "north-west",
        "south",
        "south-east",
        "south-west",
        "west",
      ],
    },
    {
      property: "Text",
      title: "Project Name",
      SetOn: "setBuildArea",
      find: "BuildArea",
      keytype: "default",
      placeholder: "Name of the project",
    },
  ],
  rentApart: [
    {
      property: "Radio",
      find: "SelectedItem",
      title: "Property Type",
      SetOn: "setSelectedItem",
      items: ["Apartments", "Builder Floors", "Houses And Villas"],
    },

    {
      property: "Radio",
      find: "Furnishing",
      title: "Furnishing",
      SetOn: "setFurnishing",
      items: ["Furnished", "Semi Furnished", "Unfurnished"],
    },
    {
      property: "Radio",
      find: "Bedrooms",
      title: "Bedrooms",
      SetOn: "setBedrooms",
      items: ["1", "2", "3", "4", "5+"],
    },
    {
      property: "Radio",
      find: "Bathrooms",
      title: "Bathrooms",
      SetOn: "setBathrooms",
      items: ["1", "2", "3", "4", "5+"],
    },
    {
      property: "Radio",
      find: "ConstructionStatus",
      title: "Construction Status",
      SetOn: "setConstructionStatus",
      items: ["New Launch", "Ready To Move", "Under Construction"],
    },
    {
      property: "Radio",
      find: "ListedBy",
      title: "Listed By",
      SetOn: "setListedBy",
      items: ["Builder", "Dealer", "Owner"],
    },
    {
      property: "Radio",
      find: "Bachlors",
      title: "Bachlors Allowed",
      SetOn: "setBachlors",
      items: ["Yes", "No"],
    },

    {
      property: "Text",
      title: "Maintenance (Monthly)",
      SetOn: "setBuildArea",
      find: "BuildArea",
      keytype: "number-pad",
      placeholder: "your text here",
    },

    {
      property: "Text",
      title: "Floor No",
      SetOn: "setBuildArea",
      find: "BuildArea",
      keytype: "number-pad",
      placeholder: "your text here",
    },
    CarParking,
    {
      property: "Picker",
      find: "facingDropdown",
      title: "Facing",
      SetOn: "setFacingDropdown",
      items: [
        "select",
        "north",
        "north-east",
        "north-west",
        "south",
        "south-east",
        "south-west",
        "west",
      ],
    },
    {
      property: "Text",
      title: "Project Name",
      SetOn: "setBuildArea",
      find: "BuildArea",
      keytype: "default",
      placeholder: "Name of the project",
    },
  ],
  // Sell Shop and office
  sellshopoff: [
    {
      property: "Radio",
      find: "Furnishing",
      title: "Furnishing",
      SetOn: "setFurnishing",
      items: ["Furnished", "Semi Furnished", "Unfurnished"],
    },
    {
      property: "Radio",
      find: "ConstructionStatus",
      title: "Construction Status",
      SetOn: "setConstructionStatus",
      items: ["New Launch", "Ready To Move", "Under Construction"],
    },
    {
      property: "Radio",
      find: "ListedBy",
      title: "Listed By",
      SetOn: "setListedBy",
      items: ["Builder", "Dealer", "Owner"],
    },
    {
      property: "Text",
      title: "Washrooms",
      SetOn: "setWashrooms",
      find: "Washrooms",
      keytype: "number-pad",
      placeholder: "your text here",
    },

    {
      property: "Text",
      title: "Super Buildup area (ft)",
      SetOn: "setBuildArea",
      find: "BuildArea",
      keytype: "number-pad",

      placeholder: "your text here",
    },
    {
      property: "Text",
      title: "Carpet Area (ft)",
      SetOn: "setCarpetArea",
      find: "CarpetArea",
      keytype: "number-pad",
      placeholder: "your text here",
    },
    {
      property: "Text",
      title: "Maintenance (Monthly)",
      SetOn: "setBuildArea",
      find: "BuildArea",
      keytype: "number-pad",
      placeholder: "your text here",
    },

    {
      property: "Text",
      title: "Floor No",
      SetOn: "setBuildArea",
      find: "BuildArea",
      keytype: "number-pad",
      placeholder: "your text here",
    },
    CarParking,
    {
      property: "Picker",
      find: "facingDropdown",
      title: "Facing",
      SetOn: "setFacingDropdown",
      items: [
        "select",
        "north",
        "north-east",
        "north-west",
        "south",
        "south-east",
        "south-west",
        "west",
      ],
    },
    {
      property: "Text",
      title: "Project Name",
      SetOn: "setBuildArea",
      find: "BuildArea",
      keytype: "default",
      placeholder: "Name of the project",
    },
  ],
  // rent shop office
  rentshopoff: [
    {
      property: "Radio",
      find: "Furnishing",
      title: "Furnishing",
      SetOn: "setFurnishing",
      items: ["Furnished", "Semi Furnished", "Unfurnished"],
    },
    {
      property: "Radio",
      find: "ConstructionStatus",
      title: "Construction Status",
      SetOn: "setConstructionStatus",
      items: ["New Launch", "Ready To Move", "Under Construction"],
    },
    {
      property: "Radio",
      find: "ListedBy",
      title: "Listed By",
      SetOn: "setListedBy",
      items: ["Builder", "Dealer", "Owner"],
    },
    {
      property: "Text",
      title: "Washrooms",
      SetOn: "setWashrooms",
      find: "Washrooms",
      keytype: "number-pad",
      placeholder: "your text here",
    },

    {
      property: "Text",
      title: "Maintenance (Monthly)",
      SetOn: "setBuildArea",
      find: "BuildArea",
      keytype: "number-pad",
      placeholder: "your text here",
    },

    {
      property: "Text",
      title: "Floor No",
      SetOn: "setBuildArea",
      find: "BuildArea",
      keytype: "number-pad",
      placeholder: "your text here",
    },
    CarParking,
    {
      property: "Picker",
      find: "facingDropdown",
      title: "Facing",
      SetOn: "setFacingDropdown",
      items: [
        "select",
        "north",
        "north-east",
        "north-west",
        "south",
        "south-east",
        "south-west",
        "west",
      ],
    },
    {
      property: "Text",
      title: "Project Name",
      SetOn: "setBuildArea",
      find: "BuildArea",
      keytype: "default",
      placeholder: "Name of the project",
    },
  ],
  // Rent and Sell Land
  RentLand: [
    {
      property: "Radio",
      find: "ListedBy",
      title: "Listed By",
      SetOn: "setListedBy",
      items: ["Builder", "Dealer", "Owner"],
    },
    {
      property: "Text",
      title: "Plot Area (ft2)",
      SetOn: "setPlotArea",
      find: "PlotArea",
      keytype: "number-pad",
      placeholder: "Total Area of your Plot/Land",
    },

    {
      property: "Text",
      title: "Length (ft)",
      SetOn: "setPlotLength",
      find: "PlotLength",
      keytype: "number-pad",
      placeholder: "Length of your Plot/Land",
    },

    {
      property: "Text",
      title: "Breadth (ft)",
      SetOn: "setPlotBreadth",
      find: "PlotBreadth",
      keytype: "number-pad",
      placeholder: "Breadth  of your Plot/Land",
    },

    {
      property: "Picker",
      find: "facingDropdown",
      title: "Facing",
      SetOn: "setFacingDropdown",
      items: [
        "select",
        "north",
        "north-east",
        "north-west",
        "south",
        "south-east",
        "south-west",
        "west",
      ],
    },
    {
      property: "Text",
      title: "Project Name",
      SetOn: "setBuildArea",
      find: "BuildArea",
      keytype: "default",
      placeholder: "Name of the project",
    },
  ],
  // for paying Guest/ Guest House List
  payingGuest: [
    {
      property: "Radio",
      find: "Furnishing",
      title: "Furnishing",
      SetOn: "setFurnishing",
      items: ["Furnished", "Semi Furnished", "Unfurnished"],
    },
    {
      property: "Radio",
      find: "ListedBy",
      title: "Listed By",
      SetOn: "setListedBy",
      items: ["Builder", "Dealer", "Owner"],
    },
    {
      property: "Radio",
      find: "MealsInc",
      title: "Meals Included",
      SetOn: "setMealsInc",
      items: ["Yes", "No"],
    },
    CarParking,
  ],
  // for paying Guest House
  RoomMate: [
    {
      property: "Radio",
      find: "Furnishing",
      title: "Furnishing",
      SetOn: "setFurnishing",
      items: ["Furnished", "Semi Furnished", "Unfurnished"],
    },
    {
      property: "Radio",
      find: "ListedBy",
      title: "Listed By",
      SetOn: "setListedBy",
      items: ["Builder", "Dealer", "Owner"],
    },
    {
      property: "Radio",
      find: "MealsInc",
      title: "Meals Included",
      SetOn: "setMealsInc",
      items: ["Yes", "No"],
    },
    {
      property: "Radio",
      find: "SearchGender",
      title: "Searching For",
      SetOn: "setSearchGender",
      items: ["Male", "Female"],
    },
    {
      property: "Radio",
      find: "RoommateFor",
      title: "Roommate For",
      SetOn: "setRoommateFor",
      items: ["work", "Study", "Others"],
    },
    {
      property: "Radio",
      find: "AgeRange",
      title: "Roommate For",
      SetOn: "setAgeRange",
      items: [
        "12-15",
        "15-20",
        "20-25",
        "25-30",
        "30-35",
        "35-40",
        "40-45",
        "45-50",
      ],
    },
    CarParking,
  ],
  // for Sell Car
  sellCar: [
    CarBrand,
    VehicleModel,
    VehicleYear,

    {
      property: "Radio",
      find: "VehicleFuel",
      title: "Fuel",
      SetOn: "setVehicleFuel",
      items: ["CNG & Hybrids", "Diesel", "Petrol", "Electric", "LPG"],
    },
    {
      property: "Radio",
      find: "VehicleTransmission",
      title: "TransMission",
      SetOn: "setVehicleTransmission",
      items: ["Automatic", "Manual"],
    },
    VehicleDriven,
  ],
  // Vehicle parts
  VehicleParts: [
    {
      property: "Radio",
      find: "VehiclePartType",
      title: "Type",
      SetOn: "setVehiclePartType",
      items: [
        "Wheels & Tyres",
        "Audio and Other Accessories",
        "Enginee and Gears",
        "Oter Spare Parts",
      ],
    },
    {
      property: "Radio",
      find: "VehicleTransmission",
      title: "TransMission",
      SetOn: "setVehicleTransmission",
      items: ["Automatic", "Manual"],
    },
  ],
  // for used ThingssetUsedDuration
  UsedThings: [Used],
  //  For Jobs
  Jobs: [
    {
      property: "Radio",
      find: "SalaryPeriod",
      title: "Salary Period",
      SetOn: "setSalaryPeriod",
      items: ["Hourly", "Monthly", "weekly", "Yearly"],
    },
    {
      property: "Radio",
      find: "WorkPosition",
      title: "Position",
      SetOn: "setWorkPosition",
      items: ["Permanent", "Temporary", "Full Time", "Part Time", "Contact"],
    },
    {
      property: "Text",
      title: "Salary",
      SetOn: "setSalaryAmount",
      find: "SalaryAmount",
      keytype: "default",
      placeholder: "Approx Salary. Eg: 15000-25000",
    },
  ],
  // for Personal computer
  personalComputer: [
    ComputerProcessor,
    ComputerRam,
    ComputerStorage,
    ComputerGraphicsCard,
    {
      property: "Picker",
      find: "ComputerMonitorAvail",
      title: "Monitor",
      SetOn: "setComputerMonitorAvail",
      items: ["select", "Available", "Not Available"],
    },
    {
      property: "Radio",
      find: "ComputerAcc",
      title: "Included",
      SetOn: "setComputerAcc",
      items: ["Mouse & Keyboard", "Speackers", "All"],
    },
    Used,
  ],
  LaptopSell: [
    ComputerProcessor,
    ComputerRam,
    ComputerStorage,
    ComputerGraphicsCard,
    {
      property: "Text",
      maxLength: 10,
      title: "Size",
      SetOn: "setLaptopScreen",
      find: "LaptopScreen",
      keytype: "default",
      placeholder: "Eg: 15 Inch",
      labelDesc: "Screen size of your laptop. (Eg: 10 Inch, 14 Inch)",
    },

    {
      property: "Radio",
      find: "ComputerAcc",
      title: "Included",
      SetOn: "setComputerAcc",
      items: [
        "Mouse & Keyboard",
        "Speackers",
        "Not Available",
        "All Available",
      ],
    },
    Used,
  ],
  MonitorSell: [DisplayDevice, Used],
  CPU: [
    ComputerProcessor,
    ComputerRam,
    ComputerStorage,
    ComputerGraphicsCard,
    Used,
  ],
  withBrand: [Brand, Used],
  TvDevice: [Brand, DisplayDevice, Used],
  Mobile: [
    Brand,
    {
      property: "Text",
      maxLength: 15,
      title: "Display Size",
      SetOn: "setMonitorSize",
      find: "MonitorSize",
      keytype: "default",
      placeholder: "5.6 Inch",
      labelDesc: "Screen Size of your Device.",
    },
    {
      property: "Text",
      title: "Processor",
      maxLength: 30,
      SetOn: "setComputerProcessor",
      find: "ComputerProcessor",
      keytype: "default",
      placeholder: "Snapdragon 730g",
      labelDesc:
        "Processor of your device. (Eg. Snapdragon, MediaTek Helio, etc...)",
    },
    ComputerRam,
    {
      property: "Text",
      title: "Storage",
      SetOn: "setComputerStorage",
      find: "ComputerStorage",
      maxLength: 15,
      keytype: "default",
      placeholder: "64 GB",
      labelDesc: "Storage of Your Mobile (ex: 64GB, 32GB)",
    },
    {
      property: "Text",
      title: "Camera",
      SetOn: "setMobileCamera",
      find: "MobileCamera",
      maxLength: 10,
      keytype: "default",
      placeholder: "48 MP",
      labelDesc: "Cameras of your Mobile (ex: 13MP, 8MP)",
    },
    {
      property: "Text",
      title: "Battery",
      SetOn: "setMobilebattery",
      find: "Mobilebattery",
      maxLength: 15,
      keytype: "default",
      placeholder: "4500 mah",
      labelDesc: "Battery Capasity of Your Mobile (ex: 5000mah, 4300mah)",
    },
    {
      property: "Radio",
      find: "MobileOs",
      title: "Operationg System",
      SetOn: "setMobileOs",
      items: ["Android", "Apple IOS"],
    },
    Used,
  ],
  Motorcycle: [CarBrand, VehicleModel, VehicleYear, VehicleDriven],
  StorageDevice: [
    Brand,
    {
      property: "Two",
      title: "Storage",
      Item: [
        {
          property: "Text",
          SetOn: "setComputerStorage",
          find: "ComputerStorage",
          keytype: "number-pad",
          placeholder: "Eg: 500 GB",
          labelDesc: "Available Storage on your computer (ex: 500GB, 1000GB)",
        },
        {
          property: "Picker",
          find: "ComputerStorageType",
          SetOn: "setComputerStorageType",
          items: [
            "select",
            "HDD",
            "SSD",
            "floppy diskette",
            "magnetic strip",
            "SuperDisk",
            "SD Card",
            "Memory Card",
            "USB flash drive, jump drive or thumb drive",
            "Blu-ray disc",
            "CD-ROM disc",
          ],
          labelDesc: "Storage type of your computer.",
        },
      ],
    },
    Used,
  ],
  Printers: [
    Brand,
    {
      property: "Picker",
      find: "Printer",
      title: "Printer Type",
      SetOn: "setPrinter",
      items: [
        "select",
        "Laser Printers",
        "Solid Ink Printers",
        "Ink-Tank Printers",
        "LED Printers",
        "Business INKJet printers",
        "Home INKJet printers",
        "Multifunction printers",
        "DOT Matrix printers",
        "3D printers",
      ],
    },
    Used,
  ],
  Books: [
    {
      property: "Text",
      maxLength: 20,
      title: "Published Year",
      SetOn: "setBookyear",
      find: "Bookyear",
      keytype: "default",
      placeholder: "2020",
      labelDesc: "Published year of your book.",
    },
    {
      property: "Text",
      maxLength: 40,
      title: "Book Author",
      SetOn: "setBookAuthor",
      find: "BookAuthor",
      keytype: "default",
      labelDesc: "Author of the book.",
    },
  ],
  Fashion: [
    {
      property: "Text",
      title: "Cloth Size",
      SetOn: "setClothSize",
      find: "ClothSize",
      keytype: "default",
      placeholder: "Size",
      labelDesc: "Size of your Cloth. (ex: XL, XM, 36, 23, 29, ...)",
    },
  ],
  AnimalPet: [PetAge, PetGenerator],
  Aquarium: [PetAge],
  none: [],
};