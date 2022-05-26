import React from "react";
import Menu from "../../../components/AdminMenu";

function Groups() {
	return (
		<div>
			<div className='w-screen h-screen grid grid-cols-12 bg-bk-white'>
				<div className=''>
					<Menu />
				</div>
				<div className='col-span-11 my-auto'>
					<div className='h-full w-full'>
						<div className='mx-auto bg-white w-[70.5rem] drop-shadow-xl rounded-xl mt-0 h-[33rem]'>
							<h2 className='text-xl font-bold ml-5 pt-2 capitalize'>Groups</h2>
							<div className='overflow-auto h-[25rem] mx-16 mt-5'>
								<table className='border-collapse w-full '>
									<thead>
										<tr>
											<th className='py-2 px-2 uppercase bg-white text-left sticky top-0 z-1'>
												id
											</th>
											<th className='py-2 px-2 uppercase bg-white text-left sticky top-0 z-1'>
												leader
											</th>
											<th className='py-2 px-2 uppercase bg-white text-left sticky top-0 z-1'>
												supervisor
											</th>
											<th className='py-2 px-2 uppercase bg-white text-left sticky top-0 z-1'>
												co-supervisor
											</th>
											<th className='py-2 px-2 uppercase bg-white text-left sticky top-0 z-1'>
												panel
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className='capitalize py-2 px-2'>RE_GR24</td>
											<td className='uppercase py-2 px-2'>IT2245678</td>
											<td className='uppercase py-2 px-2'>EMP45678</td>
											<td className='uppercase py-2 px-2'>EMP45678</td>
											<td className='uppercase py-2 px-2'>P001</td>
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

export default Groups;
