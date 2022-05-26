import React from "react";
import Menu from "../../../components/AdminMenu";
import Container from "../../../components/AdminContainer";

function GroupManipulations() {
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
								<div className='mb-12'>
									<p className='capitalize'>
										group <span className='uppercase'>id:</span>
									</p>
									<p className='uppercase font-bold text-lg'>RE_GR24</p>
								</div>
								<div className='mb-12'>
									<p className='capitalize'>topic:</p>
									<p className='normal-case font-bold text-lg'>
										Blockchain based smart contracts and its applications
									</p>
								</div>
								<div className=''>
									<p className='capitalize'>supervisor:</p>
									<p className='capitalize font-bold text-lg'>
										jenny krishanara
									</p>
								</div>
								<div className=''>
									<p className='capitalize'>
										supervisor <span className='uppercase'>id:</span>
									</p>
									<p className='uppercase font-bold text-lg'>emp45678 </p>
								</div>
								<div className='mt-12'>
									<p className='capitalize'>co-supervisor:</p>
									<p className='capitalize font-bold text-lg'>
										kushnara sooriyawansha
									</p>
								</div>
								<div className='mt-12'>
									<p className='capitalize'>
										co-supervisor <span className='uppercase'>id:</span>
									</p>
									<p className='uppercase font-bold text-lg'>emp45678 </p>
								</div>
								<div className='mt-12'>
									<p className='capitalize'>leader:</p>
									<p className='capitalize font-bold text-lg'>
										kariyawasam k. g. p. c.
									</p>
								</div>
								<div className='mt-12'>
									<p className='capitalize'>
										leader <span className='uppercase'>id:</span>
									</p>
									<p className='uppercase font-bold text-lg'>it20172978 </p>
								</div>
								<div className='mt-12'>
									<p className='capitalize'>member:</p>
									<p className='capitalize font-bold text-lg'>
										kariyawasam k. g. p. c.
									</p>
								</div>
								<div className='mt-12'>
									<p className='capitalize'>
										member <span className='uppercase'>id:</span>
									</p>
									<p className='uppercase font-bold text-lg'>it20172978 </p>
								</div>
								<div className='mt-12'>
									<p className='capitalize'>member:</p>
									<p className='capitalize font-bold text-lg'>
										kariyawasam k. g. p. c.
									</p>
								</div>
								<div className='mt-12'>
									<p className='capitalize'>
										member <span className='uppercase'>id:</span>
									</p>
									<p className='uppercase font-bold text-lg'>it20172978 </p>
								</div>
								<div className='mt-12'>
									<p className='capitalize'>member:</p>
									<p className='capitalize font-bold text-lg'>
										kariyawasam k. g. p. c.
									</p>
								</div>
								<div className='mt-12'>
									<p className='capitalize'>
										member <span className='uppercase'>id:</span>
									</p>
									<p className='uppercase font-bold text-lg'>it20172978 </p>
								</div>
								<div className='mt-12'>
									<p className='capitalize'>panel:</p>
									<select className='font-semibold mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md focus:ring-1'>
										<option value='' disabled selected hidden>
											Select Panel
										</option>
									</select>
								</div>
							</div>

							<button className='mt-16 capitalize text-lg font-bold px-6 py-1 bg-regal-blue text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-50 sm:w-50 rounded-md hover:bg-regal-blue-active float-right text-sm'>
								update
							</button>
							<button className='mr-4 mt-16 capitalize text-lg font-bold px-6 py-1 bg-main-orange text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-50 sm:w-50 rounded-md hover:bg-main-orange-active float-right text-sm'>
								delete
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default GroupManipulations;
