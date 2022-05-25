import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../../../components/AdminMenu";
import Container from "../../../components/AdminContainer";
import { CreateSubmissions } from "../../../actions/submissions.action";

function ViewSubmission() {
//   const [caption, setCaption] = useState("");
//   const [description, setDescription] = useState("");
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubmissionByID("628a8981e44e803003a29fd5"));
  }, []);

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
              <div className="flex flex-col gap-3 h-[22rem] w-[64rem] outline-0">
                <div>
                  <p>Caption</p>
                  <input
                    type="text"
                    readOnly
                    onChange={(e) => setCaption(e.target.value)}
                    className="read-only border-2 w-[60rem] break-all whitespace-normal rounded-md py-1 px-2 mt-1 outline-0"
                  />
                </div>
                <div>
                  <p>Description</p>
                  <textarea
                    readOnly
                    onChange={(e) => setDescription(e.target.value)}
                    className=" border-2 w-[60rem] rounded-md h-20 py-1 px-2 resize-none mt-1 outline-0"
                  />
                </div>
                <div>
                  <p>Due Date</p>
                  <input
                    type="date"
                    readOnly
                    onChange={(e) => setDate(e.target.value)}
                    className=" border-2 w-[14rem] rounded-md px-4 py-1 mt-1 outline-0"
                  />
                </div>
                <div>
                  <p>Due Time</p>
                  <input
                    type="time"
                    readOnly
                    onChange={(e) => setTime(e.target.value)}
                    className=" border-2 w-[14rem] rounded-md px-4 py-1 mt-1 outline-0"
                  />
                </div>
              </div>
              <button
                className=" float-right capitalize bg-regal-blue hover:bg-regal-blue-active mx-auto px-6 py-2 text-sm rounded-md font-bold text-white mr-4 mt-8"
                onClick={addSubmission}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewSubmission;
