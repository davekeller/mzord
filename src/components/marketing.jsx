
export default function personas (props) {
  return (
    <div className="py-24 bg-slate-200 overflow-hidden">
      <div className="relative w-2/3 mx-auto">
        <div className="w-2/3">
          
          <h2 className="font-bold text-sm uppercase text-sky-500">Sales Compensation</h2>
          <h1 className="mt-2 font-semibold text-3xl">
            Operating lean shouldn’t mean less revenue
          </h1>
          <p className="mt-6">
            Give your reps transparency into their earnings, design a compensation plan that rewards the team you have, and reap the rewards of higher rep retention, increases in attainment, and record-breaking sales with automated commission tracking.
          </p>
        </div>
        <img className="absolute -right-1/3 -top-1/3 shadow-2xl overflow-clip" src="/assets/hero.png" alt="hero img" />
      </div>

      <div className="mt-32 py-32 bg-slate-800">
        <div className="relative z-10 w-1/2 mx-auto">
          <h1 className="text-4xl font-bold text-white">
            Right Commission. <span className="text-slate-400">Right Now.</span>
          </h1>
          <p className="py-6 text-sm text-gray-500 leading-loose"> 
            Give your reps transparency into their earnings, rewards the team you have, reaps the rewards of higher rep retention, increases in attainment, and record-breaking sales with automated commission tracking.
          </p>
          <div className="mt-6 flex items-center space-x-8">
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
          <img className="absolute -left-2/3 -top-6 w-96 shadow-2xl overflow-clip" src="/assets/hero.png" alt="hero img" />
        </div>
      </div>

      <div className="mt-24 text-center">
        <h1 className="text-4xl font-bold text-slate-400">
         Ye shall do this.
        </h1>
        <button 
          onClick={() => props.onChangePage('plan')}
          className="mt-4 btn bg-sky-500 border-sky-500">
            ok ok gosh &rarr;
        </button>
      </div>
    </div>
  )
}