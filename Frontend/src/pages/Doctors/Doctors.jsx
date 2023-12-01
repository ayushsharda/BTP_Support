import { useState } from "react";
import { doctors } from "../../assets/data/doctors";
import DoctorCard from "../../components/Doctors/DoctorCard";
import Testimonial from "../../components/Testimonial/Testimonial";

const Doctors = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.hospital.toLowerCase().includes(searchQuery.toLowerCase()) || doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <>
      <section style={{ backgroundColor: "#635985" }}>
        <div className="container text-center text-white">
          <h2 className="heading text-white">Explore your Mentor</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
          <input
            type="search"
            value={searchQuery}
            onChange={handleSearchChange}
            className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-white"
            placeholder="Search your Mentor"
          />

            <button className="btn mt-0 rounded-[0px] rounded-r-md">
              Search
            </button>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#635985" }}>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#635985" }}>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center text-white">What our Stronger People say</h2>
            <p className="text__para text-center text-white">
            We provide Stronger system to take care of everyone along with expert and well protected care for everyone.
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Doctors;
