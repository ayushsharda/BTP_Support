import { useContext, useState } from "react";

import { authContext } from "../../context/AuthContext";
import Profile from "./Profile";
import UpcomingAppointments from "./UpcomingAppointments";
import useGetProfile from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import CompletedAppointments from "./CompletedAppointments";

const MyAccount = () => {
  const { dispatch } = useContext(authContext);
  const [tab, setTab] = useState("currBookings");

  const {
    data: userData,
    loading,
    error,
  } = useGetProfile(`${BASE_URL}/users/profile/me`);

  console.log(userData, "userData");

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <section style={{backgroundColor:"#635985"}}>
      <div className="max-w-[1170px] px-5 mx-auto ">
        {loading && !error && <Loading />}

        {error && !loading && <Error errMessage={error} />}

        {!loading && !error && (
          <div className="grid md:grid-cols-3 gap-10">
            <div className="pb-[50px] px-[30px] rounded-md">
              <div className="flex items-center justify-center">
                <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor">
                  <img
                    src={userData.photo}
                    alt=""
                    className="w-full h-full rounded-full"
                  />
                </figure>
              </div>

              <div className="text-center mt-4">
                <h3 className="text-[22px] leading-[30px] text-white font-bold">
                  {userData.name}
                </h3>
                <p className="mt-1 text-white text-[18px] leading-6 font-medium ">
                  {userData.email}
                </p>
                {userData.phone && (
                  <p className="mt-2 text-textColor text-[18px] leading-6 font-medium ">
                    {userData.phone}
                  </p>
                )}
                {userData.bloodType && (
                  <p className="mt-1 text-textColor text-[18px] leading-6 font-medium">
                    Blood Type:
                    <span className="ml-2 text-headingColor text-[20px] leading-8">
                      {userData.bloodType}
                    </span>
                  </p>
                )}
                {userData.diabetic && (
                  <p className="text-textColor text-[18px] leading-6 font-medium">
                    Diabetic:
                    <span className="ml-2 text-headingColor text-[20px] leading-8">
                      {userData.diabetic}
                    </span>
                  </p>
                )}
                {userData.age && (
                  <p className="text-textColor text-[18px] leading-6 font-medium">
                    Age:
                    <span className="ml-2 text-headingColor text-[20px] leading-8">
                      {userData.age}
                    </span>
                  </p>
                )}
                {userData.weight && (
                  <p className="text-textColor text-[18px] leading-6 font-medium">
                    Weight:
                    <span className="ml-2 text-headingColor text-[20px] leading-8">
                      {`${userData.weight} kg`}
                    </span>
                  </p>
                )}
              </div>

              <div className="mt-[50px] md:mt-[100px]">
                <button
                  onClick={handleLogout}
                  className="w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white"
                >
                  Logout
                </button>
                <button className="w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white">
                  Delete account
                </button>
              </div>
            </div>

            <div className="md:col-span-2 md:px-[30px]">
              <div>
                <button
                  onClick={() => setTab("currBookings")}
                  className={`${
                    tab === "currBookings" &&
                    "bg-primaryColor text-white font-normal"
                  } p-2 mr-5 px-5 rounded-md text-white font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
                >
                  Impending Sessions
                </button>
                <button
                  onClick={() => setTab("settings")}
                  className={`${
                    tab === "settings" &&
                    "bg-primaryColor text-white font-normal"
                  } py-2 mr-5  px-5 rounded-md text-white font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
                >
                  My Profile
                </button>
                <button
                  onClick={() => setTab("compBookings")}
                  className={`${
                    tab === "compBookings" &&
                    "bg-primaryColor text-white font-normal"
                  } p-2 px-5 rounded-md text-white font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
                >
                  Finished Sessions
                </button>
              </div>

              {tab === "currBookings" && <UpcomingAppointments />}
              {tab === "settings" && <Profile user={userData} />}
              {tab === "compBookings" && <CompletedAppointments />}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyAccount;
