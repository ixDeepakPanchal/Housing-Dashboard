import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
interface CityDataProp {
  applicationCity: {
    city: string;
    data: string;
  };
}

function CityApplication({ applicationCity }: CityDataProp) {
  return (
    <div className="max-h-[70px]  xl:min-w-[136px]  grid grid-rows-2 gap-2 rounded-[6px]  border-l-[4px] border-[#CBA344]  bg-[#F9F7ED] p-[.9375rem] sm:px-8 xl:px-2">
      <div className="text-[1.25rem] leading-6 text-[#CBA344] font-bold">
        {applicationCity.data}
      </div>
      <div className="grid grid-cols-5  ">
        <div className="col-span-4 text-[.75rem] leading-[14px] text-[#323438]"> {applicationCity.city}</div>
        <Link to={"/applications"} className="col-span-1 bg-gradient-to-r from-[#826515] to-[#B68A35]  rounded-full text-[#F9F7ED] size-[1.125rem] flex justify-center items-center hover:cursor-pointer">
          <FaArrowRight className="text-[.625rem] " />
        </Link >
      </div>
    </div>
  );
}

export default CityApplication;
