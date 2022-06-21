export default function Forecast() {
  return (
    <div className='px-6 pb-8 card overflow-hidden'>
      <div className='flex-between -mx-6 px-6 py-4 bg-qpTwilight text-white text-sm font-semibold'>
        <p>
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
        <img className='border-2 border-qpSlate-300 rounded-md col-span-3' src="/mzord/assets/graph.png" />
      </div>
    </div>  
  )
}