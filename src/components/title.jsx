
export default function title() {
  return (
    <div className='mt-12 flex-between'>
      <div>
        {/* breadcrumb */}
        <ul className='flex items-center space-x-2 text-sm font-medium text-slate-500'>
          <li>
            Plans
          </li>
          <li>›</li>
          <li>
            Account Exececutive Plans
          </li>
        </ul>
        <h1 className="text-2xl font-bold">Account Executive SaaSy New Biz Plan</h1>
      </div>

      <div className="flex items-center space-x-6 text-right">
        <a href="/">
          <div className="flex items-center space-x-1 text-slate-500 hover:text-slate-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            <p className="p font-semibold text-sm">
              Edit
            </p>
          </div>
        </a>
        <a href="/">
          <div className="flex items-center space-x-1 text-slate-500 hover:text-slate-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            <p className="p font-semibold text-sm">
              Share
            </p>
          </div>
        </a>





        <button className='btn'>
          Use This Plan &rarr;
        </button>
      </div>
    </div>
  )
}
