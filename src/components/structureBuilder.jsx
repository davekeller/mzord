// import Structure from './structure.jsx';
import Path from './path.jsx';

export default function structureBuilder() {
  return (
    <div>
      <div className='rounded-t-md card'>
        <h1 className="px-6 pt-4 text-sm font-semibold bg-white rounded-t-md border-t-4 border-qpSlate-300 overflow-hidden">
          Plan Forecast
        </h1>
        <div className="px-6 pt-2 pb-8">
          <img className='mt-2 border-2 border-qpSlate-300 rounded-md col-span-3' src="/assets/graph.png" />
          <p className='mt-3 text-qpSlate-500 text-xs italic'>
            Drag the slider to see your earnings per attainment.
          </p>
        </div>
      </div>

      <div className='mt-8 col-span-full'>
        {/* header */}
        <div className="flex space-x-4 items-center">
          <h2 className="text-lg text-qpSlate-600 font-bold">Paths</h2>
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
