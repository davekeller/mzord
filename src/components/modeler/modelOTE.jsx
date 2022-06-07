import React from "react";

export default function ModelOTE (props) {
  return (
    <div className="grid grid-cols-2 gap-6 px-8 -mx-6 pt-4 pb-8 bg-qpSlate-700 text-white" >
      
      {/* OTE On Target Earnings */}
      <div className="relative">
        <label className="flex-between border-white">
          <p className="label">
            On-Target Earnings
            <span>
              <a href="/" className="info">
                more info
              </a>
            </span>
          </p>
        </label>

        <div className="relative">
          <input type="text" className="input text-qpWater border-white pl-9" name="onTarget" placeholder="140,000" />
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

      {/* Quota and Recommendation */}
      <div>
        <div className="relative">
          <label className="flex-between border-white">
            <p className="label">
              Quota
              <span>
                <a href="/" className="info">
                  more info
                </a>
              </span>
            </p>
          </label>

          <div className="relative">
            <input type="text" className="input text-qpWater border-white pl-9" name="onTarget" placeholder="140,000" />
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
      </div>

      {/* Base:Variable */}
      <div className="relative col-span-2 grid grid-cols-3 gap-4">

        <div>
          <label className="flex-between">
            <p className="label">
              Base Pay
              <span>
                <a href="/" className="info">
                  more info
                </a>
              </span>
            </p>
          </label>
          <div className="relative">
            <input type="text" className="input border-white pl-9" name="onTarget" placeholder="84,000" />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute top-2.5 left-1.5 text-qpSlate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
          </div>
        </div>

        <div>
          <label className="flex-center flex-col">
            <p className="label">
              Pay Mix
            </p>
          </label>
          <div className="relative">
            <input type="text" className="input text-center border-qpSlate-600 text-xl bg-qpSlate-600 text-white" name="onTarget" placeholder="60:40" value="60:40"/>
          </div>
        </div>

        <div>
          <label className="flex-between">
            <p className="label">
              Variable Pay
              <span>
                <a href="/" className="info">
                  more info
                </a>
              </span>
            </p>
          </label>
          <div className="relative">
            <input type="text" className="input border-white pl-9" name="onTarget" placeholder="56,000" />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute top-2.5 left-1.5 text-qpSlate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
          </div>
        </div>

      </div>
    </div>
  )
}