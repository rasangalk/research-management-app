import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../../../components/AdminMenu";
import Container from "../../../components/AdminContainer";
import { getAllStaffMemebrs } from "../../../actions/members.action";
import { CreatePanel } from "../../../actions/panel.action";
import { useNavigate } from "react-router-dom";

function CreatePannel() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [mem1, setMember1] = useState("");
  const [mem2, setMember2] = useState("");
  const [mem3, setMember3] = useState("");
  const [panelId, setPanelId] = useState("");
  const members = useSelector((state) => state.members);
  console.log("This is Staff Members:", members);
  useEffect(() => {
    dispatch(getAllStaffMemebrs());
  }, []);

  const createPnl = (e) => {
    // e.preventDefault();
    const panel = {
      panelId: panelId,
      panelMembers: {
        member1: {
          username: mem1,
        },
        member2: {
          username: mem2,
        },
        member3: {
          username: mem3,
        },
      },
    };
    dispatch(CreatePanel(panel));
    navigate("/admin/panels");
  };

  return (
    <div>
      <div className="w-screen h-screen grid grid-cols-12 bg-bk-white">
        <div className="">
          <Menu />
        </div>
        <div className="col-span-11 mx-auto my-auto ">
          <div class="relative">
            <Container title="panels" width="w-[68rem]" />
            <div class="absolute left-[5rem] top-[9rem] w-[66rem]">
              <div className="flex flex-col gap-8">
                <div className="">
                  <p className="capitalize">
                    panel <span className="uppercase">id:</span>
                  </p>
                  <input
                    className="font-semibold mt-1 px-3 py-0 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md text-base focus:ring-1"
                    onChange={(e) => setPanelId(e.target.value)}
                  />
                </div>
                <div className="">
                  <p className="capitalize">username:</p>
                  <select
                    className="font-semibold mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md focus:ring-1"
                    onChange={(e) => setMember1(e.target.value)}
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
                </div>
                <div className="">
                  <p className="capitalize">username:</p>
                  <select
                    className="font-semibold mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md focus:ring-1"
                    onChange={(e) => setMember2(e.target.value)}
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
                </div>
                <div className="">
                  <p className="capitalize">username:</p>
                  <select
                    className="font-semibold mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md focus:ring-1"
                    onChange={(e) => setMember3(e.target.value)}
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
                </div>
              </div>
              <button
                className="mt-16 capitalize text-lg font-bold px-6 py-1 bg-regal-blue text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-50 sm:w-50 rounded-md hover:bg-regal-blue-active float-right text-sm"
                onClick={() => {
                  createPnl();
                }}
              >
                create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePannel;
