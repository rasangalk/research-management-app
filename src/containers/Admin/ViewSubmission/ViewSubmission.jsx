import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../../../components/AdminMenu";
import Container from "../../../components/AdminContainer";
import { getSubmissionByID } from "../../../actions/submissions.action";

function ViewSubmission() {
  const submission = useSelector((state) => state.submission);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubmissionByID("628e739239a828a246125944"));
  }, []);
  console.log("SUB", submission);

  if (submission.submission) {
    return (
      <div>
        <div className="w-screen h-screen grid grid-cols-12 bg-bk-white">
          <div>
            <Menu />
          </div>
          <div className="col-span-11 mx-auto my-auto">
            <div class="relative">
              <Container title="submission" width="w-[68rem]" />
              <div class="absolute left-[6rem] top-[9rem] w-[66rem]">
                <div className="flex flex-col gap-6 h-[22rem] w-[64rem] outline-0">
                  <div>
                    <p>Caption:</p>
                    <input
                      type="textarea"
                      readOnly
                      value={submission.submission.caption}
                      className="font-bold text-lg border-0 w-[60rem] break-all whitespace-normal rounded-md py-1 mt-1 outline-0"
                    />
                  </div>
                  <div>
                    <p>Description:</p>
                    <div className=" border-0 w-[60rem] rounded-md py-1 resize-none mt-1 outline-0">
                      {submission.submission.description}
                    </div>
                  </div>
                  <div>
                    <p>Due Date:</p>
                    <input
                      type="date"
                      readOnly
                      value={submission.submission.deadlineDate}
                      className=" border-0 w-[14rem] rounded-md py-1 mt-1 outline-0"
                    />
                  </div>
                  <div>
                    <p>Due Time</p>
                    <input
                      type="time"
                      readOnly
                      value={submission.submission.deadlineTime}
                      className=" border-0 w-[14rem] rounded-md py-1 mt-1 outline-0"
                    />
                  </div>
                </div>
                <button className=" float-right capitalize bg-regal-blue hover:bg-regal-blue-active mx-auto px-6 py-2 text-sm rounded-md font-bold text-white mr-4 mt-8">
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewSubmission;
