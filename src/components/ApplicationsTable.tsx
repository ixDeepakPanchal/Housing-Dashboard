import {
  MaterialReactTable,
  createMRTColumnHelper,
} from "material-react-table";
type ColumnData = {
  seq_No: number;
  application_No: number;
  application_Name: string;
  emirate: string;
  family_No: number;
  submitted_Date: string;
  expiry_Date: string;
  status: string;
};

function ApplicationsTable() {
  const data: ColumnData[] = [
    {
      seq_No: 1,
      application_No: 1026792,
      application_Name: "Muhammad Hassan",
      emirate: "Ajman",
      family_No: 1706,
      submitted_Date: "22-10-23",
      expiry_Date: "04-11-23",
      status: "Under Review",
    },
    {
      seq_No: 2,
      application_No: 1057839,
      application_Name: "Nadia Malik",
      emirate: "Sharjah",
      family_No: 2388,
      submitted_Date: "22-10-23",
      expiry_Date: "04-11-23",
      status: "Under Review",
    },

    {
      seq_No: 3,
      application_No: 1162431,
      application_Name: "Abdul Qadir",
      emirate: "Al Quwain",
      family_No: 3784,
      submitted_Date: "22-10-23",
      expiry_Date: "04-11-23",
      status: "Under Review",
    },

    {
      seq_No: 4,
      application_No: 1218362,
      application_Name: "Mohammad Taqi",
      emirate: "Abu Dhabi",
      family_No: 1706,
      submitted_Date: "22-10-23",
      expiry_Date: "04-11-23",
      status: "Under Review",
    },

    {
      seq_No: 5,
      application_No: 1026792,
      application_Name: "Sabira Khan",
      emirate: "Ajman",
      family_No: 2388,
      submitted_Date: "22-10-23",
      expiry_Date: "04-11-23",
      status: "Under Review",
    },
    {
      seq_No: 6,
      application_No: 1057839,
      application_Name: "Rashid",
      emirate: "Fujairah",
      family_No: 3784,
      submitted_Date: "22-10-23",
      expiry_Date: "04-11-23",
      status: "Under Review",
    },
    
  ];
  const columnHelper = createMRTColumnHelper<ColumnData>();
  const column = [
    columnHelper.accessor("seq_No", { header: "Seq No", size: 50 }),
    columnHelper.accessor("application_No", {
      header: "Application No",
    }),
    columnHelper.accessor("application_Name", {
      header: "Application Name",
    }),
    columnHelper.accessor("emirate", { header: "Emirate" }),
    columnHelper.accessor("family_No", { header: "Family No" }),
    columnHelper.accessor("submitted_Date", {
      header: "Submitted Date",
    }),
    columnHelper.accessor("expiry_Date", { header: "Expiry Date" }),
    columnHelper.accessor("status", { header: "Status" }),
  ];

  return (
    <MaterialReactTable  
      columns={column}
      data={data}
      enableToolbarInternalActions={false}
    />
  );
}

export default ApplicationsTable;
