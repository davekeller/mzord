
export default function Path() {
  return (
    <div className='card'>
      <div>
        <div className="py-3.5 px-4 bg-qpTwilight rounded-t-md text-white">
          <p className="font-bold">
            <span className="font-medium pr-2 opacity-70">Path to:</span> 
            Monthly Quota
          </p>
        </div>

        {/* quota details */}
        <div className="grid grid-cols-2">
          <ul className="col-span-full p-4 flex items-center space-x-8 text-sm border-b-2 border-qpSlate-200">
            <li className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-qpWater" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <p className="font-bold">
                $140,000
              </p>
            </li>
            <li className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-qpWater" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="font-bold">
                ARR: Monthly
              </p>
            </li>
          </ul>
          <div className="p-4 pb-6">
            <h2 className="text-xs font-bold text-qpSlate-400">Earnings Rules:</h2>
            <p className="text-sm mt-2 leading-relaxed">
              An Account Executive has a monthly quota of <b>$33,000 ARR</b> and earns a <b>10% commission</b> on every deal they close.
            </p>
          </div>

          {/* path chart */}
          <div className="p-4 pb-6 border-l-2 border-qpSlate-200">
            <div>
              <h2 className="text-xs font-bold text-qpSlate-400">Path Description:</h2>
              <p className="text-sm mt-2 text-qpSlate-600 leading-relaxed">
                This plan only has one path: Single-Rate Commission. As dictated, this path will pay the same rate on all deals regardless of quota attainment, product, contract length, etc. 
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
