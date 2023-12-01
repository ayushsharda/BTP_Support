const SidePanel = () => {
  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md bg-[#635985]">
      <div className="flex items-center justify-between">
        <p className="text__para mt-0 font-extrabold text-white"> Prices</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-white font-extrabold">
          Rs 100
        </span>
      </div>

      <div className="mt-[30px]">
        <p className="text__para mt-0 font-extrabold text-black">
          Available Time Slots:
        </p>

        <ul className="mt-3">
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-white font-semibold">
              Monday
            </p>
            <p className="text-[15px] leading-6 text-white font-semibold">
              1:00 PM - 5:00 PM
            </p>
          </li>
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-white font-semibold">
              Thursday
            </p>
            <p className="text-[15px] leading-6 text-white font-semibold">
            1:00 PM - 5:00 PM
            </p>
          </li>
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-white font-semibold">
              Saturday
            </p>
            <p className="text-[15px] leading-6 text-white font-semibold">
            1:00 PM - 5:00 PM
            </p>
          </li>
        </ul>
      </div>

      <button className="btn px-2 w-full rounded-md">Contact to Schedule your Session</button>
    </div>
  );
};

export default SidePanel;
