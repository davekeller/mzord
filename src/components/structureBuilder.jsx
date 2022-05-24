import Structure from './structure.jsx';
import Path from './path.jsx';

export default function structureBuilder() {
  return (
    <div>
      <div className="grid grid-cols-4 gap-6 p-6 pb-8 card">
        <div className='col-span-3'>
          <h1 className='text-sm font-bold text-teal-700 uppercase'>
            Plan Forecast
          </h1>
          <p className='p text-slate-600 text-xs'>
            This is the dopest shit you'll prob see this week ngl
          </p>
          <img className='mt-6 border-2 border-slate-300 rounded-lg col-span-3' src="/assets/graph.png" />
        </div>
        <div className="col-span-1">
          <div>
            <h1 className='text-sm font-bold text-teal-700 uppercase'>
              Expert Advice
            </h1>
            <p className='p text-slate-600 text-xs'>listen to the experts</p>
          </div>
          <ul className="mt-6 pt-6 border-t-2 space-y-4 border-teal-300 font-semibold text-sm font-semibold">
            <li className="flex items-center space-x-2 leading-tight">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>            
              <p>
                Incentivizes 125% Attainment
              </p>
            </li>
            <li className="flex items-center space-x-2 leading-tight">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>            
              <p>
                Incentivizes 130% OTE
              </p>
            </li>
            <li className="flex items-center space-x-2 leading-tight">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>            
              <p>
                Top 10% Sales Performer
              </p>
            </li>
            <li className="flex items-center space-x-2 leading-tight">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>            
              <p className='text-lg font-bold pt'>
                Incentivizes 125% Attainment
              </p>
            </li>
            <li className="flex items-center space-x-2 leading-tight">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>            
              <p>
                Incentivizes 130% OTE
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className='mt-8 col-span-full'>
        {/* header */}
        <div className="flex space-x-4 items-center">
          <h2 className="text-xl font-bold">Paths</h2>
          <p className="text-teal-400 font-semibold text-sm">
            <a>+ add path</a>
          </p>
        </div>
        <div className="mt-4 space-y-6">
          <Path />
        </div>
      </div>
    </div>
  )
}