import React, { useEffect, useState } from "react";
import Menu from "../../../components/StudentMenu";
import submit from "../../../images/submit-icon.png";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { getSubmissions } from "../../../actions/submissions.action";
import { Link, useNavigate } from "react-router-dom";
import { getTopicByUserId } from "../../../actions/topics.action";

function StudentSubmission() {
	const [page, setPage] = useState("submission");
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const submissions = useSelector(state => state.submissions);
	const topic = useSelector(state => state.topics);
	const user = window.localStorage.getItem("user");
	const userID = JSON.parse(user)._id;
	useEffect(() => {
		dispatch(getSubmissions());
		dispatch(getTopicByUserId(userID));
	}, []);

	const supervisorStatusBtn = () => {
		if (topic.topicById.supervisorStatus == "Rejected") {
			return (
				<button className='capitalize bg-regal-blue hover:bg-regal-blue-active ml-5 mt-12 px-5 py-2 text-sm rounded-md font-bold text-white'>
					<Link to='/student/topicRegistration'>register topic</Link>
				</button>
			);
		} else if (topic.topicById.supervisorStatus == null) {
			return (
				<button className='capitalize bg-regal-blue hover:bg-regal-blue-active ml-5 mt-12 px-5 py-2 text-sm rounded-md font-bold text-white'>
					<Link to='/student/topicRegistration'>register topic</Link>
				</button>
			);
		} else if (topic.topicById.supervisorStatus == "unavailable") {
			return (
				<button className='capitalize bg-regal-blue-disabled hover:bg-regal-blue-disabled ml-5 mt-12 px-5 py-2 text-sm rounded-md font-bold text-white'>
					register topic
				</button>
			);
		} else if (topic.topicById.supervisorStatus == "Accepted") {
			return (
				<button className='capitalize bg-regal-blue-disabled hover:bg-regal-blue-disabled ml-5 mt-12 px-5 py-2 text-sm rounded-md font-bold text-white'>
					register topic
				</button>
			);
		} else {
			return (
				<button className='capitalize bg-regal-blue-disabled hover:bg-regal-blue-disabled ml-5 mt-12 px-5 py-2 text-sm rounded-md font-bold text-white'>
					register topic
				</button>
			);
		}
	};

	return (
		<div className='h-screen w-screen'>
			<div className='grid grid-cols-12 grid-rows-2 w-full h-full bg-bk-white gap-2'>
				<div className=''>
					<Menu status={page} />
				</div>
				<div className='col-span-3'>
					<div className='w-[19rem] h-[19rem] bg-white  rounded-xl mx-auto mt-6 drop-shadow-xl'>
						<h2 className='capitalize text-xl font-bold ml-5 pt-2'>
							topic reg
						</h2>
						<p className='capitalized ml-5 mr-3 mt-8 text-sm'>
							Once a topic registered, Register Topic button will be dissable.
							Button will be enable if the submited topic is rejected by the
							supervisor or the panel.
						</p>
						{supervisorStatusBtn()}
					</div>
				</div>
				<div className='col-span-8'>
					<div className='w-[50rem] h-[19rem] mx-auto mt-6 bg-white rounded-xl drop-shadow-xl'>
						<h2 className='capitalize text-xl font-bold ml-5 pt-2'>feedback</h2>
						<div className='grid grid-cols-5 mx-6 mt-4'>
							<div className='col-span-4 uppercase font-bold'>name</div>
							<div className='uppercase font-bold mx-auto'>status</div>
						</div>
						<div className='grid grid-cols-5 mx-6 mt-1 overflow-y-auto h-[9rem]'>
							<div className='col-span-4 capitalize mt-1 underline underline-offset-3'>
								<Link to={"/student/topic/accepted/" + userID}>
									topic registration-supervisor
								</Link>
							</div>
							<div className='capitalize mt-1 mx-auto'>
								{topic.topicById.supervisorStatus == "unavailable" ? (
									<p>pending</p>
								) : (
									topic.topicById.supervisorStatus
								)}
							</div>
							<div className='col-span-4 capitalize mt-1 underline underline-offset-3'>
								topic registration-co-supervisor
							</div>
							<div className='capitalize mt-1 mx-auto'></div>
							<div className='col-span-4 capitalize mt-1 underline underline-offset-3'>
								topic details
							</div>
							<div className='capitalize mt-1 mx-auto'></div>
							<div className='col-span-4 capitalize mt-1 underline underline-offset-3'>
								research presentation
							</div>
							<div className='capitalize mt-1 mx-auto'></div>
							<div className='col-span-4 capitalize mt-1 underline underline-offset-3'>
								final thesis
							</div>
							<div className='capitalize mt-1 mx-auto'></div>
						</div>
					</div>
				</div>
				<div className='col-start-2 col-span-11 ml-4'>
					<div className='bg-white w-[74rem] h-[17rem] mt-8 rounded-xl drop-shadow-xl'>
						<h2 className='capitalize text-xl font-bold ml-5 pt-2'>
							submission
						</h2>
						<div className='grid grid-cols-4 mt-4 mx-6 mb-2'>
							<div className='col-span-2 uppercase font-bold'>name</div>
							<div className='uppercase font-bold mx-auto'>deadline</div>
							<div className='uppercase font-bold mx-auto'>time</div>
						</div>

						<div className='grid grid-rows-10 mx-6 overflow-y-auto h-[6rem] '>
							{submissions.submissions.length > 0
								? submissions.submissions.map(submission => (
										<div
											className='cursor-pointer'
											onClick={() => {
												navigate("/student/file-submission/" + submission._id);
											}}>
											<div className='grid grid-cols-4' key={submission._id}>
												<div className='flex col-span-2 gap-2 items-center '>
													<img src={submit} alt='submit' className='h-3   ' />
													<p className='capitalize mt-2'>
														{submission.caption}
													</p>
												</div>
												<div className='mx-auto mt-2'>
													{submission.deadlineDate}
												</div>
												<div className='mx-auto mt-2'>
													{submission.deadlineTime}
												</div>
											</div>
										</div>
								  ))
								: null}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default StudentSubmission;
