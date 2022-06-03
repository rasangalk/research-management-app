import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../../../components/SupervisorMenu";
import Container from "../../../components/SupervisorContainer";
import {
	getTopicById,
	SupervisorUpdateTopicDeials,
	SupervisorUpdateTopicTick,
	SupervisorUserStudentUpdate,
} from "../../../actions/topics.action";
import { useNavigate, useParams } from "react-router-dom";
import { getSupervisorDetails } from "../../../actions/supervisor.action";

function SupervisortopicsAcceptanceReject() {
	const [comment, setComment] = useState();
	const supervisor = useSelector(state => state.supervisor);

	const user = window.localStorage.getItem("user");
	const userID = JSON.parse(user)._id;

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id } = useParams();
	const topic = useSelector(state => state.topics);
	console.log("This is Topic Details:", topic);
	useEffect(() => {
		dispatch(getTopicById(id));
		dispatch(getSupervisorDetails(userID));
	}, []);

	console.log("supervisor.supervisor.fullName", supervisor.supervisor.fullName);
	const acceptTopic = () => {
		const data = {
			supervisorName: supervisor.supervisor.fullName,
			topicId: id,
			status1: "Accepted",
			supComment: comment,
		};

		const tickData = {
			supervisorName: supervisor.supervisor.fullName,
			groupId: topic.topic.groupId,
			status: "true",
		};

		const supdata = {
			supervisorName: supervisor.supervisor.fullName,
		};

		dispatch(SupervisorUpdateTopicDeials(data));
		dispatch(SupervisorUpdateTopicTick(tickData));
		dispatch(SupervisorUserStudentUpdate(topic.topic.user, supdata));
		navigate("/supervisor/topics");
	};

	const rejectTopic = () => {
		const data = {
			supervisorName: supervisor.supervisor.fullName,
			topicId: id,
			status1: "Rejected",
			supComment: comment,
		};

		const tickData = {
			groupId: topic.topic.groupId,
			status: "false",
		};
		dispatch(SupervisorUpdateTopicDeials(data));
		dispatch(SupervisorUpdateTopicTick(tickData));
		navigate("/supervisor/topics");
	};

	return (
		<div>
			<div className='w-screen h-screen grid grid-cols-12 bg-bk-white'>
				<div className=''>
					<Menu />
				</div>
				<div className='col-span-11 mx-auto my-auto '>
					<div className='relative'>
						<Container title='Topics' width='w-[68rem] h-[24.9rem]' />
						<div className='absolute top-[10rem] left-[7rem]'>
							<div className=' grid grid-cols-2 w-[60rem]'>
								<div className='flex flex-col gap-8'>
									<div>
										<p className='capitalize text-slate-700 text-sm mb-1'>
											Group ID
										</p>
										<p className=' font-bold text-base mb-2'>
											{topic.topic.groupId}
										</p>
									</div>
									<div>
										<p className='capitalize text-slate-700 text-sm mb-1'>
											Topic
										</p>
										<p className='capitalize font-bold text-base mb-8'>
											{topic.topic.topic}
										</p>
									</div>
									<div>
										<p className='capitalize text-base text-slate-700 text-sm mb-1'>
											Comment
										</p>
										<input
											type='text'
											name='Comment'
											className='font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[60rem] sm:w-[60rem] rounded-md text-base focus:ring-1 px-3 py-6 '
											onChange={e => setComment(e.target.value)}
										/>
									</div>
								</div>
								<div className='flex flex-col gap-8'>
									<div>
										<p className='capitalize text-slate-700 text-sm mb-1'>
											Interest
										</p>
										<p className='capitalize font-bold text-base'>
											{topic.topic.researchInterest}
										</p>
									</div>
								</div>
							</div>
							<div className='flex mt-[4.8rem] gap-3 ml-[51.8rem] '>
								<button
									className='  text-lg  px-6 py-1 bg-[#F65354] text-white border border-slate-300 focus:outline-none focus:border-[#f76d6d]-500 focus:ring-sky-500 block lg:w-50 sm:w-50 rounded-md hover:bg-[#c73e3e]-active text-sm'
									onClick={() => {
										rejectTopic();
									}}>
									Reject
								</button>
								<button
									className=' text-lg  px-6 py-1 bg-regal-blue text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-50 sm:w-50 rounded-md hover:bg-regal-blue-active text-sm'
									onClick={() => {
										acceptTopic();
									}}>
									Accept
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SupervisortopicsAcceptanceReject;
