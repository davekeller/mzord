
export default function HeroLight (props) {
  return (
    <div className="relative p-28 bg-gradient-to-tl from-white via-qpSlate-100 to-white text-center overflow-hidden">
      <div className="relative z-10 text-center w-2/3 mx-auto">
        <h1 className="text-5xl font-bold text-qpTwilight">
          Right Commission. <span className="text-qpGreen-200">Right Now.</span>
        </h1>
        <p className="p-6 text-qpSlate-600 leading-loose"> 
          Give your reps transparency into their earnings, rewards the team you have, reaps the rewards of higher rep retention, increases in attainment, and record-breaking sales with automated commission tracking.
        </p>
        <div className="mt-6 flex items-center justify-center space-x-8">
          <button 
            onClick={() => props.onChangePage('planList')}
            className="px-6 py-2 rounded-md font-semibold text-qpGreen-200 bg-white shadow-md shadow-qpSlate-800/5 hover:bg-qpWater hover:text-white hover:shadow-2xl">
              Book a Demo!
          </button>
          <button 
            onClick={() => props.onChangePage('plan')}
            className="px-6 py-2 rounded-md font-semibold text-white bg-qpWater shadow-md shadow-qpSlate-800/10 hover:bg-qpGreen-200 hover:text-white hover:shadow-2xl">
              Explore Comp Plans &rarr;
          </button>
        </div>
      </div>

      <img src="/assets/blob_left.svg" className="absolute -left-48 -top-24 w-1/4" />
      <img src="/assets/blob_right.svg" className="absolute -right-40 -top-2 w-1/4" />
    </div>
  )
}