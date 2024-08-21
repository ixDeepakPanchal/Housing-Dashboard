import map from "../assets/map.png";
import CityApplication from "./CityApplication";

function HousingMap() {
  const applicationCity = [
    { city: "Ajman", data: "554" },
    { city: "Fujairah", data: "326" },
    { city: "Ras Al-Khaimah", data: "174" },
    { city: "Umm Al-Quwain", data: "144" },
  ];
  return (
    <div className=" sm:max-h-[431px]  p-[20px]   flex flex-col justify-between gap-3 rounded-[1.25rem] shadow-sm shadow-[#82828236]  border-[#b68b3546] ">
      <div className="">
        <div className="text-[.875rem] font-[700] text-[#323438] ">
          Total No. of Applications Received : {""}
          <span className="text-[#92722A] text-[.875rem]">1579</span>
        </div>
        <div className="text-[.75rem] text-[#8D8E90] ">
          Total no of housing applications received from active emirate
        </div>
      </div>
      <div className=" grid grid-cols-2 sm:grid-cols-4 gap-2">
        {applicationCity.map((item) => (
          <CityApplication applicationCity={item}></CityApplication>
        ))}
      </div>
      <div className="text-[.75rem] text-[#323438] font-bold">
        Total Housing Assistance Applications :{" "}
        <span className="text-[#92722A] text-[.75rem] font-bold">340</span>
      </div>
      <div className="">
        <img className=" h-[228px]  w-full object-cover  rounded-md" src={map} alt="" />
      </div>
    </div>
  );
}

export default HousingMap;
