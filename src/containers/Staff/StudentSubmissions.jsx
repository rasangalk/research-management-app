import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Menu from "../../components/StaffMenu";
import back from "../../images/back-icon.png";
import { getStudentSubmissions } from "../../actions/supervisor.action";
import { getSubmissions } from "../../actions/submissions.action";
import RedDot from "../../images/red-dot.png";
import GreenDot from "../../images/green-dot.png";

function StudentSubmissions() {
	const navigate = useNavigate();
	const Allsubmissions = useSelector(state => state.allSubmissions);
	const submissions = useSelector(state => state.submissions);
	const dispatch = useDispatch();
	const user = JSON.parse(localStorage.getItem("user"));
	const [assignment, setAssignment] = useState("");

	useEffect(() => {
		dispatch(getStudentSubmissions());
		dispatch(getSubmissions());
	}, []);

	console.log(assignment);
	if (Allsubmissions.allSubmissions.allSubmissions) {
		return (
			<div>
				<div className='w-screen h-screen grid grid-cols-12 bg-bk-white'>
					<div className=''>
						<Menu status='list' />
					</div>
					<div className='col-span-11'>
						<div className='grid grid-rows-6 h-full w-full'>
							<div className='flex items-center gap-8'>
								<div className='ml-[50.5rem]'>
									<div>
										<p className='capitalize text-slate-700 text-sm mb-1'>
											Submission
										</p>
									</div>
									<div className='flex flex-col'>
										<select
											onChange={e => setAssignment(e.target.value)}
											value={assignment}
											className='font-bold h-[2.2rem] text-sm px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-[24rem] sm:w-144 rounded-md focus:ring-1'>
											{/* <option value="" selected disabled hidden>
                        Choose an assignment
                      </option> */}
											<option value='Presentation Evaluation'>
												Presentation Evaluation
											</option>
											<option value='Topic Details Submission'>
												Topic Details Submission
											</option>
										</select>
									</div>
								</div>
							</div>
							<div className='row-span-5 mx-auto bg-white w-[70.5rem] drop-shadow-xl rounded-xl mt-0 h-[33rem]'>
								<div className='flex flex-row items-center ml-4 gap-4 mt-4'>
									<img src={back} alt='back' className='h-12' />
									<h2 className='text-xl font-bold pt-2 capitalize'>
										student submissions
									</h2>
								</div>
								<div className='overflow-auto h-[25rem] mx-16 mt-5'>
									<table className='border-collapse w-full '>
										<thead>
											<tr>
												<th className='py-2 px-2 uppercase bg-white text-left sticky top-0 z-1'>
													group id
												</th>
												<th className='py-2 px-2 uppercase bg-white text-left sticky top-0 z-1'>
													topic
												</th>
												<th className='py-2 px-2 uppercase bg-white text-left sticky top-0 z-1'>
													date & time
												</th>
											</tr>
										</thead>
										<tbody>
											{Allsubmissions.allSubmissions.allSubmissions
												// .filter(submission => submission.status === assignment)
												.map(submission =>
													submission.panelID === user.panel ? (
														<tr
															className='even:bg-white odd:bg-slate-100 cursor-pointer'
															onClick={() => {
																navigate("/r13/" + submission._id);
															}}>
															<td className='uppercase py-2 px-2'>
																{submission.groupID}
															</td>
															<td className='uppercase py-2 px-2'>
																{submission.topic}
															</td>
															<td className='lowercase py-2 px-2'>
																<div className='flex flex-row gap-2 items-center'>
																	<p>{submission.createdAt.substring(0, 10)}</p>
																	<p>
																		{submission.createdAt.match(/\d\d:\d\d/)}
																	</p>
																	<img
																		src={GreenDot}
																		className='h-3 drop-shadow-sm'
																	/>
																</div>
															</td>
														</tr>
													) : null,
												)}
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

export default StudentSubmissions;
