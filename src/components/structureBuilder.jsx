// import Structure from './structure.jsx';
import Path from './path.jsx';

export default function structureBuilder() {
  return (
    <div>
      <div className='mt-10 px-6 pb-8 card overflow-hidden'>
        <div className='flex-between -mx-6 px-6 py-4 bg-qpTwilight text-white text-sm font-semibold'>
          <p className="">
            Plan Forecast
          </p>
          <ul className="flex font-medium items-center space-x-4 text-xs text-qpSlate-200">
            <li className='text-xs font-normal'>Recommended for:</li>
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
          </ul>
        </div>


        <div className="mt-8">
          <img className='border-2 border-qpSlate-300 rounded-md col-span-3' src="/assets/graph.png" />
        </div>
      </div>

      <div className='mt-8 space-y-2'>
        <h2 className='font-bold text-lg'>Plan Details</h2>
        <div className='text-sm text-qpSlate-500'>
          <p>
            The most basic form of sales commissions are Single Rate Commissions, also called Flat or Fixed Rate Commissions. All these terms mean you earn a set, single percentage off the deals you close.
          </p>
        </div>
      </div>

      <div className='mt-12 mb-40 col-span-full'>
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
