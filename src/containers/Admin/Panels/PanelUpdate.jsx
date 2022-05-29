import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../../../components/AdminMenu";
import Container from "../../../components/AdminContainer";
import Bin from "../../../images/bin.png";
import { getPanel } from "../../../actions/panel.action";
import { useParams, useNavigate } from "react-router-dom";
import { getAllStaffMemebrs } from "../../../actions/members.action";

function PanelUpdate() {
  const [del1, setDel1] = useState(false);
  const [del2, setDel2] = useState(false);
  const [del3, setDel3] = useState(false);

  const [mem1, setMem1] = useState("");
  const [mem2, setMem2] = useState("");
  const [mem3, setMem3] = useState("");
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  //const navigate = useNavigate();
  const panels = useSelector((state) => state.panels);
  const members = useSelector((state) => state.members);
  console.log("Will See Panel:", members);
  const { panelId } = useParams();
  useEffect(() => {
    dispatch(getPanel(panelId));
    dispatch(getAllStaffMemebrs());
  }, []);

  // const newName1 = () => {
  //   members.staffMembers
  //     .filter((member) => member.username == mem1)
  //     .map((filteredMember) => {
  //       return <p>{filteredMember.fullName}</p>;
  //     });
  // };

  const newName2 = () => {
    members.staffMembers
      .filter((member) => member.username == mem1)
      .map((filteredMember) => {
        setName(filteredMember.fullName);
      });
  };

  // console.log(newName2());
  // console.log("Name", name);

  const updatePanelMembers = () => {
    const pnl = {
      panel: panel,
    };
    dispatch(UpdateStudentGrpPanel(pnl));
    //navigate("/admin/view-groups");
  };

  const displayUsername1 = () => {
    if (del1 === false) {
      return (
        <select
          className="font-semibold mt-1 px-2 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md focus:ring-1"
          onChange={(e) => setMem1(e.target.value)}
        >
          <option value="" disabled selected hidden>
            {panels.panel.panelMembers.member1.username}
          </option>
          {Object.keys(members.staffMembers).map((element) => (
            <option
              key={element}
              value={members.staffMembers[element].username}
            >
              {members.staffMembers[element].username}
            </option>
          ))}
        </select>
      );
    } else {
      return (
        <select
          className="font-semibold mt-1 px-2 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md focus:ring-1"
          onChange={(e) => setMem2(e.target.value)}
        >
          <option value="" disabled selected hidden>
            Select Member
          </option>
          {Object.keys(members.staffMembers).map((element) => (
            <option
              key={element}
              value={members.staffMembers[element].username}
            >
              {members.staffMembers[element].username}
            </option>
          ))}
        </select>
      );
    }
  };

  const displayUsername2 = () => {
    if (del2 === false) {
      return (
        <select
          className="font-semibold mt-1 px-2 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md focus:ring-1"
          onChange={(e) => setMem3(e.target.value)}
        >
          <option value="" disabled selected hidden>
            {panels.panel.panelMembers.member2.username}
          </option>
          {Object.keys(members.staffMembers).map((element) => (
            <option
              key={element}
              value={members.staffMembers[element].username}
            >
              {members.staffMembers[element].username}
            </option>
          ))}
        </select>
      );
    } else {
      return (
        <select className="font-semibold mt-1 px-2 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md focus:ring-1">
          <option value="" disabled selected hidden>
            Select Member
          </option>
          {Object.keys(members.staffMembers).map((element) => (
            <option
              key={element}
              value={members.staffMembers[element].username}
            >
              {members.staffMembers[element].username}
            </option>
          ))}
        </select>
      );
    }
  };

  const displayUsername3 = () => {
    if (del3 === false) {
      return (
        <select className="font-semibold mt-1 px-2 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md focus:ring-1">
          <option value="" disabled selected hidden>
            {panels.panel.panelMembers.member3.username}
          </option>
          {Object.keys(members.staffMembers).map((element) => (
            <option
              key={element}
              value={members.staffMembers[element].username}
            >
              {members.staffMembers[element].username}
            </option>
          ))}
        </select>
      );
    } else {
      return (
        <select className="font-semibold mt-1 px-2 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md focus:ring-1">
          <option value="" disabled selected hidden>
            Select Member
          </option>
          {Object.keys(members.staffMembers).map((element) => (
            <option
              key={element}
              value={members.staffMembers[element].username}
            >
              {members.staffMembers[element].username}
            </option>
          ))}
        </select>
      );
    }
  };

  const displayName1 = () => {
    if (del1 === false) {
      return (
        <input
          type="text"
          disabled
          // value={name}
          value=""
          className="disabled:capitalize font-semibold  px-2 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md text-base focus:ring-1"
        />
      );
    } else {
      return (
        <input
          type="text"
          disabled
          value=""
          className="disabled:capitalize font-semibold  px-2 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md text-base focus:ring-1"
        />
      );
    }
  };
  const displayName2 = () => {
    if (del2 === false) {
      return (
        <input
          type="text"
          disabled
          value={panels.panel.panelMembers.member2.fullName}
          className="disabled:capitalize font-semibold  px-2 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md text-base focus:ring-1"
        />
      );
    } else {
      return (
        <input
          type="text"
          disabled
          value=""
          className="disabled:capitalize font-semibold  px-2 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md text-base focus:ring-1"
        />
      );
    }
  };

  const displayName3 = () => {
    if (del3 === false) {
      return (
        <input
          type="text"
          disabled
          value={panels.panel.panelMembers.member3.fullName}
          className="disabled:capitalize font-semibold  px-2 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md text-base focus:ring-1"
        />
      );
    } else {
      return (
        <input
          type="text"
          disabled
          value=""
          className="disabled:capitalize font-semibold  px-2 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md text-base focus:ring-1"
        />
      );
    }
  };

  if (panels.panel.panelMembers) {
    return (
      <div>
        <div className="w-screen h-screen grid grid-cols-12 bg-bk-white">
          <div className="">
            <Menu />
          </div>
          <div className="col-span-11 mx-auto my-auto ">
            <div class="relative">
              <Container title="panel" width="w-[68rem]" />
              <div class="absolute left-[5rem] top-[9rem] w-[66rem]">
                <div className="grid grid-cols-5 overflow-auto h-[20rem]">
                  <div className="col-span-4">
                    <p className="capitalize">
                      panel <span className="uppercase">id:</span>
                    </p>
                    <p className="uppercase font-bold text-lg">
                      {panels.panel.panelId}
                    </p>
                  </div>
                  <div className="col-span-2">
                    <p className="capitalize">username: </p>
                    {displayUsername1()}
                  </div>
                  <div className="col-span-2">
                    <p className="capitalize">name:</p>
                    {displayName1()}
                  </div>
                  <div className="">
                    <button
                      onClick={() => {
                        setDel1(true);
                      }}
                    >
                      <img
                        src={Bin}
                        alt="bin"
                        className="mt-[1.8rem] ml-[2rem]"
                      />
                    </button>
                  </div>
                  <div className="col-span-2">
                    <p className="capitalize">username: </p>
                    {displayUsername2()}
                  </div>
                  <div className="col-span-2">
                    <p className="capitalize">name:</p>
                    {displayName2()}
                  </div>
                  <div className="">
                    <button
                      onClick={() => {
                        setDel2(true);
                      }}
                    >
                      <img
                        src={Bin}
                        alt="bin"
                        className="mt-[1.8rem] ml-[2rem]"
                      />
                    </button>
                  </div>
                  <div className="col-span-2">
                    <p className="capitalize">username: </p>
                    {displayUsername3()}
                  </div>
                  <div className="col-span-2">
                    <p className="capitalie">name:</p>
                    {displayName3()}
                  </div>
                  <div className="">
                    <button
                      onClick={() => {
                        setDel3(true);
                      }}
                    >
                      <img
                        src={Bin}
                        alt="bin"
                        className="mt-[1.8rem] ml-[2rem]"
                      />
                    </button>
                  </div>
                </div>

                <button
                  className="mt-16 capitalize text-lg font-bold px-6 py-1 bg-regal-blue text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-50 sm:w-50 rounded-md hover:bg-regal-blue-active float-right text-sm"
                  onClick={() => {
                    updatePanelMembers();
                  }}
                >
                  update
                </button>
                <button className="mr-4 mt-16 capitalize text-lg font-bold px-6 py-1 bg-main-orange text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-50 sm:w-50 rounded-md hover:bg-main-orange-active float-right text-sm">
                  cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PanelUpdate;
