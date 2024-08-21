import { FiChevronRight } from "react-icons/fi";
import HousingChart from "./HousingChart";
import HousingMap from "./HousingMap";
import ApplicationAccordion from "./ApplicationAccordion";

function Home() {
  return (
    <div className=" flex flex-col gap-[.9375rem] sm:px-8 p-4">
      <div className=" flex justify-between items-center">
        <div className="font-[700] text-[1.125rem] text-[#323438]">
          Housing Dashboard
        </div>
        <div className="flex gap-[3px] ">
          <div className="text-[#8D8E90] text-[.75rem]">Home</div>

          <FiChevronRight className="size-[15px]  text-[#8D8E90] " />

          <div className="text-[#323438] text-[.75rem]">Housing Dashboard</div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-[.9375rem]">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <HousingChart></HousingChart>
          <HousingMap></HousingMap>
        </div>
        <div className="p-[20px] rounded-[1.25rem] shadow-md shadow-[#82828236]  border-[#b68b3546] ">
          <div className="">
            <div className="text-[.875rem] font-[700] text-[#323438] ">
              Applications Lifecycle
            </div>
            <div className="text-[.75rem] text-[#8D8E90] ">
            Stages of an application based on the type of application 
            </div>
          </div>
          <ApplicationAccordion></ApplicationAccordion>{" "}
        </div>
      </div>
    </div>
  );
}

export default Home;
