// import Structure from './structure.jsx';
import Path from './path.jsx';

export default function structureBuilder() {
  return (
    <div>
      <div className='px-6 pb-8 card overflow-hidden'>
        <p className="-mx-6 px-6 pt-4 pb-3 bg-qpSlate-500 text-white text-sm font-semibold">
          Plan Forecast
          <span className='pl-2 text-qpSlate-200 text-xs italic'>
            Drag the slider to see your earnings per attainment.
          </span>
        </p>
        <div className="mt-8">
          <img className='border-2 border-qpSlate-300 rounded-md col-span-3' src="/assets/graph.png" />
        </div>
      </div>

      <div className='mt-8 space-y-2'>
        <h2 className='font-bold text-lg'>Plan Details</h2>
        <div className='grid grid-cols-2 gap-8 text-sm text-qpSlate-500'>
          <p>
            Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further
          </p>
          <p>
            the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity, transparency and empowerment.
          </p>
        </div>
      </div>

      <div className='mt-12 col-span-full'>
        {/* header */}
        <div className="flex space-x-4 items-center">
          <h2 className="text-lg font-bold">Paths to Quota</h2>
        </div>
        <div className="mt-4 space-y-6">
          <Path />
        </div>
      </div>
    </div>
  )
}
