import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../../../components/StudentMenu";
import {
  AddFileSubmission,
  getSubmissionByID,
} from "../../../actions/submissions.action";
import Container from "../../../components/StudentContainer";
import { getTopicByUserId } from "../../../actions/topics.action";

function StudentFileSubmission() {
  const dispatch = useDispatch();
  const [file, setFile] = useState([]);
  const [submissionArray, setSubmissionArray] = useState([]);
  const user = window.localStorage.getItem("user");
  const userID = JSON.parse(user)._id;
  const panelID = JSON.parse(user).panel;

  useEffect(() => {
    dispatch(getSubmissionByID("628e739239a828a246125944"));
    dispatch(getTopicByUserId(userID));
  }, []);

  const topic = useSelector((state) => state.topics);

  const submission = useSelector((state) => state.submissionByID);

  const addSubmission = () => {
    let form = new FormData();
    form.append("status", submission.submission.caption);
    form.append("topic", topic.topicById.topic);
    form.append("researchInterest", topic.topicById.researchInterest);
    form.append("groupID", topic.topicById.groupId);
    form.append("supervisorID", topic.topicById.supervisor);
    form.append("panelID", panelID);

    for (let file of submissionArray) {
      form.append("studentSubmission", file);
    }

    dispatch(AddFileSubmission(form));
  };

  const handleFile = (e) => {
    setSubmissionArray([e.target.files[0]]);
  };

  var today = new Date();

  if (submission) {
    return (
      <div>
        <div className="w-screen h-screen grid grid-cols-12 bg-bk-white">
          <div>
            <Menu />
          </div>
          <div className="col-span-11 mx-auto my-auto">
            <div class="relative">
              <Container title="submission" width="w-[68rem]" />
              <div class="absolute left-[5rem] top-[9rem] w-[66rem] overflow-y-scroll">
                <div className="flex flex-col gap-4 h-[24rem] w-[60rem]">
                  <h2 className="text-2xl bold font-semibold">
                    {submission.submission.caption}
                  </h2>
                  <p className="break-all whitespace-normal">
                    {submission.submission.description}
                  </p>
                  <h2 className="text-2xl bold font-semibold capitalize">
                    submission status
                  </h2>
                  <div className="grid grid-cols-2 grid-rows-3 w-[50rem]">
                    <div className="bg-slate-100 px-4 py-2">
                      Submission Status
                    </div>
                    <div className="bg-slate-100 px-4 py-2">Not Attempted</div>
                    <div className="bg-white px-4 py-2">Due Date</div>
                    <div className="bg-white px-4 py-2">
                      {submission.submission.deadlineDate}{" "}
                      {submission.submission.deadlineTime}
                    </div>
                    <div className="bg-slate-100 px-4 py-2">Time Remaining</div>
                    <div className="bg-slate-100 px-4 py-2">
                      {today.getHours()}
                    </div>
                  </div>
                  <div>
                    <input
                      type="file"
                      name="Choose File"
                      onChange={handleFile}
                    />
                  </div>

                  <button
                    className="capitalize bg-regal-blue hover:bg-regal-blue-active mx-auto px-5 py-2 text-sm rounded-md font-bold text-white w-40"
                    onClick={addSubmission}
                  >
                    Add submission
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentFileSubmission;
