import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../../../components/AdminMenu";
import Container from "../../../components/AdminContainer";
import { getGroupDetails } from "../../../actions/student.action";
import { useParams, useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import {
	getAllPanelDetails,
	UpdateStudentGrpPanel,
} from "../../../actions/panel.action";

function GroupManipulations() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [panel, setPanel] = useState("");
	const students = useSelector(state => state.students);
	const panels = useSelector(state => state.panels);
	console.log("Will See:", students.group);
	const { grpId } = useParams();
	useEffect(() => {
		dispatch(getGroupDetails(grpId));
		dispatch(getAllPanelDetails());
	}, []);

	const updatePanel = () => {
		const pnl = {
			groupId: students.group._id,
			panel: panel,
		};
		dispatch(UpdateStudentGrpPanel(pnl));
		navigate("/admin/view-groups");
	};

	if (students.group.username) {
		return (
			<div>
				<div className='w-screen h-screen grid grid-cols-12 bg-bk-white'>
					<div className=''>
						<Menu />
					</div>
					<div className='col-span-11 mx-auto my-auto '>
						<div class='relative'>
							<Container title='groups' width='w-[68rem]' />
							<div class='absolute left-[5rem] top-[9rem] w-[66rem]'>
								<div className='grid grid-cols-2 overflow-auto h-[20rem]'>
									<div className=''>
										<p className='capitalize'>
											group <span className='uppercase'>id:</span>
										</p>
										<p className='uppercase font-bold text-lg'>
											{students.group.username}
										</p>
									</div>
									<div className=''>
										<p className='capitalize'>supervisor:</p>
										<p className='capitalize font-bold text-lg'>
											{students.group.supervisor}{" "}
										</p>
									</div>
									<div className='mt-12'>
										<p className='capitalize'>co-supervisor:</p>
										<p className='capitalize font-bold text-lg'>
											{students.group.coSupervisor}
										</p>
									</div>
									<div className='mt-12'>
										<p className='capitalize'>leader:</p>
										<p className='capitalize font-bold text-lg'>
											{students.group.students.leader.fullName}
										</p>
									</div>
									<div className='mt-12'>
										<p className='capitalize'>
											leader <span className='uppercase'>id:</span>
										</p>
										<p className='uppercase font-bold text-lg'>
											{students.group.students.leader.sliit_id}
										</p>
									</div>
									<div className='mt-12'>
										<p className='capitalize'>member:</p>
										<p className='capitalize font-bold text-lg'>
											{students.group.students.member1.fullName}
										</p>
									</div>
									<div className='mt-12'>
										<p className='capitalize'>
											member <span className='uppercase'>id:</span>
										</p>
										<p className='uppercase font-bold text-lg'>
											{students.group.students.member1.sliit_id}
										</p>
									</div>
									<div className='mt-12'>
										<p className='capitalize'>member:</p>
										<p className='capitalize font-bold text-lg'>
											{students.group.students.member2.fullName}
										</p>
									</div>
									<div className='mt-12'>
										<p className='capitalize'>
											member <span className='uppercase'>id:</span>
										</p>
										<p className='uppercase font-bold text-lg'>
											{students.group.students.member2.sliit_id}
										</p>
									</div>
									<div className='mt-12'>
										<p className='capitalize'>member:</p>
										<p className='capitalize font-bold text-lg'>
											{students.group.students.member3.fullName}
										</p>
									</div>
									<div className='mt-12'>
										<p className='capitalize'>
											member <span className='uppercase'>id:</span>
										</p>
										<p className='uppercase font-bold text-lg'>
											{students.group.students.member3.sliit_id}
										</p>
									</div>
									<div className='mt-12'>
										<p className='capitalize'>panel:</p>
										<select
											className='uppercase font-semibold mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md focus:ring-1'
											onChange={e => setPanel(e.target.value)}>
											<option value='' disabled selected hidden>
												{students.group.panel}
											</option>
											{Object.keys(panels.panels).map(element => (
												<option
													key={element}
													value={panels.panels[element].panelId}>
													{panels.panels[element].panelId}
												</option>
											))}
										</select>
									</div>
								</div>

								<button
									className='mt-16 capitalize text-lg font-bold px-6 py-1 bg-regal-blue text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-50 sm:w-50 rounded-md hover:bg-regal-blue-active float-right text-sm'
									onClick={() => {
										confirmAlert({
											message: "Are you sure to update the panel?.",
											buttons: [
												{
													label: "Yes",
													onClick: () => {
														updatePanel();
													},
												},
												{
													label: "No",
												},
											],
										});
									}}>
									update
								</button>
								{/* <button className="mr-4 mt-16 capitalize text-lg font-bold px-6 py-1 bg-main-orange text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-50 sm:w-50 rounded-md hover:bg-main-orange-active float-right text-sm">
                  delete
                </button> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default GroupManipulations;
