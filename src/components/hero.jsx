
export default function Hero (props) {
  return (
    <div className="relative p-28 bg-gradient-to-br from-qpDark via-qpNavy to-qpTwilight text-center overflow-hidden">
      <div className="relative z-10 text-center w-2/3 mx-auto">
        <h1 className="text-5xl font-bold text-white">
          Right Commission. <span className="text-qpGreen-200">Right Now.</span>
        </h1>
        <p className="p-6 text-white text-opacity-70 leading-loose"> 
          Give your reps transparency into their earnings, rewards the team you have, reaps the rewards of higher rep retention, increases in attainment, and record-breaking sales with automated commission tracking.
        </p>
        <div className="mt-6 flex items-center justify-center space-x-8">
          <button 
            onClick={() => props.onChangePage('planList')}
            className="px-6 py-2 rounded-md font-bold text-white bg-none border-2 border-qpSky shadow shadow-qpDark/50 hover:text-qpGreen-200 hover:bg-white hover:border-white">
              Discover Comp Plans
          </button>
          <button 
            onClick={() => props.onChangePage('plan')}
            className="px-6 py-2 rounded-md font-bold text-white bg-qpGreen-200 border-2 border-qpGreen-200 shadow shadow-qpDark/50 hover:text-qpGreen-200 hover:bg-white hover:border-white">
              Design Your Plan &rarr;
          </button>
        </div>
      </div>

      <img src="/assets/blob_left.svg" className="absolute -left-48 -top-24 w-1/4" />
      <img src="/assets/blob_right.svg" className="absolute -right-40 -top-2 w-1/4" />
    </div>
  )
}