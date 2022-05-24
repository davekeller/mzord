
export default function Modeler (props) {
  return (
    <div className='p-6 bg-white shadow-lg shadow-opacity-20 rounded-b-lg border-t-4 border-teal-400'>
      <div className="flex justify-between">
        <div>
          <h1 className='text-sm font-bold text-teal-700 uppercase'>
            Modeler
          </h1>
          <p className='p text-slate-500 text-xs'>
            Play around with numbers here.
          </p>
        </div>
        <div className="text-right text-slate-700">
          <p className="font-bold">
            Quarterly Incentivizer
          </p>
          <p className="p text-slate-500 text-xs">
            This plan is a great plan for you.
          </p>
        </div>
      </div>

      {/* modeler inputs */}
      <form className="mt-5 space-y-4">
        <div className="py-6 -mx-6 px-6 bg-slate-700 space-y-4" >
          <div className="relative">
            <label className="flex-between text-white border-white">
              <p className="label">
                On-Target Earnings (OTE)
              </p>
              <a className="text-xs underline font-normal italic opacity-50">info</a>
            </label>
            <div className="relative">
              <input type="text" className="input border-white pl-10" name="onTarget" placeholder="140,000" />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute top-2.5 left-1.5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div className="relative">
            <label className="flex-between text-white border-white">
              <p className="label">
                Base:Variable Pay Mix
              </p>
              <a className="info">info</a>
            </label>
            <div className="relative">
              <input type="text" className="input border-white pl-10" name="onTarget" placeholder="50:50" />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute top-2.5 left-1.5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>            
            </div>
          </div>
        </div>

        <div className="relative">
          <label className="flex-between">
            <p className="label">
              Avg Sales Price (ASP/ACV)
            </p>
            <a className="text-xs underline font-normal italic hover:opacity-50">info</a>
          </label>
          <div className="relative">
            <input type="text" className="input pl-10" name="onTarget" placeholder="20,000" />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute top-2.5 left-1.5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>

        <div className="relative">
          <label className="flex-between">
            <p className="label">
              Quota:OTE Ratio
            </p>
            <a className="text-xs underline font-normal italic hover:opacity-50">info</a>
          </label>
          <div className="relative">
            <input type="text" className="input pl-10" name="onTarget" placeholder="5x" />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute top-2.5 left-1.5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
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
            <input type="text" className="input pl-10" name="onTarget" placeholder="5x" value="5x" />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute top-2.5 left-1.5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>

        <div>
          <label className="label">On-Target Earnings (OTE)</label>
          <input type="text" className="input" name="ote" placeholder="poopy" />
        </div>

        <div>
          <label className="label">On-Target Earnings (OTE)</label>
          <input type="text" className="input" name="ote" placeholder="poopy" />
        </div>

      </form>
    </div>
  )
}