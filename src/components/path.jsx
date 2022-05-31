
export default function structure() {
  return (
    <div className='card'>
      <div>
        <div className="py-3 px-4 bg-slate-400 rounded-t-md text-white">
          <p className="font-bold">
            <span className="font-normal pr-2">Path:</span> 
            Monthly Quota
          </p>
        </div>

        {/* quota details */}
        <div className="p-4 pb-6 grid grid-cols-3">
          <div className="grid col-span-2 grid-cols-2 gap-6">
            <ul className="space-y-3">
              <li className="col-span-1">
                <h2 className="text-xs font-bold text-slate-400">Quota Details</h2>
              </li>
              <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="font-bold">
                  $140,000
                </p>
              </li>
              <li className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="font-bold">
                  ARR - Monthly
                </p>
              </li>
              <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="font-bold">
                  Incentivizes 130% OTE
                </p>
              </li>
            </ul>

            <ul className="space-y-2 pr-12">
              <li className="col-span-1">
                <h2 className="text-xs font-bold text-slate-400">Earnings Tiers</h2>
              </li>
              <li className="flex-between border-b border-gray-200 py-0.5">
                <p className="font-medium text-slate-600">
                  0-50%
                </p>
                <p className="font-bold">
                  0%
                </p>
              </li>
              <li className="flex-between border-b border-gray-200 pb-2">
                <p className="font-medium text-slate-600">
                  50-100%
                </p>
                <p className="font-bold">
                  10%
                </p>
              </li>
              <li className="flex-between">
                <p className="font-medium text-slate-600">
                  100%+
                </p>
                <p className="font-bold">
                  12%
                </p>
              </li>
            </ul>
          </div>

          {/* path chart */}
          <div className="col-span-1 -m-4 p-4 border-l-2 border-slate-200">
            <div>
              <h2 className="text-xs font-bold text-slate-400">KPIs:</h2>
              
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>            
                  <p>
                    Incentivizes 125% Attainment
                  </p>
                </li>
                <li className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>            
                  <p>
                    Incentivizes 135% OTE
                  </p>
                </li>
                <li className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>            
                  <p>
                    Top 10% Sales Team Performance
                  </p>
                </li>
              </ul>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
