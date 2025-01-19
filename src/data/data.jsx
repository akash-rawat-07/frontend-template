export const newTenderModalSections = {
  title: "Starting New Tender",
  chooseModalTitle: "Choose Method",
  desc: "Choose to enter details manually or connect via the GEM/NIC Portal.",
  manual: {
    title: "Start manually",
    description: "Manually input details & upload documents.",
    totalSteps: 5,
  },
  automatic: {
    title: "Use GEM/NIC",
    description: "Enter your credentials to fetch data & documents. ",
    totalSteps: 2,
  },
};

export const selectParamtersData = {
  "Goods": [
    {
      displayName: "Gst No.",
      value: "gstnumber"
    },
    {
      displayName: "Address of Bidder",
      value: "addressofbidder"
    },
    {
      displayName: "PAN No.",
      value: "pannumbdr"
    },
  ],
  "Services": [
    {
      displayName: "Service Item 1",
      value: "serviceitem1"
    },
    {
      displayName: "Service Item 2",
      value: "serviceitem2"
    },
    {
      displayName: "Service Item 3",
      value: "serviceitem3"
    },
  ],
  "Transportation": [
    {
      displayName: "Transportation Item 1",
      value: "transportationitem1"
    },
    {
      displayName: "Transportation Item 2",
      value: "transportationitem2"
    },
    {
      displayName: "Transportation Item 3",
      value: "transportationitem3"
    },
  ],
  "Capex": [
    {
      displayName: "Capex Item 1",
      value: "capexitem1"
    },
    {
      displayName: "Capex Item 2",
      value: "capexitem2"
    },
    {
      displayName: "Capex Item 3",
      value: "capexitem3"
    },
  ],
}
