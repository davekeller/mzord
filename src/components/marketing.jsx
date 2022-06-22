
export default function marketing (props) {
  return (
    <div className="py-40 bg-gradient-to-tr to-white overflow-hidden">
      <div className="relative w-2/3 mx-auto">
        <div className="w-2/3">
          
          <h2 className="font-bold text-sm uppercase text-qpSky">Sales Compensation</h2>
          <h1 className="mt-2 font-semibold text-3xl">
            Operating lean shouldn't mean less revenue
          </h1>
          <p className="mt-6">
            Give your reps transparency into their earnings, design a compensation plan that rewards the team you have, and reap the rewards of higher rep retention, increases in attainment, and record-breaking sales with automated commission tracking.
          </p>
        </div>
        <img className="absolute -right-1/3 -top-1/3 shadow-2xl overflow-clip" src="/mzord/assets/hero.png" alt="hero img" />
      </div>

      <div className="mt-32 py-32 bg-qpTwilight">
        <div className="relative z-10 w-1/2 mx-auto">
          <h1 className="text-4xl font-bold text-white">
            Right Commission. <span className="text-qpSlate-400">Right Now.</span>
          </h1>
          <p className="py-6 text-sm text-qpSlate-300 leading-loose"> 
            Give your reps transparency into their earnings, rewards the team you have, reaps the rewards of higher rep retention, increases in attainment, and record-breaking sales with automated commission tracking.
          </p>
          <button 
            onClick={() => props.onChangePage('planList')}
            className="px-6 py-2 rounded-md bg-white font-bold text-qpSlate-700 shadow hover:bg-qpSlate-700 hover:text-white">
              Discover Comp Plans &rarr;
          </button>
          <img className="absolute -left-2/3 -top-6 w-96 shadow-2xl overflow-clip" src="/mzord/assets/hero.png" alt="hero img" />
        </div>
      </div>

      <div className="relative mt-32 text-center">
        <h1 className="text-4xl font-bold text-qpSlate-600">
         Call To Action!
        </h1>
        <button 
          onClick={() => props.onChangePage('plan')}
          className="mt-4 btn bg-qpGreen-200 border-qpGreen-200">
            yes please &rarr;
        </button>
      </div>
    </div>
  )
}