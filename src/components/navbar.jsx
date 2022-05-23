
export default function navbar (props) {
  return (
    <div className='fixed w-full top-0 px-6 py-4 flex justify-between items-center bg-gradient-to-l from-blue-900 to-slate-800 z-20'>

      <div className="flex space-x-2 items-center text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
        
        <p className="font-bold text-lg">
          CareerPath
        </p>
        <p className="text-gray-400 text-sm">
          by QuotaPath
        </p>
      </div>

      <div className='flex items-center space-x-6 text-blue-400 text-sm text-right'>
        <button 
          onClick={() => props.onChangePage('list')}
          className="font-semibold">
          List
        </button>
        <button 
          onClick={() => props.onChangePage('details')}
          className="font-semibold">
            Details
        </button>
        <button 
          onClick={() => props.onChangePage('create')}
          className="font-semibold">
            Create
        </button>
        
        <button className='text-white px-4 py-1.5 rounded font-bold bg-none hover:bg-sky-700'>
          log in
        </button>
        <button className='text-white px-6 py-1.5 rounded font-bold border-2 border-white border-opacity-20 bg-none hover:bg-teal-200 hover:text-blue-800'>
          Post a Job
        </button>
      </div>
    </div>
  )
}