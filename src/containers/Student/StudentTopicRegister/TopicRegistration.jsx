import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { registerTopic } from "../../../actions/topicRegistration.action";
import Menu from "../../../components/StudentMenu";
import back from "../../../images/back-icon.png";
import info from "../../../images/info-icon.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllSupervisors } from "../../../actions/members.action";
import { getGroupDetails } from "../../../actions/student.action";

function TopicRegistration() {
  const [researchInterest, setResearchInterest] = useState("");
  const [topic, setTopic] = useState("");
  const [supervisor, setSupervisor] = useState("");
  const dispatch = useDispatch();
  const members = useSelector((state) => state.members);
  const group = useSelector((state) => state.students);
  const user = window.localStorage.getItem("user");
  const userID = JSON.parse(user)._id;
  console.log("This is Supervisors:", members.supservisors);
  useEffect(() => {
    dispatch(getAllSupervisors());
    dispatch(getGroupDetails(userID));
  }, []);

  const handleClose = (e) => {
    const register = {
      groupId: group.username,
      topic,
      researchInterest,
      supervisor,
    };

    dispatch(registerTopic(register));
    window.location.reload(false);
    setResearchInterest("");
    setSupervisor("");
    setTopic("");
  };
  return (
    <div className="bg-bk-white h-screen w-screen">
      <div className="grid grid-cols-12 h-full w-full grid-rows-2">
        <div className="h-full w-[10px]">
          <Menu />
        </div>
        <div className="row-span-2 col-span-11 2xl:w-[69rem] w-[67rem] h-[37rem] m-auto bg-white rounded-xl drop-shadow-xl">
          <div className="flex gap-4 items-center capitalize text-xl font-bold ml-14 pt-8 mb-[2rem]">
            <Link to="/submission">
              <img src={back} className="h-12" />
            </Link>
            <h1> Topic Registration </h1>
          </div>

          <span className="font-normal font-Nunito text-sm text-slate-700 ml-14 ">
            Research Interest
          </span>
          <select
            name="Research Interest"
            className="ml-14 font-Nunito font-semibold mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-96 sm:w-144 rounded-md focus:ring-1 mb-10"
            onChange={(e) => setResearchInterest(e.target.value)}
          >
            <option value="" disabled selected hidden>
              Select Your Research Interest
            </option>
            <option value="bla">AI</option>
            <option value="blaa">blaa</option>
            <option value="blaaa">blaaa</option>
            <option value="blaaaa">blaaaa</option>
            <option value="blaaaaa">blaaaaa</option>
          </select>

          <div className="  row-span-2 col-span-11 2xl:w-[59rem] w-[57rem] h-[18rem]  bg-white rounded-xl drop-shadow-xl ml-14">
            <span className="font-normal font-Nunito mt-3 text-base text-slate-700 ml-6 text-sm">
              Topic
            </span>
            <input
              type="text"
              name="Topic"
              className="font-Nunito font-semibold mt-1 px-6 py-1 bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[53rem] sm:w-[53rem] rounded-md text-base focus:ring-1 ml-6 mb-8"
              onChange={(e) => setTopic(e.target.value)}
            />
            <span className="font-normal font-Nunito mt-3 text-base text-slate-700 ml-6 text-sm">
              Supervisor
            </span>
            <select
              name="Supervisor"
              className="font-Nunito font-semibold  mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-96 sm:w-144 rounded-md focus:ring-1 ml-6 mb-8 text-base"
              onChange={(e) => setSupervisor(e.target.value)}
            >
              <option value="" disabled selected hidden>
                Select Your Supervisor
              </option>
              {Object.keys(members.supservisors).map((element) => (
                <option
                  key={element}
                  value={members.supservisors[element].sliit_id}
                >
                  {members.supservisors[element].fullName}
                  {" - " + members.supservisors[element].research_interest}
                </option>
              ))}
            </select>

            <div className="ml-6 font-Nunito text-sm flex items-start mt-[3px] gap-1">
              <img src={info} className="w-4" />
              <p>
                NOTE: Once the topic is submited, it cannot be modified or
                undone unless the topic is rejected. Please make sure to submit
                the topic by selecting the supervisor with the corresponding
                research interest.
              </p>
            </div>
            <button
              className="mt-2 font-normal text-lg  px-6 py-1 bg-regal-blue text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-50 sm:w-50 rounded-md hover:bg-regal-blue-active float-right mr-6 text-sm"
              onClick={() => {
                handleClose();
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopicRegistration;
