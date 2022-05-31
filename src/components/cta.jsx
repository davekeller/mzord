
export default function Cta() {
  return (
    <div className="flex-between">
      <div className="flex items-center space-x-2">
        <div className="p-2 rounded-full bg-white shadow">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>        
        </div>
        <div>
          <h2 className="font-bold text-slate-700">Monthly Incentivizer</h2>
          <p className="text-xs text-slate-500">500 users on this plan</p>
        </div>
      </div>
      <div>
        <button class="btn bg-blue-600 border-blue-600 shadow-md rounded-md flex space-x-2 px-4">
          <span>Try This Plan</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>        
        </button>
      </div>
    </div>
  )
}
              