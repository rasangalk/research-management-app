import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../../components/StaffMenu";
import Container from "../../components/StaffContainer";
import { useNavigate } from "react-router-dom";
import { getMember } from "../../actions/members.action";

function StaffProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //   const auth = useSelector((state) => state.auth);
  const user = window.localStorage.getItem("user");
  const memberId = JSON.parse(user)._id;
  console.log(memberId);
  const member = useSelector((state) => state.members);

  useEffect(() => {
    dispatch(getMember(memberId));
  }, []);
  return (
    <div>
      <div className="w-screen h-screen grid grid-cols-12 bg-bk-white">
        <div className="">
          <Menu />
        </div>
        <div className="col-span-11 mx-auto my-auto ">
          <div className="relative">
            <Container title="Profile" width="w-[68rem] h-[24.9rem]" />
            <div className="absolute top-[10rem] left-[7rem]">
              <div className="grid grid-cols-3 gap-16 w-[60rem]">
                <div className="">
                  <p className="capitalize text-slate-700 text-sm mb-1">
                    Username:
                  </p>
                  <p className="font-bold text-base">
                    {member.member.username}
                  </p>
                </div>
                <div className="">
                  <p className="capitalize text-slate-700 text-sm mb-1">
                    name:
                  </p>
                  <p className="capitalize font-bold text-base">
                    {member.member.fullName}
                  </p>
                </div>
                <div className="">
                  <p className="capitalize text-slate-700 text-sm mb-1">
                    role:
                  </p>
                  <p className="capitalize font-bold text-base">
                    {member.member.role}
                  </p>
                </div>

                <div className="">
                  <p className="uppercase text-slate-700 text-sm mb-1">id:</p>
                  <p className="uppercase font-bold text-base">EMP21786</p>
                </div>
                <div className="">
                  <p className="capitalize text-slate-700 text-sm mb-1">
                    email:
                  </p>
                  <p className="lowercase font-bold text-base">
                    {member.member.email}
                  </p>
                </div>
                <div className="">
                  <p className="capitalize text-slate-700 text-sm mb-1">
                    phone:
                  </p>
                  <p className="font-bold text-base">{member.member.phone}</p>
                </div>
              </div>
              <div className=" mt-[13rem]  ml-[59.5rem] ">
                <button
                  className=" text-lg  px-6 py-1 bg-regal-blue text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-50 sm:w-50 rounded-md hover:bg-regal-blue-active float-right  text-sm"
                  onClick={() => {
                    navigate("/staff/edit-profile");
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaffProfile;
