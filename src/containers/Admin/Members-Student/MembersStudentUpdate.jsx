import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../../../components/AdminMenu";
import Container from "../../../components/StudentContainer";
import { useParams, useNavigate, useNavigate } from "react-router-dom";
import {
  getMember,
  UpdateMember,
  UpdateMemberDetails,
} from "../../../actions/members.action";

function MembersStudentUpdate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sliitId, setSliitId] = useState("");
  const member = useSelector((state) => state.members);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getMember(id));
    setFullName(member.member.fullName);
    setUsername(member.member.username);
    setPhone(member.member.phone);
    setEmail(member.member.email);
    setSliitId(member.member.sliitId);
  }, []);
  console.log("Member", member);

  const updateMember = () => {
    const member = {
      memberId: id,
      fullName: fullName,
      username: username,
      email: email,
      phone: phone,
      sliit_id: sliitId,
    };
    dispatch(UpdateMemberDetails(member));
    navigate("/admin/members");
  };
  return (
    <div>
      <div className="w-screen h-screen grid grid-cols-12 bg-bk-white">
        <div className="">
          <Menu />
        </div>
        <div className="col-span-11 mx-auto my-auto ">
          <div className="relative">
            <Container title="members" width="w-[68rem] h-[25rem]" />
            <div className="absolute top-[10rem] left-[7rem]">
              <div className=" grid grid-cols-2  w-[60rem] ">
                <div className="flex flex-col gap-12">
                  <div>
                    <p className="capitalize text-base text-slate-700 text-sm mb-1">
                      Role
                    </p>
                    <input
                      disabled
                      type="text"
                      name="role"
                      className="font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1"
                      value={member.member.role}
                    />
                  </div>
                  <div>
                    <p className="capitalize text-base text-slate-700 text-sm mb-1">
                      Name
                    </p>
                    <input
                      type="text"
                      name="name"
                      defaultValue={member.member.fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1"
                    />
                  </div>
                  <div>
                    <p className="capitalize text-base text-slate-700 text-sm mb-1">
                      Email
                    </p>
                    <input
                      type="text"
                      name="email"
                      defaultValue={member.member.email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-12">
                  <div>
                    <p className="capitalize text-base text-slate-700 text-sm mb-1">
                      Username
                    </p>
                    <input
                      type="text"
                      name="username"
                      defaultValue={member.member.username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1"
                    />
                  </div>
                  <div>
                    <p className="capitalize text-base text-slate-700 text-sm mb-1">
                      ID
                    </p>
                    <input
                      type="text"
                      name="id"
                      defaultValue={member.member.sliit_id}
                      onChange={(e) => setSliitId(e.target.value)}
                      className="font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1"
                    />
                  </div>
                  <div>
                    <p className="capitalize text-base text-slate-700 text-sm mb-1">
                      Phone
                    </p>
                    <input
                      type="text"
                      name="phone"
                      defaultValue={member.member.phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1"
                    />
                  </div>
                </div>
              </div>
              <div className="flex mt-[5.3rem] gap-3 ml-[51.5rem] ">
                <button className="  text-lg  px-6 py-1 bg-[#F65354] text-white border border-slate-300 focus:outline-none focus:border-[#f76d6d]-500 focus:ring-sky-500 block lg:w-50 sm:w-50 rounded-md hover:bg-[#c73e3e]-active float-right  text-sm">
                  Cancel
                </button>
                <button
                  className=" text-lg  px-6 py-1 bg-regal-blue text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-50 sm:w-50 rounded-md hover:bg-regal-blue-active float-right  text-sm"
                  onClick={() => {
                    updateMember();
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

export default MembersStudentUpdate;
