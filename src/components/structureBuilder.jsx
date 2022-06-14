// import Structure from './structure.jsx';
import Path from './path.jsx';

export default function structureBuilder() {
  return (
    <div>
      <div className='mt-10 px-6 pb-8 card overflow-hidden'>
        <div className='flex-between -mx-6 px-6 py-4 bg-qpSlate-500 text-white text-sm font-semibold'>
          <p className="">
            Plan Forecast
          </p>
          <ul className="flex font-medium space-x-4 text-xs text-qpSlate-200">
            <li className="flex space-x-1 items-center justify-end">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-qpSlate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
                <b>SaaS Sales</b>
            </li>
            <li className="flex space-x-1 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-qpSlate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <div>
                <p><b>50-100</b> Employees</p>
              </div>
            </li>
            <li className="flex space-x-1 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-qpSlate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <div>
                <p><b>5,250</b> Users</p>
              </div>
            </li>
          </ul>
        </div>


        <div className="mt-4">
          <h2 className='text-qpSlate-500 text-xs font-normal italic'>
            Drag the slider to forecast your earnings per attainment.
          </h2>
          <img className='mt-4 border-2 border-qpSlate-300 rounded-md col-span-3' src="/assets/graph.png" />
        </div>
      </div>

      <div className='mt-8 space-y-2'>
        <h2 className='font-bold text-lg'>Plan Details</h2>
        <div className='grid grid-cols-2 gap-8 text-sm text-qpSlate-500'>
          <p>
            Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further
          </p>
          <p>
            the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity, transparency and empowerment.
          </p>
        </div>
      </div>

      <div className='mt-12 col-span-full'>
        {/* header */}
        <div className="flex space-x-4 items-center">
          <h2 className="text-lg font-bold">Paths to Quota</h2>
        </div>
        <div className="mt-4 space-y-6">
          <Path />
          <Path />
        </div>
      </div>
    </div>
  )
}
