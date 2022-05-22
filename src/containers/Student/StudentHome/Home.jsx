import React, { useEffect, useState } from "react";

import Menu from "../../../components/StudentMenu";

import chart from "../../../images/del-chart.png";

import done from "../../../images/done-icon.png";

import { useDispatch, useSelector } from "react-redux";

import { getGroupDetails } from "../../../actions/student.action";

function Home() {
	const dispatch = useDispatch();
	const students = useSelector(state => state.students);
	useEffect(() => {
		dispatch(getGroupDetails());
	}, []);

	if (students.group.students) {
		return (
			<div className='bg-bk-white h-screen w-screen'>
				<div className='grid grid-cols-12 h-full w-full grid-rows-2'>
					<div className='h-full w-[10px]'>
						<Menu />
					</div>
					<div className='col-span-3 mx-auto mt-12'>
						<img
							src={chart}
							alt=''
							className='w-[14em] ml-[8rem] 2xl:ml-[8rem] xl:ml-[8rem]'
						/>
					</div>
					<div className='col-span-8 mx-auto  my-auto 2xl:mt-12'>
						<div className='w-[45rem] h-[17rem] bg-white rounded-xl'>
							<h2 className='text-xl font-bold ml-5 pt-2'>Progress</h2>
							<div className='grid grid-cols-2 grid-rows-5'>
								<div className='flex items-center gap-2 mt-3 ml-8'>
									<img src={done} alt='done-icon' className='h-5' />
									<p className='uppercase'>topic registration</p>
								</div>
								<div className='flex items-center gap-2 mt-3 ml-8'>
									<img src={done} alt='done-icon' className='h-5' />
									<p className='uppercase'>topic evaluation</p>
								</div>
								<div className='flex items-center gap-2 mt-3 ml-8'>
									<img src={done} alt='done-icon' className='h-5' />
									<p className='uppercase'>supervisor approval</p>
								</div>
								<div className='flex items-center gap-2 mt-3 ml-8'>
									<img src={done} alt='done-icon' className='h-5' />
									<p className='uppercase'>feedback</p>
								</div>
								<div className='flex items-center gap-2 mt-3 ml-8'>
									<img src={done} alt='done-icon' className='h-5' />
									<p className='uppercase'>co-supervisor selection</p>
								</div>
								<div className='flex items-center gap-2 mt-3 ml-8'>
									<img src={done} alt='done-icon' className='h-5' />
									<p className='uppercase'>presentation evaluation</p>
								</div>
								<div className='flex items-center gap-2 mt-3 ml-8'>
									<img src={done} alt='done-icon' className='h-5' />
									<p className='uppercase'>co-supervisor approval</p>
								</div>
								<div className='flex items-center gap-2 mt-3 ml-8'>
									<img src={done} alt='done-icon' className='h-5' />
									<p className='uppercase'>thesis evaluation</p>
								</div>
								<div className='flex items-center gap-2 mt-3 ml-8'>
									<img src={done} alt='done-icon' className='h-5' />
									<p className='uppercase'>topic details submission</p>
								</div>
								<div className='flex items-center gap-2 mt-3 ml-8'>
									<img src={done} alt='done-icon' className='h-5' />
									<p className='uppercase'>complete</p>
								</div>
							</div>
						</div>
					</div>
					<div className='col-span-11 h-[18rem] 2xl:w-[69rem] w-[67rem] mx-auto bg-white col-start-2 rounded-xl'>
						<h2 className='capitalize text-xl font-bold ml-5 pt-2'>group</h2>
						<div className='grid grid-cols-7 mx-8 mt-4'>
							<div className='uppercase col-span-2 font-bold mb-2'>name</div>
							<div className='uppercase font-bold'>id</div>
							<div className='uppercase col-span-2 font-bold'>email</div>
							<div className='uppercase font-bold'>phone</div>
							<div className='uppercase font-bold'>specialization</div>

							<div className='capitalize col-span-2 '>
								{students.group.students.leader.fullName}
							</div>
							<div className='uppercase '>
								{students.group.students.leader.sliit_id}
							</div>
							<div className='capiatalize col-span-2 '>
								{students.group.students.leader.email}
							</div>
							<div className='uppercase '>
								{students.group.students.leader.phone}
							</div>
							<div className='uppercase '>
								{students.group.students.leader.specialization}
							</div>

							<div className='capitalize col-span-2 '>
								{students.group.students.member1.fullName}
							</div>
							<div className='uppercase '>
								{students.group.students.member1.sliit_id}
							</div>
							<div className='capiatalize col-span-2 '>
								{students.group.students.member1.email}
							</div>
							<div className='uppercase '>
								{students.group.students.member1.phone}
							</div>
							<div className='uppercase '>
								{students.group.students.member1.specialization}
							</div>

							<div className='capitalize col-span-2 '>
								{students.group.students.member2.fullName}
							</div>
							<div className='uppercase '>
								{" "}
								{students.group.students.member2.sliit_id}
							</div>
							<div className='capiatalize col-span-2 '>
								{students.group.students.member2.email}
							</div>
							<div className='uppercase '>
								{" "}
								{students.group.students.member2.phone}
							</div>
							<div className='uppercase '>
								{" "}
								{students.group.students.member2.specialization}
							</div>

							<div className='capitalize col-span-2 '>
								{" "}
								{students.group.students.member3.fullName}
							</div>
							<div className='uppercase '>
								{students.group.students.member3.sliit_id}
							</div>
							<div className='capiatalize col-span-2 '>
								{students.group.students.member3.email}
							</div>
							<div className='uppercase '>
								{students.group.students.member3.phone}
							</div>
							<div className='uppercase '>
								{students.group.students.member3.specialization}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
