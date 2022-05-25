import React from "react";
import Menu from "../../../components/StudentMenu";
import Container from "../../../components/StudentContainer";

function MembersStudent() {
  return (
    <div>
      <div className="w-screen h-screen grid grid-cols-12 bg-bk-white">
        <div>
          <Menu />
        </div>
        <div className="col-span-11 mx-auto my-auto ">
          <div className="relative">
            <Container title="members" width="w-[68rem] h-[25rem]" />
            <div className="absolute top-[10rem] left-[7rem]">
              <div className=" grid grid-cols-2  w-[60rem] ">
                <div className="flex flex-col gap-8">
                  <div>
                    <p className="capitalize">Role:</p>
                    <p className="capitalize font-bold text-lg">Student</p>
                  </div>
                  <div>
                    <p className="capitalize">Name:</p>
                    <p className="capitalize font-bold text-lg">
                      Kariyawasam K. G. P. C.
                    </p>
                  </div>
                  <div>
                    <p className="capitalize">Email:</p>
                    <p className="capitalize font-bold text-lg">
                      it20172978@my.sliit.lk
                    </p>
                  </div>
                  <div>
                    <p className="capitalize">Specialization:</p>
                    <p className="capitalize font-bold text-lg">SE</p>
                  </div>
                </div>
                <div className="flex flex-col gap-8">
                  <div>
                    <p className="capitalize">Group ID:</p>
                    <p className="capitalize font-bold text-lg">RE_GR24</p>
                  </div>
                  <div>
                    <p className="capitalize">ID:</p>
                    <p className="capitalize font-bold text-lg">IT20172978</p>
                  </div>
                  <div>
                    <p className="capitalize">Phone:</p>
                    <p className="capitalize font-bold text-lg">0771543736</p>
                  </div>
                </div>
              </div>
              <div className="flex mt-[4rem] gap-3 ml-[53rem] ">
                <button className="  text-lg  px-6 py-1 bg-[#F65354] text-white border border-slate-300 focus:outline-none focus:border-[#f76d6d]-500 focus:ring-sky-500 block lg:w-50 sm:w-50 rounded-md hover:bg-[#c73e3e]-active float-right  text-sm">
                  Delete
                </button>
                <button className=" text-lg  px-6 py-1 bg-regal-blue text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-50 sm:w-50 rounded-md hover:bg-regal-blue-active float-right  text-sm">
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MembersStudent;
