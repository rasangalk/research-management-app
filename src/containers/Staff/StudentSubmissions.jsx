import React from "react";
import Menu from "../../components/StaffMenu";
import back from "../../images/back-icon.png";
import RedDot from "../../images/red-dot.png";
import GreenDot from "../../images/green-dot.png";

function StudentSubmissions() {
	return (
		<div>
			<div className='w-screen h-screen grid grid-cols-12 bg-bk-white'>
				<div className=''>
					<Menu />
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
									<select className='font-bold h-[2.2rem] text-sm px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-[24rem] sm:w-144 rounded-md focus:ring-1'>
										<option value='Topic Details Submission'>
											Topic Details Submission
										</option>
										<option value='bla'>bla</option>
										<option value='bla'>bla</option>
										<option value='bla'>bla</option>
										<option value='bla'>bla</option>
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
										<tr className='even:bg-white odd:bg-slate-100 cursor-pointer'>
											<td className='uppercase py-2 px-2'>grp_01</td>
											<td className='capitalize py-2 px-2'>
												blockchain based smart contracts and its applications
											</td>
											<td className='lowercase py-2 px-2'>
												<div className='flex flex-row gap-2 items-center'>
													<p>24/04/2022</p> <p>05:25</p>
													<img src={GreenDot} className='h-3 drop-shadow-sm' />
												</div>
											</td>
										</tr>
										<tr className='even:bg-white odd:bg-slate-100 cursor-pointer'>
											<td className='uppercase py-2 px-2'>grp_01</td>
											<td className='capitalize py-2 px-2'>
												blockchain based smart contracts and its applications
											</td>
											<td className='lowercase py-2 px-2'>
												<div className='flex flex-row gap-2 items-center'>
													<p>24/04/2022</p> <p>05:25</p>
													<img src={RedDot} className='h-3 drop-shadow-sm' />
												</div>
											</td>
										</tr>
										<tr className='even:bg-white odd:bg-slate-100 cursor-pointer'>
											<td className='uppercase py-2 px-2'>grp_01</td>
											<td className='capitalize py-2 px-2'>
												blockchain based smart contracts and its applications
											</td>
											<td className='lowercase py-2 px-2'>
												<div className='flex flex-row gap-2 items-center'>
													<p>24/04/2022</p> <p>05:25</p>
													<img src={GreenDot} className='h-3 drop-shadow-sm' />
												</div>
											</td>
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

export default StudentSubmissions;
