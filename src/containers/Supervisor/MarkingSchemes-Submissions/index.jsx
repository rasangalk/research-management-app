import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Menu from "../../../components/SupervisorMenu";
import Submit from "../../../images/submit-icon.png";
import { getMarkingSchemas } from "../../../actions/markingscheme.action";

function Markings() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const markingSchemas = useSelector(state => state.markingSchemas);

	useEffect(() => {
		dispatch(getMarkingSchemas());
	}, []);

	if (markingSchemas.markingSchemas) {
		return (
			<div className='h-screen w-screen'>
				<div className='grid grid-cols-12 grid-rows-2 w-full h-full bg-bk-white gap-2'>
					<div className=''>
						<Menu status='main' />
					</div>

					<div className='col-start-2 col-span-11 ml-4'>
						<div className='bg-white w-[74rem] h-[17rem] mt-8 rounded-xl drop-shadow-xl'>
							<h2 className='capitalize text-xl font-bold ml-5 pt-2'>
								marking schemes
							</h2>
							<div className='overflow-auto h-[10rem] mx-8 mt-5'>
								<table className='border-collapse w-full '>
									<thead>
										<tr>
											<th className='py-2 px-2 uppercase bg-white text-left sticky top-0 z-1 pr-[24rem]'>
												assignment
											</th>
										</tr>
									</thead>
									<tbody>
										{markingSchemas.markingSchemas.map((schema, index) => (
											<tr
												className='even:bg-white odd:bg-slate-100 cursor-pointer'
												key={index}>
												<td
													className='px-5 py-2 w-[80rem]'
													onClick={() =>
														navigate(
															"/supervisor/marking-scheme/view/" + schema._id,
														)
													}>
													{schema.assignmentName}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<div className='col-start-2 col-span-11 ml-4'>
						<div className='bg-white w-[74rem] h-[17rem] mt-8 rounded-xl drop-shadow-xl'>
							<h2 className='capitalize text-xl font-bold ml-5 pt-2'>
								student submissions
							</h2>
							<div className='overflow-auto h-[10rem] mx-8 mt-5'>
								<table className='border-collapse w-full '>
									<thead>
										<tr>
											<th className='py-2 px-2 uppercase bg-white text-left sticky top-0 z-1 pr-[24rem]'>
												assignment
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td
												className='px-5 py-2 w-[80rem] cursor-pointer bg-slate-100'
												onClick={() =>
													navigate("/r11/Topic Details Submission")
												}>
												Topic Details Submission
											</td>
										</tr>
										<tr>
											<td
												className='px-5 py-2 w-[80rem] cursor-pointer'
												onClick={() =>
													navigate("/r11/Final Thesis Submission")
												}>
												Final Thesis Submission
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Markings;
