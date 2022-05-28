import React, { useState } from "react";
import Menu from "../../../components/AdminMenu";
import Container from "../../../components/AdminContainer";
import Bin from "../../../images/bin.png";

function PanelUpdate() {
	const [del1, setDel1] = useState(false);
	const [del2, setDel2] = useState(false);
	const [del3, setDel3] = useState(false);

	const displayUsername1 = () => {
		if (del1 === false) {
			return (
				<select className='font-semibold mt-1 px-2 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md focus:ring-1'>
					<option value='' disabled selected hidden>
						kushnara.s
					</option>
				</select>
			);
		} else {
			return (
				<select className='font-semibold mt-1 px-2 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md focus:ring-1'>
					<option value='' disabled selected hidden>
						Select Member
					</option>
				</select>
			);
		}
	};

	const displayUsername2 = () => {
		if (del2 === false) {
			return (
				<select className='font-semibold mt-1 px-2 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md focus:ring-1'>
					<option value='' disabled selected hidden>
						kushnara.s
					</option>
				</select>
			);
		} else {
			return (
				<select className='font-semibold mt-1 px-2 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md focus:ring-1'>
					<option value='' disabled selected hidden>
						Select Member
					</option>
				</select>
			);
		}
	};

	const displayUsername3 = () => {
		if (del3 === false) {
			return (
				<select className='font-semibold mt-1 px-2 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md focus:ring-1'>
					<option value='' disabled selected hidden>
						kushnara.s
					</option>
				</select>
			);
		} else {
			return (
				<select className='font-semibold mt-1 px-2 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md focus:ring-1'>
					<option value='' disabled selected hidden>
						Select Member
					</option>
				</select>
			);
		}
	};

	const displayName1 = () => {
		if (del1 === false) {
			return (
				<input
					type='text'
					disabled
					value='kushnara sooriyawansha'
					className='disabled:capitalize font-semibold  px-2 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md text-base focus:ring-1'
				/>
			);
		} else {
			return (
				<input
					type='text'
					disabled
					value=''
					className='disabled:capitalize font-semibold  px-2 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md text-base focus:ring-1'
				/>
			);
		}
	};
	const displayName2 = () => {
		if (del2 === false) {
			return (
				<input
					type='text'
					disabled
					value='kushnara sooriyawansha'
					className='disabled:capitalize font-semibold  px-2 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md text-base focus:ring-1'
				/>
			);
		} else {
			return (
				<input
					type='text'
					disabled
					value=''
					className='disabled:capitalize font-semibold  px-2 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md text-base focus:ring-1'
				/>
			);
		}
	};

	const displayName3 = () => {
		if (del3 === false) {
			return (
				<input
					type='text'
					disabled
					value='kushnara sooriyawansha'
					className='disabled:capitalize font-semibold  px-2 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md text-base focus:ring-1'
				/>
			);
		} else {
			return (
				<input
					type='text'
					disabled
					value=''
					className='disabled:capitalize font-semibold  px-2 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-96 sm:w-144 rounded-md text-base focus:ring-1'
				/>
			);
		}
	};

	return (
		<div>
			<div className='w-screen h-screen grid grid-cols-12 bg-bk-white'>
				<div className=''>
					<Menu />
				</div>
				<div className='col-span-11 mx-auto my-auto '>
					<div class='relative'>
						<Container title='panel' width='w-[68rem]' />
						<div class='absolute left-[5rem] top-[9rem] w-[66rem]'>
							<div className='grid grid-cols-5 overflow-auto h-[20rem]'>
								<div className='col-span-4'>
									<p className='capitalize'>
										panel <span className='uppercase'>id:</span>
									</p>
									<p className='uppercase font-bold text-lg'>p001</p>
								</div>
								<div className='col-span-2'>
									<p className='capitalize'>username: </p>
									{displayUsername1()}
								</div>
								<div className='col-span-2'>
									<p className='capitalize'>name:</p>
									{displayName1()}
								</div>
								<div className=''>
									<button
										onClick={() => {
											setDel1(true);
										}}>
										<img
											src={Bin}
											alt='bin'
											className='mt-[1.8rem] ml-[2rem]'
										/>
									</button>
								</div>
								<div className='col-span-2'>
									<p className='capitalize'>username: </p>
									{displayUsername2()}
								</div>
								<div className='col-span-2'>
									<p className='capitalize'>name:</p>
									{displayName2()}
								</div>
								<div className=''>
									<button
										onClick={() => {
											setDel2(true);
										}}>
										<img
											src={Bin}
											alt='bin'
											className='mt-[1.8rem] ml-[2rem]'
										/>
									</button>
								</div>
								<div className='col-span-2'>
									<p className='capitalize'>username: </p>
									{displayUsername3()}
								</div>
								<div className='col-span-2'>
									<p className='capitalie'>name:</p>
									{displayName3()}
								</div>
								<div className=''>
									<button
										onClick={() => {
											setDel3(true);
										}}>
										<img
											src={Bin}
											alt='bin'
											className='mt-[1.8rem] ml-[2rem]'
										/>
									</button>
								</div>
							</div>

							<button className='mt-16 capitalize text-lg font-bold px-6 py-1 bg-regal-blue text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-50 sm:w-50 rounded-md hover:bg-regal-blue-active float-right text-sm'>
								update
							</button>
							<button className='mr-4 mt-16 capitalize text-lg font-bold px-6 py-1 bg-main-orange text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-50 sm:w-50 rounded-md hover:bg-main-orange-active float-right text-sm'>
								cancel
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PanelUpdate;
