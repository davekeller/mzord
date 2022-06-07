import React from "react";

export default function ModelRevenue (props) {
  return (
    <div className="grid grid-cols-3 gap-8 pt-4">
      <div className="col-span-2">
        <div className="relative pb-8 pt-4 space-y-4">
          <div className="relative">
            <label>
              <p className="label">
                Revenue Range
                <span>
                  <a href="/" className="info">
                    Annual Business Revenue
                  </a>
                </span>
              </p>
            </label>
            <div className="relative">
              <select type="text" className="input pl-9 text-qpWater" name="onTarget" placeholder="20,000">
                <option>0-5 Million</option>
                <option>5-25 Million</option>
                <option>25-50 Million</option>
                <option>50-100 Million</option>
                <option>100+ Million</option>
              </select>
              <img className="h-6 w-6 absolute top-2.5 left-1.5 text-qpSlate-300" src="/assets/icons/dollar.svg" alt="dollar sign" />
            </div>
          </div>

          <div className="relative">
            <label className="flex-between">
              <p className="label">
                Quota : OTE Ratio
                <span>
                  <a href="/" className="info">
                    more
                  </a>
                </span>
              </p>
            </label>
            <div className="relative">
              <input type="text" className="input pl-9" name="onTarget" placeholder="5x" />
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
                Annualized Quota
                <span>
                  <a href="/" className="info">
                    more
                  </a>
                </span>
              </p>
            </label>
            <div className="grid grid-cols-4 gap-4 items-center">
              <div className="relative col-span-3">
                <input type="text" className="input pl-9" name="onTarget" placeholder="700,000" />
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
              <select type="text" className="input text-qpWater pl-2" name="onTarget" placeholder="20,000">
                <option>ARR</option>
                <option>MRR</option>
                <option>QRR</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-center flex-col">
        <h3 className="font-semibold">Quota:OTE</h3>
        <p className="text-xs font-semibold text-qpSlate-500">This is a healthy ratio 👍️</p>
        <img className="mt-2" src="/assets/gauge.png" alt="gauge" />
      </div>
    </div>    
  )
}