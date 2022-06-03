import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Menu from "../../../components/SupervisorMenu";
import Container from "../../../components/SupervisorContainer";
import file from "../../../images/file.png";
import {
	getStudentSubmission,
	evaluateStudentSubmission,
} from "../../../actions/supervisor.action";

function Submissions() {
	const [marks, setMarks] = useState("");
	const [comment, setComment] = useState("");
	const { submission } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const studentSubmission = useSelector(state => state.assignment);

	useEffect(() => {
		dispatch(getStudentSubmission(submission));
	}, []);

	const handleEdit = () => {
		const data = {
			comment: comment,
			isViewed: 1,
			marks: marks,
		};
		dispatch(
			evaluateStudentSubmission(studentSubmission.assignment[0]._id, data),
		);
		navigate("/supervisor/markings-submissions");
	};

	if (studentSubmission.assignment[0]) {
		return (
			<div>
				<div className='w-screen h-screen grid grid-cols-12 bg-bk-white'>
					<div className=''>
						<Menu />
					</div>
					<div className='col-span-11 mx-auto my-auto '>
						<div className='relative'>
							<Container
								title='student submissions'
								width='w-[68rem] h-[24.9rem]'
							/>
							<div className='absolute top-[10rem] left-[7rem]'>
								<div className=' grid grid-cols-3 w-[60rem]'>
									<div className='col-span-2'>
										<p className='capitalize text-slate-700 text-sm mb-1'>
											Group ID:
										</p>
										<p className=' font-bold text-base mb-2'>
											{studentSubmission.assignment[0].groupID}
										</p>
									</div>
									<div className=''>
										<p className='capitalize text-slate-700 text-sm mb-1'>
											Interest:
										</p>
										<p className='capitalize font-bold text-base'>
											{studentSubmission.assignment[0].researchInterest}
										</p>
									</div>
									<div className='col-span-2 mt-8'>
										<p className='capitalize text-slate-700 text-sm mb-1'>
											Topic:
										</p>
										<p className='capitalize font-bold text-base mb-8'>
											{studentSubmission.assignment[0].topic}
										</p>
									</div>
									<div className='mt-8'>
										<p className='capitalize text-slate-700 text-sm mb-1'>
											file:
										</p>
										<img
											src={file}
											className='cursor-pointer'
											alt='file'
											onClick={
												(handleClick = () =>
													window.open(
														"http://localhost:2022/templates/" +
															studentSubmission.assignment[0].submissionArray[0]
																.submission,
													))
											}
										/>
									</div>
									<div className='col-span-2 mt-8'>
										<p className='capitalize text-slate-700 text-sm mb-1'>
											comment:
										</p>
										<textarea
											onChange={e => setComment(e.target.value)}
											className='resize-none font-semibold mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-[27rem] sm:w-144 rounded-md text-base focus:ring-1'></textarea>
									</div>
									<div className='mt-8'>
										<p className='capitalize text-slate-700 text-sm mb-1'>
											marks:
										</p>
										<input
											type='text'
											onChange={e => setMarks(e.target.value)}
											className='font-Nunito font-semibold mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-[7rem] sm:w-144 rounded-md text-base focus:ring-1'
										/>
									</div>
								</div>
								<div className='flex mt-[4.8rem] gap-3 ml-[58rem] '>
									<button
										onClick={handleEdit}
										className='capitalize font-bold text-lg  px-6 py-1 bg-regal-blue text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-50 sm:w-50 rounded-md hover:bg-regal-blue-active text-sm'>
										submit
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

export default Submissions;
