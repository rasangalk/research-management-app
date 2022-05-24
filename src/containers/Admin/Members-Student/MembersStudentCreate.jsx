import React from 'react'
import Menu from '../../../components/AdminMenu'
import Container from '../../../components/StudentContainer'

function MembersStudentCreate() {
  return (
    <div>
      <div className='w-screen h-screen grid grid-cols-12 bg-bk-white'>
        <div className=''>
          <Menu />
        </div>
        <div className='col-span-11 mx-auto my-auto '>
          <div className='relative'>
            <Container title='members' width='w-[68rem] h-[25rem]' />
            <div className='absolute top-[10rem] left-[7rem]'>
              <div className=' grid grid-cols-2  w-[60rem] '>
                <div className='flex flex-col gap-12'>
                  <div>
                    <p className='capitalize text-base text-slate-700 text-sm mb-1'>
                      Name
                    </p>
                    <input
                      type='text'
                      name='Name'
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
                      Group ID
                    </p>
                    <input
                      type='text'
                      name='Group ID'
                      className='font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-1'
                    />
                  </div>
                </div>
                <div className='flex flex-col gap-12'>
                  <div>
                    <p className='capitalize text-base text-slate-700 text-sm mb-1'>
                      ID number
                    </p>
                    <input
                      type='text'
                      name='ID number'
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
                  <div>
                    <p className='capitalize text-base text-slate-700 text-sm mb-1'>
                      Specailization
                    </p>
                    <select
                      name='Specailization'
                      className=' font-Nunito font-semibold  bg-white border border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block lg:w-[25rem] sm:w-[25rem] rounded-md text-base focus:ring-1 px-3 py-2'
                    >
                      <option value='' disabled selected hidden>
                        Select Your Specailization
                      </option>
                      <option value='bla'>Software Engineering</option>
                      <option value='blaa'>blaa</option>
                      <option value='blaaa'>blaaa</option>
                      <option value='blaaaa'>blaaaa</option>
                      <option value='blaaaaa'>blaaaaa</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className='mt-[5.3rem]  ml-[58.3rem] '>
                <button className=' text-lg  px-6 py-1 bg-regal-blue text-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-50 sm:w-50 rounded-md hover:bg-regal-blue-active float-right  text-sm'>
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MembersStudentCreate
