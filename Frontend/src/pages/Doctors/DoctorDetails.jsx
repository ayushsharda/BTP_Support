import { useState } from "react";

import doctorImg from "../../assets/images/doctor-img02.jpg";
import starIcon from "../../assets/images/Star.png";
import DoctorAbout from "./DoctorAbout";
import Feedback from "./Feedback";
import SidePanel from "./SidePanel";

const DoctorDetails = () => {
  const [tab, setTab] = useState("about");

  return (
    <section style={{ backgroundColor: "#635985" }}>
      <div className="max-w-[1170px] px-5 mx-auto text-white">
        <div className="grid md:grid-cols-3 gap-[50px] text-white">
          <div className="md:col-span-2 text-white">
            <div className="flex items-center gap-5 text-white">
              <figure className="max-w-[200px] max-h-[200px] text-white">
                <img src={doctorImg} alt="" className="w-full" />
              </figure>

              <div>
                <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                  Mentor
                </span>
                <h3 className="text-white text-[22px] leading-9 mt-3 font-bold">
                  Ayush Sharda
                </h3>
                <div className="flex items-center gap-[6px]">
                  <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-white">
                    <img src={starIcon} alt="" /> 4.8
                  </span>
                  <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-white">
                    (272)
                  </span>
                </div>

                <p className="text__para text-white text-[14px] leading-6 md:text-[15px] lg:max-w-[390px]">
                We provide Stronger system to take care of everyone along with expert and well protected care for everyone.
                </p>

                <p className="text__para text-white">
            You can schedule your appointment using Contact details.
            </p>
              </div>
            </div>

            <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
              <button
                onClick={() => setTab("about")}
                className={`${
                  tab === "about" && "border-b border-solid border-primaryColor"
                } py-2 px-5 mr-5 text-[16px] leading-7 text-white font-semibold`}
              >
                About
              </button>
              <button
                onClick={() => setTab("feedback")}
                className={`${
                  tab === "feedback" &&
                  "border-b border-solid border-primaryColor"
                } py-2 px-5 mr-5 text-[16px] leading-7 text-white font-semibold`}
              >
                Feedback
              </button>
            </div>

            <div className="mt-[50px]">
              {tab === "about" && <DoctorAbout />}
              {tab === "feedback" && <Feedback />}
            </div>
          </div>

          <div>
            <SidePanel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetails;
