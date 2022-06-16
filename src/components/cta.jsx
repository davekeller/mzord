
export default function Cta() {
  return (
    <div className="flex items-center justify-end space-x-4">
      <button class="btn bg-white text-qpWater shadow-md shadow-qpSlate-700/10 font-semibold border-none rounded-md flex space-x-2 px-4 py-2 hover:bg-gradient-to-br hover:from-qpSky hover:to-qpGreen-200 hover:text-white">
        <span>Book a Demo</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </button>
      <button class="btn bg-qpWater font-semibold shadow-md shadow-qpSlate-700/10 border-none shadow-sm rounded-md flex space-x-2 px-4 py-2 bg-gradient-to-br from-qpSky to-qpWater hover:to-qpGreen-200">
        <span>Try This Plan</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>        
      </button>
    </div>
  )
}
              