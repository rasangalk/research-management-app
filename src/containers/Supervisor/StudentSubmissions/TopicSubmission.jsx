import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Menu from "../../../components/SupervisorMenu";
import back from "../../../images/back-icon.png";
import RedDot from "../../../images/red-dot.png";
import GreenDot from "../../../images/green-dot.png";
import { getStudentSubmissionsByName } from "../../../actions/supervisor.action";

function TopicSubmission() {
  const submission = useSelector((state) => state.submission);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { assignmentName } = useParams();

  useEffect(() => {
    dispatch(getStudentSubmissionsByName(assignmentName));
  }, []);

  console.log(submission);
  if (submission.submission) {
    return (
      <div>
        <div className="w-screen h-screen grid grid-cols-12 bg-bk-white">
          <div className="">
            <Menu />
          </div>
          <div className="col-span-11">
            <div className="grid grid-rows-6 h-full w-full">
              <div className="flex items-center gap-8">
                <div className="ml-[54rem]">
                  <input
                    type="search"
                    placeholder="Search"
                    className="font-normal px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-80 rounded-md text-base focus:ring-1"
                  />
                </div>
              </div>
              <div className="row-span-5 mx-auto bg-white w-[70.5rem] drop-shadow-xl rounded-xl mt-0 h-[33rem]">
                <div className="flex flex-row items-center ml-4 gap-4 mt-4">
                  <img src={back} alt="back" className="h-12" />
                  <h2 className="text-xl font-bold pt-2 capitalize">
                    student submissions
                  </h2>
                </div>
                <div className="overflow-auto h-[25rem] mx-16 mt-5">
                  <table className="border-collapse w-full ">
                    <thead>
                      <tr>
                        <th className="py-2 px-2 uppercase bg-white text-left sticky top-0 z-1">
                          group id
                        </th>
                        <th className="py-2 px-2 uppercase bg-white text-left sticky top-0 z-1">
                          date & time
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {submission.submission.map((submission) => (
                        <tr className="even:bg-white odd:bg-slate-100 cursor-pointer">
                          <td className="uppercase py-2 px-2">
                            {submission.user}
                          </td>
                          <td className="lowercase py-2 px-2">
                            <div className="flex flex-row gap-2 items-center">
                              <p>{submission.createdAt.substring(0, 10)}</p><p>{submission.createdAt.match(/\d\d:\d\d/)}</p>
                              <img
                                src={GreenDot}
                                className="h-3 drop-shadow-sm"
                              />
                            </div>
                          </td>
                        </tr>
                      ))}
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
}

export default TopicSubmission;
