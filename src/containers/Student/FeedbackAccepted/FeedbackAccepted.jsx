import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../../../components/StudentMenu";
import Container from "../../../components/StudentContainer";
import { useNavigate, useParams } from "react-router-dom";
import {
  deletTopicDetailsById,
  getTopicByUserId,
} from "../../../actions/topics.action";
import dateFormat from "dateformat";

function FeedbackAccepted() {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log("ID", id);
  const dispatch = useDispatch();
  const topic = useSelector((state) => state.topics);
  useEffect(() => {
    dispatch(getTopicByUserId(id));
  }, []);
  //const [reject, setReject] = useState(false);

  const showBtn = () => {
    return (
      <div className="">
        <button
          className="font-bold capitalize mt-[1.5rem] text-lg  px-6 py-1 bg-regal-blue text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-50 sm:w-50 rounded-md hover:bg-regal-blue-active float-right mr-[5.5rem] text-sm"
          onClick={() => {
            dispatch(deletTopicDetailsById(topic.topicById._id));
            navigate("/student/topicRegistration");
          }}
        >
          re-submit topic
        </button>
      </div>
    );
  };

  return (
    <div>
      <div className="w-screen h-screen grid grid-cols-12 bg-bk-white">
        <div className="">
          <Menu />
        </div>
        <div className="col-span-11 mx-auto my-auto ">
          <div class="relative">
            <Container title="feedback" width="w-[68rem]" />
            <div class="absolute left-[5rem] top-[9rem]">
              <div className="flex flex-col gap-8">
                <div className="">
                  <p className="capitalize">status:</p>
                  <p className="capitalize font-bold text-lg">
                    {topic.topicById.supervisorStatus == "unavailable" ? (
                      <p>pending</p>
                    ) : (
                      topic.topicById.supervisorStatus
                    )}
                  </p>
                </div>
                <div className="">
                  <p className="capitalize">date:</p>
                  <p className="capitalize font-bold text-lg">
                    {dateFormat(topic.topicById.updatedAt, "mm/dd/yyyy")}
                  </p>
                </div>
                <div className="">
                  <p className="capitalize">evaluated by:</p>
                  <p className="capitalize font-bold text-lg">
                    {topic.topicById.supervisorName}
                  </p>
                </div>
                <div className="">
                  <p className="capitalize">comment:</p>
                  <p className="capitalize font-bold text-lg pr-24">
                    {topic.topicById.supervisorComment}
                  </p>
                </div>
              </div>
              {topic.topicById.supervisorStatus == "Rejected"
                ? showBtn()
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackAccepted;
