import React, { useEffect, useState } from "react";
import Menu from "../../../components/StudentMenu";
import chart from "../../../images/del-chart.png";
import done from "../../../images/done-icon.png";
import whiteDone from "../../../images/white-done.png";
import { useDispatch, useSelector } from "react-redux";
import { getGroupDetails } from "../../../actions/student.action";

function Home() {
	const dispatch = useDispatch();
	const auth = useSelector(state => state.auth);
	const students = useSelector(state => state.students);
	console.log("AUTH", auth.user._id);
	//   console.log(students);
	const id = "6289346a2afb74bdec8a64a3";
	//const id = auth.user._id;

	useEffect(() => {
		console.log("AUTH2", auth.user._id);
		dispatch(getGroupDetails(id));
	}, []);

	const [status, setStatus] = useState({
		no1: "topic registration",
		no2: "supervisor approval",
		no3: "co-supervisor selection",
		no4: "co-supervisor approval",
		no5: "topic details submission",
		no6: "topic evaluation",
		no7: "feedback",
		no8: "presentation evaluation",
		no9: "thesis evaluation",
		no10: "complete",
	});
	const checkno1 = () => {
		if (students.group.status.no1 == "true") {
			return (
				<div className='flex items-center gap-2 mt-3 ml-8'>
					<img src={done} alt='done-icon' className='h-5' />
					<p className='uppercase'>{status.no1}</p>
				</div>
			);
		} else {
			return (
				<div className='flex items-center gap-2 mt-3 ml-8'>
					<img src={whiteDone} alt='done-icon' className='h-5' />
					<p className='uppercase'>{status.no1}</p>
				</div>
			);
		}
	};

	const checkno2 = () => {
		if (students.group.status.no2 == "true") {
			return (
				<div className='flex items-center gap-2 mt-3 ml-8'>
					<img src={done} alt='done-icon' className='h-5' />
					<p className='uppercase'>{status.no2}</p>
				</div>
			);
		} else {
			return (
				<div className='flex items-center gap-2 mt-3 ml-8'>
					<img src={whiteDone} alt='done-icon' className='h-5' />
					<p className='uppercase'>{status.no2}</p>
				</div>
			);
		}
	};

	const checkno3 = () => {
		if (students.group.status.no3 == "true") {
			return (
				<div className='flex items-center gap-2 mt-3 ml-8'>
					<img src={done} alt='done-icon' className='h-5' />
					<p className='uppercase'>{status.no3}</p>
				</div>
			);
		} else {
			return (
				<div className='flex items-center gap-2 mt-3 ml-8'>
					<img src={whiteDone} alt='done-icon' className='h-5' />
					<p className='uppercase'>{status.no3}</p>
				</div>
			);
		}
	};

	const checkno4 = () => {
		if (students.group.status.no4 == "true") {
			return (
				<div className='flex items-center gap-2 mt-3 ml-8'>
					<img src={done} alt='done-icon' className='h-5' />
					<p className='uppercase'>{status.no4}</p>
				</div>
			);
		} else {
			return (
				<div className='flex items-center gap-2 mt-3 ml-8'>
					<img src={whiteDone} alt='done-icon' className='h-5' />
					<p className='uppercase'>{status.no4}</p>
				</div>
			);
		}
	};

	const checkno5 = () => {
		if (students.group.status.no5 == "true") {
			return (
				<div className='flex items-center gap-2 mt-3 ml-8'>
					<img src={done} alt='done-icon' className='h-5' />
					<p className='uppercase'>{status.no5}</p>
				</div>
			);
		} else {
			return (
				<div className='flex items-center gap-2 mt-3 ml-8'>
					<img src={whiteDone} alt='done-icon' className='h-5' />
					<p className='uppercase'>{status.no5}</p>
				</div>
			);
		}
	};

	const checkno6 = () => {
		if (students.group.status.no6 == "true") {
			return (
				<div className='flex items-center gap-2 mt-3 ml-8'>
					<img src={done} alt='done-icon' className='h-5' />
					<p className='uppercase'>{status.no6}</p>
				</div>
			);
		} else {
			return (
				<div className='flex items-center gap-2 mt-3 ml-8'>
					<img src={whiteDone} alt='done-icon' className='h-5' />
					<p className='uppercase'>{status.no6}</p>
				</div>
			);
		}
	};

	const checkno7 = () => {
		if (students.group.status.no7 == "true") {
			return (
				<div className='flex items-center gap-2 mt-3 ml-8'>
					<img src={done} alt='done-icon' className='h-5' />
					<p className='uppercase'>{status.no7}</p>
				</div>
			);
		} else {
			return (
				<div className='flex items-center gap-2 mt-3 ml-8'>
					<img src={whiteDone} alt='done-icon' className='h-5' />
					<p className='uppercase'>{status.no7}</p>
				</div>
			);
		}
	};

	const checkno8 = () => {
		if (students.group.status.no8 == "true") {
			return (
				<div className='flex items-center gap-2 mt-3 ml-8'>
					<img src={done} alt='done-icon' className='h-5' />
					<p className='uppercase'>{status.no8}</p>
				</div>
			);
		} else {
			return (
				<div className='flex items-center gap-2 mt-3 ml-8'>
					<img src={whiteDone} alt='done-icon' className='h-5' />
					<p className='uppercase'>{status.no8}</p>
				</div>
			);
		}
	};

	const checkno9 = () => {
		if (students.group.status.no9 == "true") {
			return (
				<div className='flex items-center gap-2 mt-3 ml-8'>
					<img src={done} alt='done-icon' className='h-5' />
					<p className='uppercase'>{status.no9}</p>
				</div>
			);
		} else {
			return (
				<div className='flex items-center gap-2 mt-3 ml-8'>
					<img src={whiteDone} alt='done-icon' className='h-5' />
					<p className='uppercase'>{status.no9}</p>
				</div>
			);
		}
	};

	const checkno10 = () => {
		if (students.group.status.no10 == "true") {
			return (
				<div className='flex items-center gap-2 mt-3 ml-8'>
					<img src={done} alt='done-icon' className='h-5' />
					<p className='uppercase'>{status.no10}</p>
				</div>
			);
		} else {
			return (
				<div className='flex items-center gap-2 mt-3 ml-8'>
					<img src={whiteDone} alt='done-icon' className='h-5' />
					<p className='uppercase'>{status.no10}</p>
				</div>
			);
		}
	};

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
							<div className='grid grid-cols-2'>
								<div className='flex flex-col'>
									{checkno1()}
									{checkno2()}
									{checkno3()}
									{checkno4()}
									{checkno5()}
								</div>
								<div className='flex flex-col'>
									{checkno6()}
									{checkno7()}
									{checkno8()}
									{checkno9()}
									{checkno10()}
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
