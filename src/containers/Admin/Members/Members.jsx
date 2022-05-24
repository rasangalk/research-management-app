import React from "react";
import Menu from "../../../components/AdminMenu";

function Members() {
	return (
		<div>
			<div className='w-screen h-screen grid grid-cols-12 bg-bk-white'>
				<div className=''>
					<Menu />
				</div>
				<div className='col-span-11 mx-auto my-auto '></div>
			</div>
		</div>
	);
}

export default Members;
