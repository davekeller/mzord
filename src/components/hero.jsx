
export default function hero (props) {
  return (
    <div className="relative p-28 bg-gradient-to-br from-slate-200 to-white text-center overflow-hidden">
      <div className="relative z-10 text-center w-1/2 mx-auto">
        <h1 className="text-5xl font-bold text-sky-600">
          Right Commission. <span className="text-slate-700">Right Now.</span>
        </h1>
        <p className="p-6 text-sm text-gray-500 leading-loose"> 
          Give your reps transparency into their earnings, rewards the team you have, reaps the rewards of higher rep retention, increases in attainment, and record-breaking sales with automated commission tracking.
        </p>
        <div className="mt-6 flex items-center justify-center space-x-8">
          <button 
            onClick={() => props.onChangePage('planList')}
            className="px-6 py-2 rounded-md bg-white font-bold text-slate-700 shadow hover:bg-slate-700 hover:text-white">
              Discover Comp Plans &rarr;
          </button>
          <button 
            onClick={() => props.onChangePage('plan')}
            className="px-6 py-2 rounded-md bg-teal-500 shadow text-white font-bold hover:bg-slate-700">
              Design Your Plan &rarr;
          </button>
        </div>
      </div>

      <img src="/assets/blob_left.svg" className="absolute -left-14 -top-40 w-1/4" />
      <img src="/assets/blob_right.svg" className="absolute -right-8 -top-2 w-1/4" />
    </div>
  )
}