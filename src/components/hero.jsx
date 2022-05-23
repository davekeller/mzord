
export default function hero (props) {
  return (
    <div className="relative p-28 bg-gradient-to-br from-slate-200 to-white text-center overflow-hidden">
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold text-sky-600">
          Right Commission. <span className="text-slate-700">Right Now.</span>
        </h1>
        <div className="mt-6 flex items-center justify-center space-x-8">
          <button 
            onClick={() => props.onChangePage('planList')}
            className="px-6 py-2 rounded-md bg-white font-bold text-slate-700 hover:bg-slate-700 hover:text-white">
              Discover Comp Plans &rarr;
          </button>
          <button 
            onClick={() => props.onChangePage('plan')}
            className="px-6 py-2 rounded-md bg-teal-500 text-white font-bold hover:bg-slate-700">
              Design Your Plan &rarr;
          </button>
        </div>
      </div>

      <img src="/assets/blob_left.svg" className="absolute -left-14 -top-40 w-1/4" />
      <img src="/assets/blob_right.svg" className="absolute -right-8 -top-2 w-1/4" />
    </div>
  )
}