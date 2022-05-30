import React from "react";
import Menu from "../../components/StaffMenu";
import Container from "../../components/StaffContainer";

function StaffEditProfile() {
	return (
		<div>
			<div className='w-screen h-screen grid grid-cols-12 bg-bk-white'>
				<div className=''>
					<Menu />
				</div>
				<div className='col-span-11 mx-auto my-auto '>
					<div className='relative'>
						<Container title='Edit Profile' width='w-[68rem] h-[24.9rem]' />
						<div className='absolute top-[10rem] left-[7rem]'>
							<div className='grid grid-cols-2 gap-16 w-[60rem]'>
								<div className=''>
									<p className='capitalize text-slate-700 text-sm mb-1'>
										Username:
									</p>
									<input
										type='text'
										name='username'
										className='font-Nunito font-semibold mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md text-base focus:ring-1'
									/>
								</div>
								<div className=''>
									<p className='capitalize text-slate-700 text-sm mb-1'>
										phone:
									</p>
									<input
										type='number'
										className='font-Nunito font-semibold mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md text-base focus:ring-1'
									/>
								</div>
								<div className=''>
									<p className='capitalize text-slate-700 text-sm mb-1'>
										name:
									</p>
									<input
										type='text'
										className='font-Nunito font-semibold mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md text-base focus:ring-1'
									/>
								</div>

								<div className=''>
									<p className='uppercase text-slate-700 text-sm mb-1'>id:</p>
									<input
										type='text'
										className='font-Nunito font-semibold mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md text-base focus:ring-1'
									/>
								</div>
								<div className=''>
									<p className='capitalize text-slate-700 text-sm mb-1'>
										email:
									</p>
									<input
										type='email'
										className='font-Nunito font-semibold mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md text-base focus:ring-1'
									/>
								</div>
							</div>
							<div className=' mt-[4rem]  ml-[51rem] '>
								<div className='flex flex-row gap-4'>
									<button className='capitalize text-lg  px-6 py-1 bg-main-orange text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-50 sm:w-50 rounded-md hover:bg-main-orange-active float-right  text-sm'>
										cancel
									</button>
									<button className='capitalize text-lg  px-6 py-1 bg-regal-blue text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-50 sm:w-50 rounded-md hover:bg-regal-blue-active float-right  text-sm'>
										update
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default StaffEditProfile;
