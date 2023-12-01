import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

import heroImg01 from "../assets/images/home.jpg";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import featureImg from "../assets/images/feature-img.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import faqImg from "../assets/images/faq-img.png";
import ServiceList from "../components/Services/ServiceList";
import DoctorList from "../components/Doctors/DoctorList";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";
import { doctors } from "../assets/data/doctors";
import DoctorCard from "../components/Doctors/DoctorCard";

const Home = () => {
  return (
    <>
      {/*     hero section start     */}
      <section className="hero__section pt-[60px] 2xl:h-[800px] " style={{backgroundColor:"#393053"}}>
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/*    hero content     */}
            <div>
              <div className="lg: w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-white font-[800] md:text-[60px] md:leading-[70px]">
                Together We Stand Divided We Fall
                </h1>
                <p className="text__para text-white">
                  We Care, We Understand, We Listen
                </p>
                <p className="text__para text-white">
                  Book from various specialized and experieced mentors on your
                  convenience from any location.
                </p>
                
              </div>
              {/*    hero counter     */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-white">
                    20000+
                  </h2>
                  <span className="w-[100px] h-2 bg-green rounded-full block mt-[-14px]"></span>
                  <p className="text__para text-white">Stronger People</p>
                </div>
                {/* <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-white">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para text-white">Clinic Location</p>
                </div> */}
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-white">
                    100+
                  </h2>
                  
                  <p className="text__para text-white">Different Cities</p>
                </div>
              </div>
            </div>
            {/*    hero content end     */}

            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg01} alt="" />
              </div>
              {/*<div className="mt-[30px]">
                <img src={heroImg2} alt="" className="w-full mb-[30px]" />
                <img src={heroImg03} alt="" className="w-full" />
  </div>*/}
            </div>
          </div>
        </div>
      </section>
      {/*     hero section end     */}

      <section style={{backgroundColor:"#443C68"}}>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-white text-white text-center">
              Giving the Strongest Support services
            </h2>
            <p className="text__para text-white text-center">
            We provide Stronger system to take care of everyone along with expert and well protected care for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>
              <div className="mt-[30px] ">
                <h2 className="text-[26px] leading-9 text-white font-[700] text-center">
                  Find a Mentor
                </h2>
                <p className="text-[16px] leading-7 text-white font-[400] mt-4 text-center">
                  Search and book from various specialized and experieced
                  mentors based on your need.
                </p>
                <Link
                  to="/doctors"
                  className="text-white w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="text-white group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>
              <div className="mt-[30px] ">
                <h2 className="text-[26px] leading-9 text-white font-[700] text-center">
                  Find by Location
                </h2>
                <p className="text-[16px] leading-7 text-white font-[400] mt-4 text-center">
                  Search for a mentor of your need by specifying any location
                  that you want.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="text-white group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>
              <div className="mt-[30px] ">
                <h2 className="text-[26px] leading-9 text-white font-[700] text-center">
                  Book Appointment
                </h2>
                <p className="text-[16px] leading-7 text-white font-[400] mt-4 text-center">
                  Choose any appointment date and time slot of your own
                  convenience from anywhere using any device.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="text-white group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*   feature section start   */}
      <section style={{backgroundColor:"#635985"}}>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/*   feature content   */}
            <div className="xl:w-[670px]">
              <h2 className="heading text-white">
                Schedule your appointment <br /> anytime from anywhere.
              </h2>
              <ul className="pl-4">
                <li className="text__para text-white">
                  1. Schedule the appointment easily on your convenience.
                </li>
                <li className="text__para text-white">
                  2. Search for your mentor by name, city or specialization.
                </li>
                <li className="text__para text-white">
                  3. View our mentors who are accepting new patients and use
                  the online scheduling tool to select an appointment date and
                  time from available slots.
                </li>
              </ul>
    
            </div>

            {/*   feature img   */}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className="w-3/4" alt="" />
              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 font-[600]">
                      Mon, 20
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 font-[400]">
                      11:00AM
                    </p>
                  </div>
                </div>

                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                  Pyschologist
                </div>
                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700]">
                    Mayank Gupta
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*   feature section end   */}

      {/*   services section start   */}
      <section style={{backgroundColor:"#443C68"}}>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-white text-center">Support services provided by us</h2>
            <p className="text__para text-white text-center">
              We provide Stronger system to take care of everyone along with expert and well protected care for everyone.
            </p>
          </div>
          <ServiceList />
        </div>
      </section>
      {/*   services section end   */}

      {/*   our great doctors   */}
      <section style={{backgroundColor:"#635985"}}>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-white text-center">Your Strong Mentors</h2>
            <p className="text__para text-white text-center">
            We provide Stronger system to take care of everyone along with expert and well protected care for everyone.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
      {doctors.slice(0,3).map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
        </div>
      </section>
      {/*   our great doctors   */}

      {/*   faq section start   */}
      <section style={{backgroundColor:"#443C68"}}>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="" />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="heading text-white">
                Most questions by our Stronger People
              </h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/*   faq section end   */}

      {/*   testimonial start   */}
      <section style={{backgroundColor:"#635985"}}>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-white text-center">What our Stronger People say</h2>
            <p className="text__para text-black text-center">
            We provide Stronger system to take care of everyone along with expert and well protected care for everyone.
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
      {/*   testimonial end   */}
    </>
  );
};

export default Home;
