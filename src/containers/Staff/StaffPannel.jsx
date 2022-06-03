import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMarkingSchemas } from "../../actions/markingscheme.action";
import { getPanelByPanelId } from "../../actions/staff.action";
import Menu from "../../components/StaffMenu";

function StaffPannel() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = window.localStorage.getItem("user");
  const panelID = JSON.parse(user).panel;
  console.log("Panel ID", panelID);
  const staff = useSelector((state) => state.staff);
  const markingSchemas = useSelector((state) => state.markingSchemas);
  console.log("This is Staff Details:", staff);
  console.log("This is Schema Details:", markingSchemas);
  useEffect(() => {
    dispatch(getPanelByPanelId(panelID));
    dispatch(getMarkingSchemas());
  }, []);

  if (staff.panel.panelMembers && markingSchemas.markingSchemas) {
    return (
      <div className="h-screen w-screen">
        <div className="grid grid-cols-12 grid-rows-2 w-full h-full bg-bk-white gap-2">
          <div className="">
            <Menu />
          </div>

          <div className="col-start-2 col-span-11 ml-4">
            <div className="bg-white w-[74rem] h-[17rem] mt-8 rounded-xl drop-shadow-xl">
              <h2 className="capitalize text-xl font-bold ml-5 pt-2">
                marking schemes
              </h2>
              <div className="overflow-auto h-[10rem] mx-8 mt-5">
                <table className="border-collapse w-full ">
                  <thead>
                    <tr>
                      <th className="py-2 px-2 uppercase bg-white text-left sticky top-0 z-1 pr-[24rem]">
                        assignment
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {markingSchemas.markingSchemas.map((schema, index) => (
                      <tr
                        className="even:bg-white odd:bg-slate-100 cursor-default hover:bg-slate-200"
                        key={index}
                      >
                        <td
                          className="px-5 py-2 w-[80rem]"
                          onClick={() =>
                            navigate("/admin/marking-scheme/view/" + schema._id)
                          }
                        >
                          {schema.assignmentName}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-start-2 col-span-11 ml-4">
            <div className="col-span-11 h-[17rem] 2xl:w-[74rem] w-[74rem]  bg-white col-start-2 rounded-xl drop-shadow-xl">
              <h2 className="capitalize text-xl font-bold ml-5 pt-2">group</h2>
              <div className="grid grid-cols-5 mx-8 mt-4">
                <div className="capitalize col-span-2 font-bold mb-2 px-4">
                  name
                </div>
                <div className="capitalize col-span-2 font-bold">username</div>
                <div className=" font-bold">Member ID</div>

                <div className="capitalize col-span-2 px-4 py-2 bg-white-blue">
                  {staff.panel.panelMembers.member1.fullName}
                </div>
                <div className="lowercase col-span-2 py-2 bg-white-blue">
                  {staff.panel.panelMembers.member1.username}
                </div>
                <div className="capiatalize py-2 bg-white-blue">
                  {staff.panel.panelMembers.member1.memberId}
                </div>

                <div className="capitalize col-span-2 px-4 py-2">
                  {staff.panel.panelMembers.member2.fullName}
                </div>
                <div className="lowercase col-span-2 py-2">
                  {staff.panel.panelMembers.member2.username}
                </div>
                <div className="capiatalize py-2">
                  {staff.panel.panelMembers.member2.memberId}
                </div>

                <div className="capitalize col-span-2 px-4 bg-white-blue py-2">
                  {staff.panel.panelMembers.member3.fullName}
                </div>
                <div className="lowercase col-span-2 bg-white-blue py-2">
                  {staff.panel.panelMembers.member3.username}
                </div>
                <div className="capiatalize bg-white-blue py-2">
                  {staff.panel.panelMembers.member3.memberId}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StaffPannel;
