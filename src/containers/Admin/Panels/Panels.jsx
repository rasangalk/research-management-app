import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPanelDetails } from "../../../actions/panel.action";
import Menu from "../../../components/AdminMenu";
import { useNavigate } from "react-router-dom";

function Panels() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const panels = useSelector((state) => state.panels);
  //console.log("This is Panels:", panels.panels[0].panelMembers);
  useEffect(() => {
    dispatch(getAllPanelDetails());
  }, []);
  return (
    <div>
      <div className="w-screen h-screen grid grid-cols-12 bg-bk-white">
        <div className="">
          <Menu />
        </div>
        <div className="col-span-11">
          <div className="grid grid-rows-6 h-full w-full">
            <div className="flex items-center gap-8">
              <div className="ml-[50rem]">
                <input
                  type="search"
                  placeholder="Search"
                  className="font-normal px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-78 rounded-md text-base focus:ring-1"
                />
              </div>
              <div className="flex flex-col">
                <button className="capitalize text-lg font-bold px-6 py-1 bg-regal-blue text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-50 sm:w-50 rounded-md hover:bg-regal-blue-active float-right  text-sm">
                  create panel
                </button>
              </div>
            </div>
            <div className="row-span-5 mx-auto bg-white w-[70.5rem] drop-shadow-xl rounded-xl mt-0 h-[33rem]">
              <h2 className="text-xl font-bold ml-5 pt-2 capitalize">panels</h2>
              <div className="overflow-auto h-[25rem] mx-16 mt-5">
                <table className="border-collapse w-full ">
                  <thead>
                    <tr>
                      <th className="py-2 px-2 uppercase bg-white text-left sticky top-0 z-1">
                        id
                      </th>
                      <th className="py-2 px-2 uppercase bg-white text-left sticky top-0 z-1">
                        member
                      </th>
                      <th className="py-2 px-2 uppercase bg-white text-left sticky top-0 z-1">
                        member
                      </th>
                      <th className="py-2 px-2 uppercase bg-white text-left sticky top-0 z-1">
                        member
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {panels.panels.length > 0
                      ? panels.panels.map((member) => (
                          <tr
                            className="even:bg-white odd:bg-slate-100 cursor-pointer"
                            onClick={() => {
                              navigate("/admin/members/" + member._id);
                            }}
                          >
                            <td className="capitalize py-2 px-2">
                              {member.panelId}
                            </td>
                            <td className="lowercase py-2 px-2">
                              {member.panelMembers.member1.username}
                            </td>
                            <td className="lowercase py-2 px-2">
                              {member.panelMembers.member2.username}
                            </td>
                            <td className="lowercase py-2 px-2">
                              {member.panelMembers.member3.username}
                            </td>
                          </tr>
                        ))
                      : null}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Panels;
