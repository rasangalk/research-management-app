import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getMarkingSchemaByID } from "../../actions/markingscheme.action";
import Menu from "../../components/StaffMenu";
import back from "../../images/arrow-left.png";

function ViewMarkingSchemaByID() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { schemaId } = useParams();
	const markingSchema = useSelector(state => state.markingSchema);

	useEffect(() => {
		dispatch(getMarkingSchemaByID(schemaId));
	}, []);

	if (markingSchema.markingSchema.markingScheme) {
		return (
			<div>
				<div className='w-screen h-screen grid grid-cols-12 bg-bk-white'>
					<div>
						<Menu />
					</div>
					<div className='col-span-11 mx-auto my-auto'>
						<div class='relative'>
							<div className='bg-white drop-shadow-xl w-[74rem] h-[37rem] rounded-xl '>
								<div className='flex flex-row items-center pt-4 pl-10'>
									<img
										src={back}
										onClick={() => navigate(-1)}
										className='cursor-pointer mr-2'
									/>
									<h2 className='capitalize font-bold ml-5 pt-2 text-xl'>
										marking schemes
									</h2>
								</div>
								<div className='mt-8 ml-12'>
									<p>Assignment Name:</p>
								</div>
								<div>
									<h2 className='capitalize font-bold ml-[2.9rem] pt-2 text-lg '>
										{markingSchema.markingSchema.assignmentName}
									</h2>
								</div>
								<div
									className={`border-2 border-[#E2E8F0] w-[68rem] h-[22rem] rounded-xl mt-6 mx-auto`}>
									<div className='overflow-auto h-[17rem] mr-6 mt-6'>
										<table className='border-collapse w-full '>
											<thead>
												<tr>
													<th className='py-2 px-2 uppercase bg-white text-left sticky top-0 z-1'>
														guildline
													</th>
													<th className='py-2 px-2 uppercase bg-white text-left sticky top-0 z-1'>
														marks
													</th>
												</tr>
											</thead>
											<tbody>
												{markingSchema.markingSchema.markingScheme.map(
													(schema, index) => (
														<tr
															className='even:bg-white odd:bg-slate-100'
															key={index}>
															<td className='capitalize py-2 px-2'>
																{schema.markName}
															</td>
															<td className=' py-2 px-2'>{schema.marks}</td>
														</tr>
													),
												)}
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ViewMarkingSchemaByID;
