
export default function PlanSmall2() {
  return (
    <div className="card p-6 flex border-4 border-transparent hover:border-qpSky cursor-pointer">
      <div className="p-4 w-32 h-32 bg-qpGreen-200 rounded-lg text-white font-semibold">
        <p className="font-bold">AE:</p>
        <p className="text-sm font-semibold leading-snug">Single Rate Plan</p>
      </div>
      <div className="pl-6">
        <h1 className="font-bold text-lg">Single Rate Comp Plan</h1>
        <p className="mt-2 text-xs text-qpSlate-500 leading-relaxed">
          If you get paid a different commission rate depending on your quota attainment. If you get paid a different commission rate depending on your quota attainment.
        </p>
        <ul className="mt-4 space-y-2 text-sm">
          <li className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-qpSlate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p>
              Very Transparent to Reps
            </p>
          </li>
          <li className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-qpSlate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p>
              Incentivizes Quarterly Milestones
            </p>
          </li>
        </ul>
      </div>
  </div>
)}
