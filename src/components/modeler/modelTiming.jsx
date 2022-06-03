import React from "react";

export default function ModelRevenue (props) {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2">

      <div className="relative py-6 space-y-4 border-t-2 border-qpSlate-200">
        <div className="relative">
          <label className="flex-between">
            <p className="label">
              Avg Contract Value
              <span>
                <a href="/" className="info">
                  More Info
                </a>
              </span>
            </p>
          </label>
          <div className="relative">
            <input type="text" className="input pl-9" name="onTarget" placeholder="28,000" />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute top-2.5 left-1.5 text-qpSlate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <button
              onClick={() => ('/')}
              className="btn-zord">
              <p className="font-bold text-xs">
                Calculate
              </p>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="relative">
          <label className="flex-between">
            <p className="label">
              Deals Per Period
              <span>
                <a href="/" className="info">
                  More Info
                </a>
              </span>
            </p>
          </label>
          <div className="relative">
            <input type="text" className="input pl-9" name="onTarget" placeholder="Quarterly" />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute top-2.5 left-1.5 text-qpSlate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        
        <div className="relative">
          <label className="flex-between">
            <p className="label">
              Quota Frequency
              <span>
                <a href="/" className="info">
                  More Info
                </a>
              </span>
            </p>
          </label>
          <div className="relative">
            <input type="text" className="input pl-9" name="onTarget" placeholder="Quarterly" />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute top-2.5 left-1.5 text-qpSlate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>

      </div>
    </div>

    <div className="flex-center flex-col">
      <h3 className="text-2xl font-bold">Quota:</h3>
      <div className="relative">
        <input type="text" className="input pl-9 text-qpWater" name="onTarget" placeholder="140,000" value="140,000"/>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute top-2.5 left-1.5 text-qpSlate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>      
      </div>
    </div>
  </div>
  )
}