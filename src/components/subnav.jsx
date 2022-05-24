
export default function subnav (props) {
  return (
    <div className="pt-4 pb-3 pl-36 pr-6 flex-between bg-slate-500">
      <ul className='flex items-center space-x-2 text-sm font-medium text-slate-300'>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </li>
        <li>›</li>
        <li>Plans</li>
        <li>›</li>
        <li>Account Exececutive Plans</li>
      </ul>

      <div className="flex items-center space-x-8 text-right">
        <a href="/">
          <div className="flex items-center space-x-1 text-white hover:opacity-70">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            <p className="p font-semibold text-sm">
              Edit
            </p>
          </div>
        </a>
        <a href="/">
          <div className="flex items-center space-x-1 text-white hover:opacity-70">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            <p className="p font-semibold text-sm">
              Share
            </p>
          </div>
        </a>

        <button className='btn bg-white text-teal-600 border-white rounded py-1'>
          Use This Plan &rarr;
        </button>
      </div>
    </div>
  )
}