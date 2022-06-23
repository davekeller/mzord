import React from "react";

export default function ModelRevenue (props) {
  return (
    <div className="grid grid-cols-3 gap-8 pb-8">
      {/* Quota and Recommendation */}
      <div className="col-span-full p-4 -mx-2 bg-qpSlate-500 rounded">
        <div className="relative ">
          <label className="flex-between border-white text-white">
            <p className="label">
              Quota
              <span>
                <a href="/" className="info">
                  more
                </a>
              </span>
            </p>
          </label>

          <div className="relative">
            <input type="text" className="input text-qpWater border-white pl-9" name="onTarget" placeholder="140,000" />
            <img className="h-6 w-6 absolute top-2.5 left-1.5 text-qpSlate-300" src="/assets/icons/dollar.svg" alt="dollar sign" />
          </div>
        </div>
      </div>

      
      <div className="col-span-2">
        <div className="relative space-y-4">
          <div className="relative">
            <label className="flex-between">
              <p className="label">
                Avg Contract Value
                <span>
                  <a href="/" className="info">
                    more
                  </a>
                </span>
              </p>
            </label>
            <div className="relative">
              <input type="text" className="input pl-9" name="onTarget" placeholder="28,000" />
              <img className="h-6 w-6 absolute top-2.5 left-1.5 text-qpSlate-300" src="/assets/icons/dollar.svg" alt="dollar sign" />
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
                    more
                  </a>
                </span>
              </p>
            </label>
            <div className="relative">
              <input type="text" className="input pl-9" name="onTarget" placeholder="5" />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute top-2.5 left-1.5 text-qpSlate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          
          <div className="relative">
            <label className="flex-between">
              <p className="label">
                Quota Frequency
                <span>
                  <a href="/" className="info">
                    more
                  </a>
                </span>
              </p>
            </label>
            <div className="relative">
              <input type="text" className="input pl-9" name="onTarget" placeholder="Quarterly" />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute top-2.5 left-1.5 text-qpSlate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>

        </div>
    </div>

    <div className="flex-center flex-col">
      <h3 className="font-semibold">Deals Per Period</h3>
      <p className="text-xs font-semibold text-qpSlate-500">This is a healthy ratio 👍️</p>
      <img src="/assets/gauge.png" alt="guage" />
    </div>
  </div>
  )
}