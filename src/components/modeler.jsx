
export default function Modeler (props) {
  return (
    <div className='bg-white card rounded-md overflow-hidden'>

      <h1 className="px-6 pt-4 pb-3 text-qpSlate-200 text-sm font-semibold bg-qpSlate-600">
        Plan Modeling
      </h1>
      <form className="-mx-6 px-6 space-y-4">
        <div className="px-6 pt-4 pb-8 bg-qpSlate-700 text-white space-y-4" >
          <div className="relative">
            <label className="flex-between border-white">
              <p className="label">
                On-Target Earnings
                <span>
                  <a href="/" className="info">
                    Attainment/Quota
                  </a>
                </span>
              </p>
            </label>

            {/* OTE On Target Earnings */}
            <div className="relative">
              <input type="text" className="input border-white pl-10" name="onTarget" placeholder="140,000" />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute top-2.5 left-1.5 text-qpPeriwinkle" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
                Base : Variable Pay Mix
                <span>
                  <a href="/" className="info">
                    More Info
                  </a>
                </span>
              </p>
            </label>
            <div className="relative">
              <input type="text" className="input border-white pl-10" name="onTarget" placeholder="50:50" />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute top-2.5 left-1.5 text-qpPeriwinkle" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
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

        <div className="relative p-6 pt-2 space-y-4">
          <div className="relative">
            <label className="flex-between">
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
              <input type="text" className="input pl-10" name="onTarget" placeholder="20,000" />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute top-2.5 left-1.5 text-qpPeriwinkle" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>

          <div className="relative">
            <label className="flex-between">
              <p className="label">
                Quota:OTE Ratio
                <span>
                  <a href="/" className="info">
                    More Info
                  </a>
                </span>
              </p>
            </label>
            <div className="relative">
              <input type="text" className="input pl-10" name="onTarget" placeholder="5x" />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute top-2.5 left-1.5 text-qpPeriwinkle" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
              </p>
              <a className="text-xs underline font-normal italic hover:opacity-50">info</a>
            </label>
            <div className="relative">
              <input type="text" className="input pl-10" name="onTarget" placeholder="5x" value="15" />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute top-2.5 left-1.5 text-qpPeriwinkle" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>

          <div>
            <label className="label">On-Target Earnings (OTE)</label>
            <input type="text" className="input" name="ote" placeholder="placeholder" />
          </div>

          <div>
            <label className="label">On-Target Earnings (OTE)</label>
            <input type="text" className="input" name="ote" placeholder="placeholder" />
          </div>
        </div>


      </form>
    </div>
  )
}