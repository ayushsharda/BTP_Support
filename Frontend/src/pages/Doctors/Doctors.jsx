import { doctors } from "../../assets/data/doctors";
import DoctorCard from "../../components/Doctors/DoctorCard";
import Testimonial from "../../components/Testimonial/Testimonial";

const Doctors = () => {
  return (
    <>
      <section style={{backgroundColor:"#635985"}} className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">Search your Mentor</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-white"
              placeholder="Search Mentor by Name, City or Specialization"
            />
            <button className="btn mt-0 rounded-[0px] rounded-r-md">
              Search
            </button>
          </div>
        </div>
      </section>

      <section style={{backgroundColor:"#635985"}}>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      <section style={{backgroundColor:"#635985"}}>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our Stronger People say</h2>
            <p className="text__para text-center text-white">
              World-class support for everyone. Our Support System offers unmatched,
              expert care.
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Doctors;
