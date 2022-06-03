import React, { useEffect, useState } from "react";
import Menu from "../../../components/StudentMenu";
import Container from "../../../components/StudentContainer";
import { useDispatch, useSelector } from "react-redux";
import {
  getGroupDetails,
  UpdateStudentGroupsDetails,
} from "../../../actions/student.action";
import { useNavigate } from "react-router-dom";

function StudentGroup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [leaderFullname, setLeaderFullName] = useState("");
  const [leaderEmail, setLeaderEmail] = useState("");
  const [leaderPhone, setLeaderPhone] = useState("");
  const [leaderId, setLeaderId] = useState("");
  const [leaderSpecialization, setLeaderSpecialization] = useState("");
  const [mem1Fullname, setMem1FullName] = useState("");
  const [mem1Email, setMem1Email] = useState("");
  const [mem1Phone, setMem1Phone] = useState("");
  const [mem1Id, setMem1Id] = useState("");
  const [mem1Specialization, setMem1Specialization] = useState("");
  const [mem2Fullname, setMem2FullName] = useState("");
  const [mem2Email, setMem2Email] = useState("");
  const [mem2Phone, setMem2Phone] = useState("");
  const [mem2Id, setMem2Id] = useState("");
  const [mem2Specialization, setMem2Specialization] = useState("");
  const [mem3Fullname, setMem3FullName] = useState("");
  const [mem3Email, setMem3Email] = useState("");
  const [mem3Phone, setMem3Phone] = useState("");
  const [mem3Id, setMem3Id] = useState("");
  const [mem3Specialization, setMem3Specialization] = useState("");
  const students = useSelector((state) => state.students);

  const user = window.localStorage.getItem("user");
  const userID = JSON.parse(user)._id;
  useEffect(() => {
    dispatch(getGroupDetails(userID));
    if (students.group.students) {
      setLeaderFullName(students.group.students.leader.fullName);
      setLeaderEmail(students.group.students.leader.email);
      setLeaderPhone(students.group.students.leader.phone);
      setLeaderId(students.group.students.leader.sliit_id);
      setLeaderSpecialization(students.group.students.leader.specialization);
      setMem1FullName(students.group.students.member1.fullName);
      setMem1Email(students.group.students.member1.email);
      setMem1Phone(students.group.students.member1.phone);
      setMem1Id(students.group.students.member1.sliit_id);
      setMem1Specialization(students.group.students.member1.specialization);
      setMem2FullName(students.group.students.member2.fullName);
      setMem2Email(students.group.students.member2.email);
      setMem2Phone(students.group.students.member2.phone);
      setMem2Id(students.group.students.member2.sliit_id);
      setMem2Specialization(students.group.students.member2.specialization);
      setMem3FullName(students.group.students.member3.fullName);
      setMem3Email(students.group.students.member3.email);
      setMem3Phone(students.group.students.member3.phone);
      setMem3Id(students.group.students.member3.sliit_id);
      setMem3Specialization(students.group.students.member3.specialization);
    }
  }, []);

  const updateDetails = () => {
    const data = {
      students: {
        leader: {
          fullName: leaderFullname,
          sliit_id: leaderId,
          phone: leaderPhone,
          email: leaderEmail,
          specialization: leaderSpecialization,
        },
        member1: {
          fullName: mem1Fullname,
          sliit_id: mem1Id,
          phone: mem1Phone,
          email: mem1Email,
          specialization: mem1Specialization,
        },
        member2: {
          fullName: mem2Fullname,
          sliit_id: mem2Id,
          phone: mem2Phone,
          email: mem2Email,
          specialization: mem2Specialization,
        },
        member3: {
          fullName: mem3Fullname,
          sliit_id: mem3Id,
          phone: mem3Phone,
          email: mem3Email,
          specialization: mem3Specialization,
        },
      },
    };
    dispatch(UpdateStudentGroupsDetails(userID, data));
    navigate("/student-home");
  };

  if (students.group.students) {
    return (
      <div>
        <div className="w-screen h-screen grid grid-cols-12 bg-bk-white">
          <div className="">
            <Menu />
          </div>
          <div className="col-span-11 mx-auto my-auto ">
            <div className="relative">
              <Container title="Edit Group" width="w-[68rem] h-[24.5rem]" />
              <div className="absolute top-[10rem] left-[7rem] w-[60rem]">
                <div className=" grid grid-cols-2 overflow-y-auto h-[20rem]">
                  <div className="flex flex-col gap-12 ">
                    <div>
                      <p className="capitalize text-base text-slate-700 text-sm mb-1">
                        Leader's Name
                      </p>
                      <input
                        type="text"
                        name="LeadersName"
                        defaultValue={students.group.students.leader.fullName}
                        onChange={(e) => setLeaderFullName(e.target.value)}
                        className="font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1"
                      />
                    </div>
                    <div>
                      <p className="capitalize text-base text-slate-700 text-sm mb-1">
                        Email
                      </p>
                      <input
                        type="text"
                        defaultValue={students.group.students.leader.email}
                        onChange={(e) => setLeaderEmail(e.target.value)}
                        name="Email"
                        className="font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1"
                      />
                    </div>
                    <div>
                      <p className="capitalize text-base text-slate-700 text-sm mb-1">
                        Specialization
                      </p>
                      <select
                        name="Specialization"
                        className="font-Nunito font-semibold mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-96 sm:w-144 rounded-md focus:ring-1 mb-20"
                        onChange={(e) =>
                          setLeaderSpecialization(e.target.value)
                        }
                      >
                        <option
                          value="Software Engineering"
                          disabled
                          selected
                          hidden
                        >
                          {students.group.students.leader.specialization}
                        </option>
                        <option value="SE">SE</option>
                        <option value="CSNE">CSNE</option>
                        <option value="ISE">ISE</option>
                        <option value="CS">CS</option>
                        <option value="IM">IM</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-12">
                    <div>
                      <p className="capitalize text-base text-slate-700 text-sm mb-1">
                        ID Number
                      </p>
                      <input
                        type="text"
                        name="ID Number"
                        disabled
                        onChange={(e) => setLeaderId(e.target.value)}
                        defaultValue={students.group.students.leader.sliit_id}
                        className="font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1"
                      />
                    </div>
                    <div>
                      <p className="capitalize text-base text-slate-700 text-sm mb-1">
                        Phone
                      </p>
                      <input
                        type="text"
                        name="Phone"
                        defaultValue={students.group.students.leader.phone}
                        onChange={(e) => setLeaderPhone(e.target.value)}
                        className="font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-12 ">
                    <div>
                      <p className="capitalize text-base text-slate-700 text-sm mb-1">
                        Member 1 Name
                      </p>
                      <input
                        type="text"
                        name="Member1Name"
                        defaultValue={students.group.students.member1.fullName}
                        onChange={(e) => setMem1FullName(e.target.value)}
                        className="font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1"
                      />
                    </div>
                    <div>
                      <p className="capitalize text-base text-slate-700 text-sm mb-1">
                        Email
                      </p>
                      <input
                        type="text"
                        name="Email"
                        defaultValue={students.group.students.member1.email}
                        onChange={(e) => setMem1Email(e.target.value)}
                        className="font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1"
                      />
                    </div>
                    <div>
                      <p className="capitalize text-base text-slate-700 text-sm mb-1">
                        Specialization
                      </p>
                      <select
                        name="Specialization"
                        className="font-Nunito font-semibold mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-96 sm:w-144 rounded-md focus:ring-1 mb-20"
                        onChange={(e) => setMem1Specialization(e.target.value)}
                      >
                        <option
                          value="Software Engineering"
                          disabled
                          selected
                          hidden
                        >
                          {students.group.students.member1.specialization}
                        </option>
                        <option value="SE">SE</option>
                        <option value="CSNE">CSNE</option>
                        <option value="ISE">ISE</option>
                        <option value="CS">CS</option>
                        <option value="IM">IM</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-12">
                    <div>
                      <p className="capitalize text-base text-slate-700 text-sm mb-1">
                        ID Number
                      </p>
                      <input
                        type="text"
                        name="ID Number"
                        disabled
                        defaultValue={students.group.students.member1.sliit_id}
                        onChange={(e) => setMem1Id(e.target.value)}
                        className="font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1"
                      />
                    </div>
                    <div>
                      <p className="capitalize text-base text-slate-700 text-sm mb-1">
                        Phone
                      </p>
                      <input
                        type="text"
                        name="Phone"
                        defaultValue={students.group.students.member1.phone}
                        onChange={(e) => setMem1Phone(e.target.value)}
                        className="font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-12 ">
                    <div>
                      <p className="capitalize text-base text-slate-700 text-sm mb-1">
                        Member 2 Name
                      </p>
                      <input
                        type="text"
                        name="Member1Name"
                        defaultValue={students.group.students.member2.fullName}
                        onChange={(e) => setMem2FullName(e.target.value)}
                        className="font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1"
                      />
                    </div>
                    <div>
                      <p className="capitalize text-base text-slate-700 text-sm mb-1">
                        Email
                      </p>
                      <input
                        type="text"
                        name="Email"
                        defaultValue={students.group.students.member2.email}
                        onChange={(e) => setMem2Email(e.target.value)}
                        className="font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1"
                      />
                    </div>
                    <div>
                      <p className="capitalize text-base text-slate-700 text-sm mb-1">
                        Specialization
                      </p>
                      <select
                        name="Specialization"
                        className="font-Nunito font-semibold mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-96 sm:w-144 rounded-md focus:ring-1 mb-20"
                        onChange={(e) => setMem2Specialization(e.target.value)}
                      >
                        <option
                          value="Software Engineering"
                          disabled
                          selected
                          hidden
                        >
                          {students.group.students.member2.specialization}
                        </option>
                        <option value="SE">SE</option>
                        <option value="CSNE">CSNE</option>
                        <option value="ISE">ISE</option>
                        <option value="CS">CS</option>
                        <option value="IM">IM</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-12">
                    <div>
                      <p className="capitalize text-base text-slate-700 text-sm mb-1">
                        ID Number
                      </p>
                      <input
                        type="text"
                        name="ID Number"
                        disabled
                        defaultValue={students.group.students.member2.sliit_id}
                        onChange={(e) => setMem2Id(e.target.value)}
                        className="font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1"
                      />
                    </div>
                    <div>
                      <p className="capitalize text-base text-slate-700 text-sm mb-1">
                        Phone
                      </p>
                      <input
                        type="text"
                        name="Phone"
                        defaultValue={students.group.students.member2.phone}
                        onChange={(e) => setMem2Phone(e.target.value)}
                        className="font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-12 ">
                    <div>
                      <p className="capitalize text-base text-slate-700 text-sm mb-1">
                        Member 3 Name
                      </p>
                      <input
                        type="text"
                        name="Member3Name"
                        defaultValue={students.group.students.member3.fullName}
                        onChange={(e) => setMem3FullName(e.target.value)}
                        className="font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1"
                      />
                    </div>
                    <div>
                      <p className="capitalize text-base text-slate-700 text-sm mb-1">
                        Email
                      </p>
                      <input
                        type="text"
                        name="Email"
                        defaultValue={students.group.students.member3.email}
                        onChange={(e) => setMem3Email(e.target.value)}
                        className="font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1"
                      />
                    </div>
                    <div>
                      <p className="capitalize text-base text-slate-700 text-sm mb-1">
                        Specialization
                      </p>
                      <select
                        name="Specialization"
                        className="font-Nunito font-semibold mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-96 sm:w-144 rounded-md focus:ring-1 mb-20"
                        onChange={(e) => setMem3Specialization(e.target.value)}
                      >
                        <option
                          value="Software Engineering"
                          disabled
                          selected
                          hidden
                        >
                          {students.group.students.member3.specialization}
                        </option>
                        <option value="SE">SE</option>
                        <option value="CSNE">CSNE</option>
                        <option value="ISE">ISE</option>
                        <option value="CS">CS</option>
                        <option value="IM">IM</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-12">
                    <div>
                      <p className="capitalize text-base text-slate-700 text-sm mb-1">
                        ID Number
                      </p>
                      <input
                        type="text"
                        name="ID Number"
                        disabled
                        defaultValue={students.group.students.member3.sliit_id}
                        onChange={(e) => setMem3Id(e.target.value)}
                        className="font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1"
                      />
                    </div>
                    <div>
                      <p className="capitalize text-base text-slate-700 text-sm mb-1">
                        Phone
                      </p>
                      <input
                        type="text"
                        name="Phone"
                        defaultValue={students.group.students.member3.phone}
                        onChange={(e) => setMem3Phone(e.target.value)}
                        className="font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    className="mt-[3rem] ml-[58rem] text-lg  px-6 py-1 bg-regal-blue text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-50 sm:w-50 rounded-md hover:bg-regal-blue-active text-sm"
                    onClick={() => {
                      updateDetails();
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
}

export default StudentGroup;
