import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../../../components/SupervisorMenu";
import Container from "../../../components/SupervisorContainer";
import {
  EditSupervisorDetails,
  getSupervisorDetails,
} from "../../../actions/supervisor.action";
import { useNavigate } from "react-router-dom";

function SupervisorProfileEdit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [researchIntreset, setResearchIntreset] = useState("");

  const supervisor = useSelector((state) => state.supervisor);

  const user = window.localStorage.getItem("user");
  const userID = JSON.parse(user)._id;
  useEffect(() => {
    dispatch(getSupervisorDetails(userID));
    if (supervisor.supervisor) {
      setEmail(supervisor.supervisor.email);
      setFullName(supervisor.supervisor.fullName);
      setPhone(supervisor.supervisor.phone);
      setResearchIntreset(supervisor.supervisor.research_interest);
      setUsername(supervisor.supervisor.username);
    }
  }, []);
  console.log(supervisor);

  const updateData = () => {
    const data = {
      fullName: fullName,
      email: email,
      phone: phone,
      username: username,
      research_interest: researchIntreset,
    };
    dispatch(EditSupervisorDetails(userID, data));
    navigate("/Supervisor/Supervisor-Profile");
  };
  return (
    <div>
      <div className="w-screen h-screen grid grid-cols-12 bg-bk-white">
        <div className="">
          <Menu status="Update Profile" />
        </div>
        <div className="col-span-11 mx-auto my-auto ">
          <div className="relative">
            <Container title="Profile" width="w-[68rem] h-[24.5rem]" />
            <div className="absolute top-[10rem] left-[7rem]">
              <div className=" grid grid-cols-2 w-[60rem]">
                <div className="flex flex-col gap-8">
                  <div>
                    <p className="capitalize text-slate-700 text-sm mb-1">
                      Username:
                    </p>
                    <input
                      type="text"
                      defaultValue={supervisor.supervisor.username}
                      onChange={(e) => setUsername(e.target.value)}
                      name="Username"
                      className="font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1"
                    />
                  </div>
                  <div>
                    <p className="capitalize text-slate-700 text-sm mb-1">
                      ID:
                    </p>
                    <input
                      type="text"
                      defaultValue={supervisor.supervisor.sliit_id}
                      //onChange={(e) => setLeaderEmail(e.target.value)}
                      name="ID"
                      className="font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1"
                    />
                  </div>
                  <div>
                    <p className="capitalize text-slate-700 text-sm mb-1">
                      Phone:
                    </p>
                    <input
                      type="text"
                      defaultValue={supervisor.supervisor.phone}
                      onChange={(e) => setPhone(e.target.value)}
                      name="Phone"
                      className="font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1"
                    />
                  </div>
                  <div>
                    <p className="capitalize text-slate-700 text-sm mb-1">
                      Email:
                    </p>
                    <input
                      type="text"
                      defaultValue={supervisor.supervisor.email}
                      onChange={(e) => setEmail(e.target.value)}
                      name="Email"
                      className="font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-8">
                  <div>
                    <p className="capitalize text-slate-700 text-sm mb-1">
                      Name:
                    </p>
                    <input
                      type="text"
                      defaultValue={supervisor.supervisor.fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      name="Name"
                      className="font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1"
                    />
                  </div>
                  <div>
                    <p className="capitalize text-slate-700 text-sm mb-1">
                      Role:
                    </p>
                    <input
                      type="text"
                      defaultValue={supervisor.supervisor.role}
                      disabled
                      name="Role"
                      className="font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1"
                    />
                  </div>
                  <div>
                    <p className="capitalize text-slate-700 text-sm mb-1">
                      Research Interests:
                    </p>
                    <input
                      type="text"
                      defaultValue={supervisor.supervisor.research_interest}
                      onChange={(e) => setResearchIntreset(e.target.value)}
                      name="ResearchIntrest"
                      className="font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1"
                    />
                  </div>
                </div>
              </div>
              <div className=" mt-[4.5rem]  ml-[59.5rem] ">
                <button
                  className=" text-lg  px-6 py-1 bg-regal-blue text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-50 sm:w-50 rounded-md hover:bg-regal-blue-active float-right  text-sm"
                  onClick={() => {
                    updateData();
                  }}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupervisorProfileEdit;
