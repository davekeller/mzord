// import Structure from './structure.jsx';
import Path from './path.jsx';

export default function structureBuilder() {
  return (
    <div>
      <div className="grid grid-cols-4 gap-6 p-6 pb-8 card border-t-4 border-teal-400 rounded-t">
        <div className='col-span-3'>
          <h1 className='text-sm font-semibold text-slate-500'>
            Plan Forecast
          </h1>
          <img className='mt-2 border-2 border-slate-300 rounded-md col-span-3' src="/assets/graph.png" />
          <p className='mt-3 text-slate-500 text-xs italic'>
            Drag the slider to see your earnings per attainment.
          </p>
        </div>
        <div className="col-span-1">
          <h1 className='text-sm font-semibold text-slate-500'>
            Key Indicators
          </h1>
          <ul className="mt-2 pt-4 border-t-2 space-y-4 border-slate-100 font-semibold text-sm">
            <li className="py-3 px-2 flex space-x-2 bg-slate-100 rounded-lg leading-tight">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>            
              <p>
                Incentivizes 125% Attainment
              </p>
            </li>
            <li className="py-3 px-2 bg-slate-100 rounded-lg flex space-x-2 leading-tight">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>            
              <p>
                Incentivizes 130% OTE
              </p>
            </li>
            <li className="py-3 px-2 bg-slate-100 rounded-lg flex space-x-2 leading-tight">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>            
              <p>
                Top 10% Sales Performer
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className='mt-8 col-span-full'>
        {/* header */}
        <div className="flex space-x-4 items-center">
          <h2 className="text-lg text-slate-600 font-bold">Paths</h2>
          <p className="text-teal-400 font-semibold text-sm">
            <button class="btn bg-white text-teal-600 px-4 border-none hover:text-white">
              + add path
            </button>            
          </p>
        </div>
        <div className="mt-4 space-y-6">
          <Path />
        </div>
      </div>
    </div>
  )
}
