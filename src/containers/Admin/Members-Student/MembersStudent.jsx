import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../../../components/StudentMenu";
import Container from "../../../components/StudentContainer";
import { deleteMember, getMember } from "../../../actions/members.action";
import { useParams, useNavigate, useNavigate } from "react-router-dom";

function MemberDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const member = useSelector((state) => state.members);
  const { memberId } = useParams();
  useEffect(() => {
    dispatch(getMember(memberId));
  }, []);
  console.log("Member", member);
  return (
    <div>
      <div className="w-screen h-screen grid grid-cols-12 bg-bk-white">
        <div>
          <Menu />
        </div>
        <div className="col-span-11 mx-auto my-auto ">
          <div className="relative">
            <Container title="members" width="w-[68rem] h-[25rem]" />
            <div className="absolute top-[10rem] left-[7rem]">
              <div className=" grid grid-cols-2  w-[60rem] ">
                <div className="flex flex-col gap-8">
                  <div>
                    <p className="capitalize">Role:</p>
                    <p className="capitalize font-bold text-lg">
                      {member.member.role}
                    </p>
                  </div>
                  <div>
                    <p className="capitalize">Name:</p>
                    <p className="capitalize font-bold text-lg">
                      {member.member.fullName}
                    </p>
                  </div>
                  <div>
                    <p className="capitalize">Email:</p>
                    <p className="capitalize font-bold text-lg">
                      {member.member.email}
                    </p>
                  </div>
                  {member.member.research_interest != null ? (
                    <div>
                      <p className="capitalize">Research interest:</p>
                      <p className="capitalize font-bold text-lg">
                        {member.member.research_interest}
                      </p>
                    </div>
                  ) : (
                    <div className="invisible">
                      <p className="capitalize">Research interest:</p>
                      <p className="capitalize font-bold text-lg">
                        {member.member.fullName}
                      </p>
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-8">
                  <div>
                    <p className="capitalize">Username:</p>
                    <p className="capitalize font-bold text-lg">
                      {member.member.username}
                    </p>
                  </div>
                  <div>
                    <p className="capitalize">ID:</p>
                    <p className="capitalize font-bold text-lg">
                      {member.member.sliit_id}
                    </p>
                  </div>
                  <div>
                    <p className="capitalize">Phone:</p>
                    <p className="capitalize font-bold text-lg">
                      {member.member.phone}
                    </p>
                  </div>
                </div>
              </div>
              {member.member.role != "supervisor" ? (
                <div className="flex mt-[4rem] gap-3 ml-[53rem] ">
                  <button
                    className="  text-lg  px-6 py-1 bg-[#F65354] text-white border border-slate-300 focus:outline-none focus:border-[#f76d6d]-500 focus:ring-sky-500 block lg:w-50 sm:w-50 rounded-md hover:bg-[#c73e3e]-active float-right  text-sm"
                    onClick={() => {
                      dispatch(deleteMember(member.member._id));
                      navigate(-1);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className=" text-lg  px-6 py-1 bg-regal-blue text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-50 sm:w-50 rounded-md hover:bg-regal-blue-active float-right  text-sm"
                    onClick={() => {
                      navigate("/admin/member/update/" + member.member._id);
                    }}
                  >
                    Edit
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberDetails;
