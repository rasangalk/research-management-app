import React from 'react'
import Menu from '../../../components/SupervisorMenu'

function AssignedTopics() {
  return (
    <div className='w-screen h-screen grid grid-cols-12 bg-bk-white'>
      <div className=''>
        <Menu />
      </div>
      <div className='col-span-11  '>
        <div className='grid grid-rows-6 h-full w-full'>
          <div className='flex items-center gap-8'>
            <div className='ml-[59.5rem] mt-9'>
              <input
                type='search'
                placeholder='Search'
                className='font-normal px-3 py-1 bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-78 rounded-md text-base focus:ring-1'
              />
            </div>
          </div>
          <div className='row-span-5 mx-auto bg-white w-[68.5rem] drop-shadow-xl rounded-xl mt-8 h-[28.5rem]'>
            <h2 className='text-xl font-bold ml-5 pt-2'>Assigned Topics</h2>
            <div className='overflow-auto h-[25rem] mx-12 mt-6'>
              <table className='border-collapse w-full '>
                <thead>
                  <tr>
                    <th className='py-2 px-2 uppercase bg-white text-left sticky top-0 z-1'>
                      group id
                    </th>
                    <th className='py-2 px-2 uppercase bg-white text-left sticky top-0 z-1'>
                      topic
                    </th>
                    <th className='py-2 px-2 uppercase bg-white text-left sticky top-0 z-1'>
                      interest
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='even:bg-white odd:bg-slate-100 cursor-pointer'>
                    <td className='uppercase py-2 px-2'></td>
                    <td className='capitalize py-2 px-2'></td>
                    <td className='capitalize py-2 px-2'></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AssignedTopics
