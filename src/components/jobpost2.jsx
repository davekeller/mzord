
export default function JobPost2 (props) {
  return (
    <div>
      
      {/* post */}
      <div className="p-8 bg-white rounded shadow-md border-gray-300 grid grid-cols-6 gap-8">
        <div className="-ml-8 -my-8 py-8 pl-8 border-l-4 border-emerald-300">
          <img src="/assets/recordedfuture.png" alt="logo"/>
          <p className="mt-2 text-gray-400 text-xs">
            London, United Kingdom
          </p>
          <ul className="mt-6 text-xs text-bold space-y-2 text-slate-400">
            <li className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-gray-600">
                Software Sales
              </p>
            </li>
            <li className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-600">
                5-30M Revenue
              </p>
            </li>
            <li className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <p className="text-gray-600">
                50-100 Employees
              </p>
            </li>
          </ul>
        </div>
        
        {/* description */}
        <div className="col-span-4">
          <h2 className="text-xl font-bold">
            Account Executive, Fraud Solutions
          </h2>
          
          <p className="mt-3 text-sm text-gray-700">
            As the Account Executive for Fraud Solutions, you will develop an assigned UK territory/Set of accounts, drive engagement, and build relationships with new prospects, resulting in bookings and revenue attainment in excess of your goals.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-12 text-gray-500">
            <ul className="mt-2 pl-4 text-xs font-medium space-y-3 list-disc">
              <li className="list-none uppercase font-semibold -ml-4 text-slate-700">
                EXPERIENCE
              </li>
              <li>
                5+ years of closing/quota carrying experience in the software industry, preferably within Cyber Security
              </li>
              <li>
                Track record of success consistently exceeding overall goals in Security technology sales
              </li>
           
            </ul>
            <ul className="mt-2 pl-4 text-xs font-medium space-y-3 list-disc">
              <li className="list-none uppercase font-semibold -ml-4 text-slate-700">
                JOB REQUIREMENTS
              </li>
              <li>
                Develop and manage New Business Sales into UK based Commercial & Enterprise prospects
              </li>
              <li>
                Identify, manage, and close multiple opportunities and projects at the same time
              </li>
            </ul>
          </div>
        </div>

        <div className="border-l border-gray-200 -m-8 p-8">
          <button onClick={() => props.onChangePage('details')} className="font-semibold w-full text-center px-4 py-1.5 bg-slate-400 text-white text-xs rounded">
            View on QP &rarr;
          </button>
          <ul className="mt-2 grid grid-cols-2 gap-4">
            <li>
              <b className="text-xs font-semibold text-gray-500 tracking-normal">On-Time Earnings:</b>
              <p className="text-sm font-bold">$140,000/yr</p>
            </li>
            <li className="text-right">
              <b className="text-xs font-semibold text-gray-500 tracking-normal">Base:Variable</b>
              <p className="text-sm font-bold">50:50</p>
            </li>
            <li>
              <b className="text-xs font-semibold text-gray-500 tracking-normal">Annualized Quota:</b>
              <p className="text-sm font-bold">$700,000</p>
            </li>
            <li className="text-right">
            <b className="text-xs font-semibold text-gray-500 tracking-normal">Monthly Deals</b>
              <p className="text-sm font-bold">5x</p>
            </li>

          </ul>
          <div className="mt-4">
            <img src="/assets/graph.png" alt="graph" className="border-2 border-gray-300 rounded"/>
          </div>
        </div>

      </div>
    </div>
  )
}