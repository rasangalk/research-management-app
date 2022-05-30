import React from "react";
import Menu from "../../components/StaffMenu";

function StaffPannel() {
	return (
		<div className='h-screen w-screen'>
			<div className='grid grid-cols-12 grid-rows-2 w-full h-full bg-bk-white gap-2'>
				<div className=''>
					<Menu />
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
										<th className='py-2 px-2 capitalize bg-white text-left sticky top-0 z-1 pr-[24rem]'>
											assignment
										</th>
									</tr>
								</thead>
								<tbody>
									<tr className='even:bg-white odd:bg-slate-100 cursor-pointer'>
										<td className='capitalize py-2 px-2'></td>
									</tr>
									<tr className='even:bg-white odd:bg-slate-100 cursor-pointer'>
										<td className='capitalize py-2 px-2'></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<div className='col-start-2 col-span-11 ml-4'>
					<div className='bg-white w-[74rem] h-[17rem] mt-8 rounded-xl drop-shadow-xl'>
						<h2 className='capitalize text-xl font-bold ml-5 pt-2'>
							pannel 001
						</h2>
						<div className='overflow-auto h-[10rem] mx-8 mt-5'>
							<table className='border-collapse w-full '>
								<thead>
									<tr>
										<th className='py-2 px-2 capitalize bg-white text-left sticky top-0 z-1 pr-[5rem] '>
											name
										</th>
										<th className='py-2 px-2 capitalize bg-white text-left sticky top-0 z-1 pr-[5rem]'>
											email
										</th>
										<th className='py-2 px-2 capitalize bg-white text-left sticky top-0 z-1 '>
											phone
										</th>
									</tr>
								</thead>
								<tbody>
									<tr className='even:bg-white odd:bg-slate-100 cursor-pointer'>
										<td className='capitalize py-2 px-2 hover:underline'></td>
									</tr>
									<tr className='even:bg-white odd:bg-slate-100 cursor-pointer'>
										<td className='capitalize py-2 px-2  hover:underline'></td>
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

export default StaffPannel;
