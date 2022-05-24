import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemplates } from "../../../actions/template.action";
import Menu from "../../../components/StudentMenu";

function StudentTemplateList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTemplates());
  }, []);
  const templates = useSelector((state) => state.templates);
  console.log(templates);

  if (templates.templates) {
    return (
      <div className="bg-bk-white h-screen w-screen">
        <div className="grid grid-cols-12 h-full w-full grid-rows-2">
          <div className="h-full w-[10px]">
            <Menu />
          </div>
          <div className="row-span-2 col-span-11 2xl:w-[69rem] w-[67rem] h-[37rem] m-auto bg-white rounded-xl drop-shadow-xl">
            <h2 className="capitalize text-xl font-bold ml-14 pt-8">
              templates
            </h2>
            <div className="mt-[2rem] w-[60rem] h-[26rem] ml-14 my-auto border-2 rounded-xl">
              <table className="table-auto w-[40rem] mx-auto my-5 ">
                <div className="w-[55rem]">
                  <thead>
                    <tr className="text-lg font-medium uppercase bg-white">
                      <th className="w-[48rem] text-left pt-1 pl-2 pb-2 text-lg">
                        Template Name
                      </th>
                      <th className="w-[14rem] text-left text-lg">Action</th>
                    </tr>
                  </thead>
                </div>

                <div className="h-[20rem] overflow-y-scroll w-[55rem]">
                  <tbody className="leading-10">
                    {templates.templates.map((templates) => (
                      <tr className="even:bg-white odd:bg-slate-100 ">
                        <td className="px-5 py-1 w-[80rem]">
                          {templates.caption}
                        </td>
                        <td className="px-5 py-1 w-[20rem]">
                          <button
                            className="hover:underline-offset-1 hover:underline"
                            value={templates.researchTemplates[0].template}
                            onClick={
                              (handleClick = (e) =>
                                window.open(
                                  "http://localhost:2022/templates/" +
                                    e.target.value
                                ))
                            }
                          >
                            Download
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </div>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentTemplateList;
