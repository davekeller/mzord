
export default function Cta() {
  return (
    <div className="mb-12 flex justify-between items-end">
      
      <div className="flex space-x-4 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
        <div>
          <h3 className="font-semibold text-qpNavy">Monthly Incentivizer</h3>
          <p className="-mt-0.5 text-xs text-qpSlate-500">This plan incentivizes monthly sales.</p>
        </div>     
      </div>

      
      <div>
        <button class="btn bg-qpWater border-none shadow-sm rounded-md flex space-x-2 px-4 py-2 hover:bg-gradient-to-br hover:from-qpSky hover:to-qpGreen-200">
          <span>Try This Plan</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>        
        </button>
      </div>
    </div>
  )
}
              