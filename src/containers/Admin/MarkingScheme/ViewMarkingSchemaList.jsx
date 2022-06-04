import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Menu from "../../../components/AdminMenu";
import Container from "../../../components/AdminContainer";
import deleteIcon from "../../../images/delete.png";
import {
	getMarkingSchemas,
	DeleteMarkingSchema,
} from "../../../actions/markingscheme.action";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

function ViewMarkingSchemaList() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const markingSchemas = useSelector(state => state.markingSchemas);

	useEffect(() => {
		dispatch(getMarkingSchemas());
	}, []);

	if (markingSchemas.markingSchemas) {
		return (
			<div>
				<div className='w-screen h-screen grid grid-cols-12 bg-bk-white'>
					<div>
						<Menu status='markings' />
					</div>
					<div className='col-span-11 mx-auto my-auto'>
						<div class='relative'>
							<Container title='Marking Schemes' width='w-[68rem]' />
							<div class='absolute top-[7rem] ml-24'>
								<table className='table-auto w-[60rem] mx-auto my-5 '>
									<div className='w-[55rem]'>
										<thead>
											<tr className='text-lg font-medium uppercase bg-white'>
												<th className='w-[64rem] text-left pt-1 pl-2 pb-2 text-lg'>
													Assignment
												</th>
												<th className='w-[6.5rem] text-left text-lg'>Action</th>
											</tr>
										</thead>
									</div>

									<div className='h-[20rem] overflow-y-auto w-[62rem]'>
										<tbody className='leading-8'>
											{markingSchemas.markingSchemas.map((schema, index) => (
												<tr
													className='even:bg-white odd:bg-slate-100 cursor-pointer'
													key={index}>
													<td
														className='px-5 py-1 w-[80rem]'
														onClick={() =>
															navigate(
																"/admin/marking-scheme/view/" + schema._id,
															)
														}>
														{schema.assignmentName}
													</td>
													<td className='px-5 py-1 w-[20rem]'>
														<img
															src={deleteIcon}
															className='h-4 cursor-pointer'
															onClick={
																(handleDelete = () => {
																	confirmAlert({
																		message: "Are you sure to delete?",
																		buttons: [
																			{
																				label: "Yes",
																				onClick: () => {
																					dispatch(
																						DeleteMarkingSchema(schema._id),
																					);
																					window.location.reload();
																				},
																			},
																			{
																				label: "No",
																			},
																		],
																	});
																})
															}
														/>
													</td>
												</tr>
											))}
										</tbody>
									</div>
								</table>
								<button
									className='ml-[53rem] capitalize bg-regal-blue hover:bg-regal-blue-active mx-auto px-6 py-2 text-sm rounded-md font-bold text-white mt-6'
									onClick={() => navigate("/admin/marking-scheme/create")}>
									Add marking scheme
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ViewMarkingSchemaList;
