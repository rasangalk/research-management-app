import React from 'react'
import Menu from '../../../components/StudentMenu'
import Container from '../../../components/StudentContainer'

function StudentGroup() {
  return (
    <div>
      <div className='w-screen h-screen grid grid-cols-12 bg-bk-white'>
        <div className=''>
          <Menu />
        </div>
        <div className='col-span-11 mx-auto my-auto '>
          <div className='relative'>
            <Container title='Edit Group' width='w-[68rem] h-[24.5rem]' />
            <div className='absolute top-[10rem] left-[7rem] w-[60rem]'>
              <div className=' grid grid-cols-2 overflow-y-auto h-[20rem]'>
                <div className='flex flex-col gap-12 '>
                  <div>
                    <p className='capitalize text-base text-slate-700 text-sm mb-1'>
                      Leader's Name
                    </p>
                    <input
                      type='text'
                      name='LeadersName'
                      className='font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1'
                    />
                  </div>
                  <div>
                    <p className='capitalize text-base text-slate-700 text-sm mb-1'>
                      Email
                    </p>
                    <input
                      type='text'
                      name='Email'
                      className='font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1'
                    />
                  </div>
                  <div>
                    <p className='capitalize text-base text-slate-700 text-sm mb-1'>
                      Specialization
                    </p>
                    <select
                      name='Specialization'
                      className='font-Nunito font-semibold mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-96 sm:w-144 rounded-md focus:ring-1 mb-20'
                    >
                      <option value='Software Engineering'>
                        Software Engineering
                      </option>
                      <option value='blaa'>blaa</option>
                      <option value='blaaa'>blaaa</option>
                      <option value='blaaaa'>blaaaa</option>
                      <option value='blaaaaa'>blaaaaa</option>
                    </select>
                  </div>
                </div>
                <div className='flex flex-col gap-12'>
                  <div>
                    <p className='capitalize text-base text-slate-700 text-sm mb-1'>
                      ID Number
                    </p>
                    <input
                      type='text'
                      name='ID Number'
                      className='font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1'
                    />
                  </div>
                  <div>
                    <p className='capitalize text-base text-slate-700 text-sm mb-1'>
                      Phone
                    </p>
                    <input
                      type='text'
                      name='Phone'
                      className='font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1'
                    />
                  </div>
                </div>
                <div className='flex flex-col gap-12 '>
                  <div>
                    <p className='capitalize text-base text-slate-700 text-sm mb-1'>
                      Member 1 Name
                    </p>
                    <input
                      type='text'
                      name='Member1Name'
                      className='font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1'
                    />
                  </div>
                  <div>
                    <p className='capitalize text-base text-slate-700 text-sm mb-1'>
                      Email
                    </p>
                    <input
                      type='text'
                      name='Email'
                      className='font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1'
                    />
                  </div>
                  <div>
                    <p className='capitalize text-base text-slate-700 text-sm mb-1'>
                      Specialization
                    </p>
                    <select
                      name='Specialization'
                      className='font-Nunito font-semibold mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-96 sm:w-144 rounded-md focus:ring-1 mb-20'
                    >
                      <option value='Software Engineering'>
                        Software Engineering
                      </option>
                      <option value='blaa'>blaa</option>
                      <option value='blaaa'>blaaa</option>
                      <option value='blaaaa'>blaaaa</option>
                      <option value='blaaaaa'>blaaaaa</option>
                    </select>
                  </div>
                </div>
                <div className='flex flex-col gap-12'>
                  <div>
                    <p className='capitalize text-base text-slate-700 text-sm mb-1'>
                      ID Number
                    </p>
                    <input
                      type='text'
                      name='ID Number'
                      className='font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1'
                    />
                  </div>
                  <div>
                    <p className='capitalize text-base text-slate-700 text-sm mb-1'>
                      Phone
                    </p>
                    <input
                      type='text'
                      name='Phone'
                      className='font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1'
                    />
                  </div>
                </div>
                <div className='flex flex-col gap-12 '>
                  <div>
                    <p className='capitalize text-base text-slate-700 text-sm mb-1'>
                      Member 2 Name
                    </p>
                    <input
                      type='text'
                      name='Member1Name'
                      className='font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1'
                    />
                  </div>
                  <div>
                    <p className='capitalize text-base text-slate-700 text-sm mb-1'>
                      Email
                    </p>
                    <input
                      type='text'
                      name='Email'
                      className='font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1'
                    />
                  </div>
                  <div>
                    <p className='capitalize text-base text-slate-700 text-sm mb-1'>
                      Specialization
                    </p>
                    <select
                      name='Specialization'
                      className='font-Nunito font-semibold mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-96 sm:w-144 rounded-md focus:ring-1 mb-20'
                    >
                      <option value='Software Engineering'>
                        Software Engineering
                      </option>
                      <option value='blaa'>blaa</option>
                      <option value='blaaa'>blaaa</option>
                      <option value='blaaaa'>blaaaa</option>
                      <option value='blaaaaa'>blaaaaa</option>
                    </select>
                  </div>
                </div>
                <div className='flex flex-col gap-12'>
                  <div>
                    <p className='capitalize text-base text-slate-700 text-sm mb-1'>
                      ID Number
                    </p>
                    <input
                      type='text'
                      name='ID Number'
                      className='font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1'
                    />
                  </div>
                  <div>
                    <p className='capitalize text-base text-slate-700 text-sm mb-1'>
                      Phone
                    </p>
                    <input
                      type='text'
                      name='Phone'
                      className='font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1'
                    />
                  </div>
                </div>
                <div className='flex flex-col gap-12 '>
                  <div>
                    <p className='capitalize text-base text-slate-700 text-sm mb-1'>
                      Member 3 Name
                    </p>
                    <input
                      type='text'
                      name='Member3Name'
                      className='font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1'
                    />
                  </div>
                  <div>
                    <p className='capitalize text-base text-slate-700 text-sm mb-1'>
                      Email
                    </p>
                    <input
                      type='text'
                      name='Email'
                      className='font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1'
                    />
                  </div>
                  <div>
                    <p className='capitalize text-base text-slate-700 text-sm mb-1'>
                      Specialization
                    </p>
                    <select
                      name='Specialization'
                      className='font-Nunito font-semibold mt-1 px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-96 sm:w-144 rounded-md focus:ring-1 mb-20'
                    >
                      <option value='Software Engineering'>
                        Software Engineering
                      </option>
                      <option value='blaa'>blaa</option>
                      <option value='blaaa'>blaaa</option>
                      <option value='blaaaa'>blaaaa</option>
                      <option value='blaaaaa'>blaaaaa</option>
                    </select>
                  </div>
                </div>
                <div className='flex flex-col gap-12'>
                  <div>
                    <p className='capitalize text-base text-slate-700 text-sm mb-1'>
                      ID Number
                    </p>
                    <input
                      type='text'
                      name='ID Number'
                      className='font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1'
                    />
                  </div>
                  <div>
                    <p className='capitalize text-base text-slate-700 text-sm mb-1'>
                      Phone
                    </p>
                    <input
                      type='text'
                      name='Phone'
                      className='font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1'
                    />
                  </div>
                </div>
              </div>
              <div>
                <button className='mt-[3rem] ml-[58rem] text-lg  px-6 py-1 bg-regal-blue text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-50 sm:w-50 rounded-md hover:bg-regal-blue-active text-sm'>
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentGroup
