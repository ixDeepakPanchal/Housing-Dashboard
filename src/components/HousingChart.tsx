import HousingApplication from "./HousingApplication";
import Chart from "react-apexcharts";
import houseIcon from "../assets/houseIcon.svg";

function HousingChart() {
  const applicationData = [
    { type: "Housing Assistance Grant Application", data: "2910" },
    { type: "Housing Assistance Loan Applications", data: "1685" },
    { type: "Financial Assistance Grant Applications", data: "972" },
    { type: "Financial Assistance Loan Applications", data: "2386" },
    {
      type: " Financial Assistance Housing Financing Applications",
      data: "2427",
    },
    { type: "Housing Assistance Grant Applications", data: "861" },
  ];
  return (
    <div className="min-h-[431px] py-10 flex flex-col md:flex-row justify-between md:justify-center gap-3 px-7 items-center bg-gradient-to-r from-[#F9F7ED] to-[#EFFBFE] rounded-[1.25rem] ">
      <div className="min-h-[341px] xl:min-w-[274px] grid grid-cols-1 gap-2 p-4 rounded-xl shadow-md shadow-[#00000007] bg-white">
        <div className="grid grid-cols-6 gap-2 items-center">
          <div className="h-[40px] w-full   col-span-1 bg-[#cba24444] rounded-[5px] flex justify-center items-center">
            <img
              className="h-[60%] object-contain "
              src={houseIcon}
              alt="404"
            />
          </div>
          <div className="col-span-5">
            <div className=" text-[.75rem] text-[#323438] font-[500]">
              Total Housing Applications Received
            </div>
            <div className="grid grid-cols-4  text-[#8D8E90]  ">
              <div className="col-span-1 text-[.5rem]">
                Mobile : <span className="text-[.5rem]">200</span>
              </div>
              <div className="col-span-1 text-[.5rem]">
                User : <span className="text-[.5rem]">200</span>
              </div>
              <div className="col-span-2 text-[.5rem]">
                Customer Service : <span className="text-[.5rem]">200</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-[#92722A] text-[2.25rem] text-center  font-[700] leading-10">
          10,340
        </div>
        <div>
          <Chart
            type="area"
            series={[
              { name: "", data: [634, 300, 889, 1000], color: "#CBA344" },
            ]}
            options={{
              chart: {
                toolbar: {
                  show: false,
                },
              },
              stroke: {
                width: 1,
                colors: ["#92722A"],
                curve: "smooth",
              },
              tooltip: {
                style: { fontSize: ".625rem" },
                enabled: true,
              },
              dataLabels: {
                enabled: false,
              },
              xaxis: {
                labels: {
                  show: false,
                },
              },
              yaxis: {
                labels: {
                  show: false,
                },
              },
              fill: {
                gradient: {
                  gradientToColors: [
                    "#CBA34400",
                    "#CBA34400",
                    "#CBA34400",
                    "#CBA34400",
                  ],
                },
              },
            }}
          ></Chart>
        </div>
        <div className="text-[.625rem] leading-3 h-[1.25rem] mx-6 text-center">
          Total No. of Housing Applications Received over the year 2024
        </div>
      </div>
      <div className="h-[341px] xl:min-w-[274px]  grid grid-cols-1 gap-2  ">
        {applicationData.map((item) => (
          <HousingApplication applicatioData={item}></HousingApplication>
        ))}
      </div>
    </div>
  );
}

export default HousingChart;
