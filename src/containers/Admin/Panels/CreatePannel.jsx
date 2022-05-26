import React from "react";
import Menu from "../../../components/AdminMenu";
import Container from "../../../components/AdminContainer";

function CreatePannel() {
	return (
		<div>
			<div className='w-screen h-screen grid grid-cols-12 bg-bk-white'>
				<div className=''>
					<Menu />
				</div>
				<div className='col-span-11 mx-auto my-auto '>
					<div class='relative'>
						<Container title='panels' width='w-[68rem]' />
						<div class='absolute left-[5rem] top-[9rem] w-[66rem]'>
							<div className='flex flex-col gap-8'>
								<div className=''>
									<p className='capitalize'>
										panel <span className='uppercase'>id:</span>
									</p>
									<input className='font-semibold mt-1 px-3 py-0 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md text-base focus:ring-1' />
								</div>
								<div className=''>
									<p className='capitalize'>username:</p>
									<select className='font-semibold mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md focus:ring-1'>
										<option value='' disabled selected hidden>
											Select Member
										</option>
										<option value='jenny'>jenny</option>
										<option value='kushnara'>kushnara</option>
										<option value='dilshan'>dilshan</option>
									</select>
								</div>
								<div className=''>
									<p className='capitalize'>username:</p>
									<select className='font-semibold mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md focus:ring-1'>
										<option value='' disabled selected hidden>
											Select Member
										</option>
										<option value='jenny'>jenny</option>
										<option value='kushnara'>kushnara</option>
										<option value='dilshan'>dilshan</option>
									</select>
								</div>
								<div className=''>
									<p className='capitalize'>username:</p>
									<select className='font-semibold mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md focus:ring-1'>
										<option value='' disabled selected hidden>
											Select Member
										</option>
										<option value='jenny'>jenny</option>
										<option value='kushnara'>kushnara</option>
										<option value='dilshan'>dilshan</option>
									</select>
								</div>
							</div>
							<button className='mt-16 capitalize text-lg font-bold px-6 py-1 bg-regal-blue text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-50 sm:w-50 rounded-md hover:bg-regal-blue-active float-right text-sm'>
								create
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CreatePannel;
