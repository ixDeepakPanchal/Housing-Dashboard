export type stepData = {
  title: string;
  data: string;
  icon: string;
  icon2?: string;
};
interface DataProp {
  stepData: stepData;
}

function Assistance({ stepData }: DataProp) {
  return (
    <div className=" grid grid-cols-6 h-[56px] w-full gap-[.9375rem] bg-[#F7F4EC] border-[1px] border-[#CBA344] rounded-[.625rem] justify-start items-center px-3 flex-1">
      <div className="relative size-8 bg-[#CBA344] col-span-1 rounded-md flex justify-center items-center text-white">
        {stepData.icon2 ? (
          stepData.title == "House Delivery Completed" ? (
            <>
              <img
                className="absolute bottom-2 w-5"
                src={stepData.icon}
                alt="404"
              />
              <img
                className="absolute size-[10px] right-[6px] top-1 "
                src={stepData.icon2}
                alt=""
              />
            </>
          ) : (
            <>
              <img src={stepData.icon} alt="404" />
              <img
                className="absolute last:size-3 right-1 top-[9px]"
                src={stepData.icon2}
                alt=""
              />
            </>
          )
        ) : (
          <img src={stepData.icon} alt="404" />
        )}
      </div>
      <div className="h-9 grid grid-rows-2 items-center col-span-5">
        <div className="text-[.75rem] text-[#323438] ">{stepData.title}</div>
        <div className="text-[#CBA344] text-[.875rem] font-semibold">
          {stepData.data}
        </div>
      </div>
      <div className="absolute border-[1px] size-[21px] right-[-12px] rounded-lg border-[#CBA344] bg-white">
        
      </div>
    </div>
  );
}

export default Assistance;
