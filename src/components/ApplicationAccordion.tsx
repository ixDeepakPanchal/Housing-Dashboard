import { Collapse } from "antd";
import ApplicationLifestyle from "./ApplicationLifestyle";
import { useState } from "react";

function ApplicationAccordion() {
  const [activeKey, setActiveKey] = useState("1");
  const items = [
    {
      key: "1",
      header: "Housing Assistance Applications",
      label: "Financial Assistance Housing Assistance Applications",

    },
    {
      key: "2",
      header: "Construct House Applications",
      label: "Financial Assistance Construct House Applications",

    },
    {
      key: "3",
      header: "Purchase House Application",
      label: "Financial Assistance Purchase House Application",

    },
    {
      key: "4",
      header: "Housing Finance Applications",
      label: "Financial Assistance Housing Finance Applications",

    },
  ];
  return (
    <Collapse
      accordion
      expandIconPosition="end"
      bordered={false}
      defaultActiveKey={1}
      className="bg-white"
      items={items.map((item) => ({
        key: item.key,
        label: activeKey !== item.key && (
          <p className="text-[.875rem] text-[#323438] font-medium py-3">
            {item.label}
          </p>
        ),
        children: <ApplicationLifestyle headerTitle={item.header}/>,
      }))}
      onChange={([key]) => {
        setActiveKey(key);
      }}
    ></Collapse>
  );
}

export default ApplicationAccordion;
