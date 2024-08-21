import { Steps } from "antd";
import Assistance from "./Assistance";
import { useState } from "react";
import ApplicationsTable from "./ApplicationsTable";
import securityIcon from "../assets/securityReview.svg";
import meetingIcon from "../assets/meetingIcon.svg";
import qararReviewIcon from "../assets/qararReview.svg";
import requestStudy from "../assets/requestStudy.svg";
import fileInitiatedIcon from "../assets/fileInitiated.svg";
import fileCompletedIcon from "../assets/fileCompleted.svg";
import pencilIcon from "../assets/pencilIcon.svg"
import deliveryIcon from "../assets/delivery.svg";
import deleviryHouseIcon from "../assets/deliveryHouse.svg";
import { stepData } from "./Assistance";

interface prop {
  headerTitle : string
}

function ApplicationLifestyle({headerTitle}:prop) {
  const [current, setCurrent] = useState(0);
  const selectedIcon = [...Array(current + 1).keys()];
  const items: stepData[] = [
    {
      title: "Security Authority Review",
      data: "302",
      icon: securityIcon,
    },
    {
      title: "Request Study Team Review",
      data: "200",
      icon: requestStudy,
    },
    { title: "Meeting 1 Review", data: "140", icon: meetingIcon },
    { title: "Meeting 2 Review", data: "67", icon: meetingIcon },
    { title: "Qarar Review", data: "81", icon: qararReviewIcon },
    {
      title: "Open File Initiated",
      data: "427",
      icon: fileInitiatedIcon,
      icon2:pencilIcon
    },
    {
      title: "Open File Completed",
      data: "138",
      icon: fileCompletedIcon,
    },
    {
      title: "House Delivery Completed",
      data: "253",
      icon2: deleviryHouseIcon,
      icon:deliveryIcon

    },
  ];
  const onChange = (value: number) => {
    setCurrent(value);
  };
  return (
    <div className="">
      <div className="h-4 text-[.875rem] text-[#92722A] font-medium mb-[1.25rem]">
        {headerTitle}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-4 xl:gap-3">
        <div className="lg:col-span-1">
          <Steps
            labelPlacement="horizontal"
            current={current}
            onChange={onChange}
            size="small"
            className="sm:items-center"
            items={items.map((item, index) => ({
              icon: (
                <div
                  className={` size-6 border-[1px] rounded-full text-[10px] border-[#EAECF0]  font-medium flex items-center justify-center hover:border-[#cba344]  ${
                    selectedIcon.includes(index) &&
                    "bg-[#cba344] text-white border-[#EAECF0]"
                  }`}
                >
                  {index + 1}
                </div>
              ),
              style: { height: "70px" },
              title: <Assistance key={index} stepData={item} />,
            }))}
            direction="vertical"
          />
        </div>
        <div className="lg:col-span-3 grid grid-cols-1 gap-4 p-5 border-[1px] border-[#EAECF0] rounded-md">
          <div className=" text-[.875rem] text-[#92722A] font-medium ">
            Application under {items[current].title} ({items[current].data})
          </div>
          <ApplicationsTable></ApplicationsTable>
        </div>
      </div>
    </div>
  );
}

export default ApplicationLifestyle;
