import React, { useState } from "react";

import RegisterPageOne from "../../../components/RegisterPageOne";

import LayoutRight from "../../../components/LayoutRight";

import RegisterPageLeader from "../../../components/RegisterPageLeader";

import RegisterFirstMember from "../../../components/RegisterFirstMember";

import RegisterSecondMember from "../../../components/RegisterSecondMember";

import RegisterThirdMember from "../../../components/RegisterThirdMember";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { signup } from "../../../actions/user.actions";

import { SHA256 } from "crypto-js";

import Login from "../../Signin/index";
import { compose } from "redux";

function StudentRegister() {
  const [page, setPage] = useState(0);
  const [isValid, setIsValid] = useState(false);
  const res = useSelector((state) => state.user);
  const Forms = ["register", "leader", "member1", "member2", "member3"];
  const [loginInfo, setLoginInfo] = useState({
    code: "",
    username: "",
    password: "",
    rePassword: "",
  });
  const [leaderFormData, setLeaderFormData] = useState({
    nameWithInitials: "",
    studentId: "",
    phone: "",
    email: "",
    specialization: "",
  });

  const [firstMemberFormData, setFirstMemberFormData] = useState({
    nameWithInitials: "",
    studentId: "",
    phone: "",
    email: "",
    specialization: "",
  });

  const [secondMemberFormData, setSecondMemberFormData] = useState({
    nameWithInitials: "",
    studentId: "",
    phone: "",
    email: "",
    specialization: "",
  });

  const [thirdMemberFormData, setThirdMemberFormData] = useState({
    nameWithInitials: "",
    studentId: "",
    phone: "",
    email: "",
    specialization: "",
  });

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/landing-page`;
    navigate(path);
  };

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <RegisterPageOne
          loginInfo={loginInfo}
          setLoginInfo={setLoginInfo}
          page={page}
          setPage={setPage}
          setIsValid={setIsValid}
        />
      );
    } else if (page === 1) {
      return (
        <RegisterPageLeader
          leaderFormData={leaderFormData}
          setLeaderFormData={setLeaderFormData}
          setIsValid={setIsValid}
        />
      );
    } else if (page === 2) {
      return (
        <RegisterFirstMember
          firstMemberFormData={firstMemberFormData}
          setFirstMemberFormData={setFirstMemberFormData}
          setIsValid={setIsValid}
        />
      );
    } else if (page === 3) {
      return (
        <RegisterSecondMember
          secondMemberFormData={secondMemberFormData}
          setSecondMemberFormData={setSecondMemberFormData}
          setIsValid={setIsValid}
        />
      );
    } else if (page === 4) {
      return (
        <RegisterThirdMember
          thirdMemberFormData={thirdMemberFormData}
          setThirdMemberFormData={setThirdMemberFormData}
          setIsValid={setIsValid}
        />
      );
    } else if (page === 5) {
      navigate("/");
    }
  };

  const dispatch = useDispatch();

  const studentSignup = async () => {
    console.log("inside");
    const hash_password = await bcrypt.hash(loginInfo.password, 10);

    const user = {
      code: loginInfo.code,
      username: loginInfo.username,
      password: SHA256(loginInfo.password).toString(),
      re_hash_password: SHA256(loginInfo.rePassword).toString(),
      role: "student",
      students: {
        leader: {
          fullName: leaderFormData.nameWithInitials,
          sliit_id: leaderFormData.studentId,
          phone: leaderFormData.phone,
          email: leaderFormData.email,
          specialization: leaderFormData.specialization,
        },
        member1: {
          fullName: firstMemberFormData.nameWithInitials,
          sliit_id: firstMemberFormData.studentId,
          phone: firstMemberFormData.phone,
          email: firstMemberFormData.email,
          specialization: firstMemberFormData.specialization,
        },
        member2: {
          fullName: secondMemberFormData.nameWithInitials,
          sliit_id: secondMemberFormData.studentId,
          phone: secondMemberFormData.phone,
          email: secondMemberFormData.email,
          specialization: secondMemberFormData.specialization,
        },
        member3: {
          fullName: thirdMemberFormData.nameWithInitials,
          sliit_id: thirdMemberFormData.studentId,
          phone: thirdMemberFormData.phone,
          email: thirdMemberFormData.email,
          specialization: thirdMemberFormData.specialization,
        },
      },
    };

    dispatch(signup(user));

    res?.message === "Group registered successfully!" &&
      navigate("/student-home");
  };

  return (
    <div className='grid grid-cols-2 h-screen lg:grid-cols-2 sm:grid-cols-1'>
      <div className='h-full'>
        <div className='ml-32 mr-8'>
          {PageDisplay()}

          <button
            disabled={!isValid}
            className='mt-5 font-normal text-lg mt-1 px-3 py-1 bg-regal-blue text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md hover:bg-regal-blue-active disabled:opacity-75 disabled:hover:bg-regal-blue disabled:hover:opacity-75'
            onClick={() => {
              if (page === 4) {
                studentSignup();
              } else {
                setPage(page + 1);
              }
            }}
          >
            {page === Forms.length - 1 ? "Submit" : "Next"}
          </button>
          <button
            className='mt-2 font-normal text-lg mt-1 px-3 py-1 bg-regal-blue text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md hover:bg-regal-blue-active disabled:opacity-75 disabled:hover:bg-regal-blue disabled:hover:opacity-75'
            onClick={() => {
              if (page === 0) {
                routeChange();
              } else {
                setPage(page - 1);
              }
            }}
          >
            Previous
          </button>
        </div>
      </div>
      <LayoutRight />
    </div>
  );
}

export default StudentRegister;
