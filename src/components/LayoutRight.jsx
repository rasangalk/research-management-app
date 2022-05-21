import React from "react";
import SigninCover from "../images/student.jpg";

function LayoutRight() {
	return (
		<div className='bg-slate-300 h-full relative'>
			<h1 className='absolute w-100 text-center bottom-48 font-bold text-xl py-10 text-left font-Nunito text-white'>
				Research Portal
			</h1>
			<p className='absolute font-medium text-center text-white px-10 bottom-28 text-left font-Nunito'>
				As a leading tertiary educational Institute in Sri Lanka, research is an
				integral part of SLIIT.We strive for a vibrant research culture and
				numerous initiatives are in place for programming research among the
				academic and student communities.
			</p>
			<img src={SigninCover} className='bg-sky-500 h-full object-cover' />
		</div>
	);
}

export default LayoutRight;
