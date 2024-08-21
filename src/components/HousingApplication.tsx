interface ApplicationDataProp {
  applicatioData: {
    type: string;
    data: string;
  };
}
function HousingApplication({ applicatioData }: ApplicationDataProp) {
  return (
    <div className="h-[50px] px-5  grid grid-cols-3 items-center justify-center border-[1px] border-white bg-gradient-to-r from-[#FFFFFF80]  to-[#FFFFFF] rounded-xl  drop-shadow-[2px_2px_rgba(0,0,0,.07)] ">
      <div className="text-[#323438] text-[.6875rem]  col-span-2 leading-[12.89px]">
        {applicatioData.type}
      </div>
      <div className="text-[#CBA344] text-[1.25rem] font-[700] col-span-1 flex justify-end">
        {applicatioData.data}
      </div>
    </div>
  );
} 






export default HousingApplication;
