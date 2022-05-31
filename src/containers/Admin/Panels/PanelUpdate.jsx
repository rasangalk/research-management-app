import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../../../components/AdminMenu";
import Container from "../../../components/AdminContainer";
import { getPanel, UpdatePanelDetails } from "../../../actions/panel.action";
import { useParams, useNavigate } from "react-router-dom";
import { getAllStaffMemebrs } from "../../../actions/members.action";

function PanelUpdate() {
  // const [del1, setDel1] = useState(false);
  // const [del2, setDel2] = useState(false);
  // const [del3, setDel3] = useState(false);

  const [mem1, setMem1] = useState("");
  const [mem2, setMem2] = useState("");
  const [mem3, setMem3] = useState("");

  const dispatch = useDispatch();
  //const navigate = useNavigate();
  const panels = useSelector((state) => state.panels);
  const members = useSelector((state) => state.members);
  console.log("Will See Panel:", panels);
  console.log("Will See Members:", members);
  const { panelId } = useParams();
  useEffect(() => {
    dispatch(getPanel(panelId));
    dispatch(getAllStaffMemebrs());
  }, []);

  const UpdatePnl = () => {
    const m1 = mem1;
    const m2 = mem2;
    const m3 = mem3;
    // if (m1 == null) {
    //   m1 = 0;
    // }
    // if (m2 == null) {
    //   m2 = 1;
    // }
    // if (m3 == null) {
    //   m3 = 2;
    // }
    const panel = {
      panelId: panelId,
      panelMembers: {
        member1: {
          username: members.staffMembers[m1].username,
          fullName: members.staffMembers[m1].fullName,
          memberId: members.staffMembers[m1].sliit_id,
        },
        member2: {
          username: members.staffMembers[m2].username,
          fullName: members.staffMembers[m2].fullName,
          memberId: members.staffMembers[m2].sliit_id,
        },
        member3: {
          username: members.staffMembers[m3].username,
          fullName: members.staffMembers[m3].fullName,
          memberId: members.staffMembers[m3].sliit_id,
        },
      },
    };
    console.log("Ado", members.staffMembers[m1].username);
    console.log("Ado1", m1);
    console.log("Ado2", m2);
    console.log("Ado3", m3);
    dispatch(UpdatePanelDetails(panel));
  };
  console.log("Mem1", mem1);
  console.log("Mem2", mem2);
  console.log("Mem3", mem3);
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
                    <p className="uppercase font-bold text-lg">w14</p>
                  </div>
                  <div className="col-span-5">
                    <p className="capitalize">username: </p>
                    <select
                      className="font-semibold mt-1 px-2 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-[63rem] sm:w-144 rounded-md focus:ring-1"
                      onChange={(e) => setMem1(e.target.value)}
                    >
                      <option value={1} disabled selected hidden>
                        {panels.panel.panelMembers.member1.username}
                      </option>

                      {Object.keys(members.staffMembers).map((element1) => (
                        <option key={element1} value={element1}>
                          {members.staffMembers[element1].username}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-span-5">
                    <p className="capitalize">username: </p>
                    <select
                      className="font-semibold mt-1 px-2 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-[63rem] sm:w-144 rounded-md focus:ring-1"
                      onChange={(e) => setMem2(e.target.value)}
                    >
                      <option value="" disabled selected hidden>
                        {panels.panel.panelMembers.member2.username}
                      </option>

                      {Object.keys(members.staffMembers).map((element2) => (
                        <option key={element2} value={element2}>
                          {members.staffMembers[element2].username}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-span-5">
                    <p className="capitalize">username: </p>
                    <select
                      className="font-semibold mt-1 px-2 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-[63rem] sm:w-144 rounded-md focus:ring-1"
                      onChange={(e) => setMem3(e.target.value)}
                    >
                      <option value="" disabled selected hidden>
                        {panels.panel.panelMembers.member3.username}
                      </option>

                      {Object.keys(members.staffMembers).map((element3) => (
                        <option key={element3} value={element3}>
                          {members.staffMembers[element3].username}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  className="mt-16 capitalize text-lg font-bold px-6 py-1 bg-regal-blue text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-50 sm:w-50 rounded-md hover:bg-regal-blue-active float-right text-sm"
                  onClick={() => {
                    UpdatePnl();
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
