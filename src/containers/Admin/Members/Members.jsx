import React from "react";
import Menu from "../../../components/AdminMenu";
import tt from "../../../images/upload.png";

function Members() {
	return (
		<div>
			<div className='w-screen h-screen grid grid-cols-12 bg-bk-white'>
				<div className=''>
					<Menu />
				</div>
				<div className='col-span-11  '>
					<div className='grid grid-rows-6 h-full w-full'>
						<div className='flex items-center gap-8'>
							<div className='ml-[49rem]'>
								<input
									type='search'
									placeholder='Search'
									className='font-normal px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-78 rounded-md text-base focus:ring-1'
								/>
							</div>
							<div className='flex flex-col'>
								<select className='h-[2.2rem] font-normal px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-[9.5rem] sm:w-144 rounded-md focus:ring-1'>
									<option value='all'>All</option>
									<option value='Student'>Student</option>
									<option value='Supervisor'>Supervisor</option>
									<option value='Co-Supervisor'>Co-Supervisor</option>
									<option value='Staff'>Staff</option>
								</select>
							</div>
						</div>
						<div className='row-span-5 mx-auto bg-white w-[70.5rem] drop-shadow-xl rounded-xl mt-0 h-[33rem]'>
							<h2 className='text-xl font-bold ml-5 pt-2'>Members</h2>
							<div className='overflow-auto h-[25rem] mx-12 mt-5'>
								<table className='border-collapse w-full '>
									<thead>
										<tr>
											<th className='py-2 px-2 uppercase bg-white text-left sticky top-0 z-1'>
												name
											</th>
											<th className='py-2 px-2 uppercase bg-white text-left sticky top-0 z-1'>
												id
											</th>
											<th className='py-2 px-2 uppercase bg-white text-left sticky top-0 z-1'>
												email
											</th>
											<th className='py-2 px-2 uppercase bg-white text-left sticky top-0 z-1'>
												phone
											</th>
											<th className='py-2 px-2 uppercase bg-white text-left sticky top-0 z-1'>
												role
											</th>
										</tr>
									</thead>
									<tbody>
										<tr className='bg-white-blue'>
											<td className='capitalize py-2 px-2'>
												kariyawasam k. g. p. c.
											</td>
											<td className='uppercase py-2 px-2'>it20172978</td>
											<td className='lowercase py-2 px-2'>
												it20172978@my.sliit.lk
											</td>
											<td className='capitalize py-2 px-2'>0771543736</td>
											<td className='capitalize py-2 px-2'>student</td>
										</tr>
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

export default Members;
