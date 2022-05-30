import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../../../components/SupervisorMenu";
import Container from "../../../components/SupervisorContainer";
import { getTopicById } from "../../../actions/topics.action";
import { useNavigate, useParams } from "react-router-dom";

function AssignedTopicDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const topic = useSelector((state) => state.topics);
  console.log("This is Topic Details:", topic);
  useEffect(() => {
    dispatch(getTopicById(id));
  }, []);
  return (
    <div>
      <div className="w-screen h-screen grid grid-cols-12 bg-bk-white">
        <div className="">
          <Menu />
        </div>
        <div className="col-span-11 mx-auto my-auto ">
          <div className="relative">
            <Container title="Topics" width="w-[68rem] h-[24.9rem]" />
            <div className="absolute top-[10rem] left-[7rem]">
              <div className=" grid grid-cols-2 w-[60rem]">
                <div className="flex flex-col gap-8">
                  <div>
                    <p className="capitalize text-slate-700 text-sm mb-1">
                      Group ID:
                    </p>
                    <p className=" font-bold text-base mb-2">
                      {topic.topic.groupId}
                    </p>
                  </div>
                  <div>
                    <p className="capitalize text-slate-700 text-sm mb-1">
                      Topic:
                    </p>
                    <p className="capitalize font-bold text-base mb-8">
                      {topic.topic.topic}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-8">
                  <div>
                    <p className="capitalize text-slate-700 text-sm mb-1">
                      Interest:
                    </p>
                    <p className="capitalize font-bold text-base">
                      {topic.topic.researchInterest}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p className="capitalize text-base text-slate-700 text-sm mb-1 mt-4">
                  Comment:
                </p>
                <p className="capitalize font-semibold text-sm mb-8 col-span-2">
                  {topic.topic.supervisorComment}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignedTopicDetails;
