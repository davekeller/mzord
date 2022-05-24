
export default function navbar (props) {
  return (
    <div className='fixed w-full top-0 px-6 flex justify-between items-center bg-white shadow-sm z-20'>

      <div className="flex items-center">
        <svg width="26" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M15.518 14.03a2.576 2.576 0 1 1-5.153 0 2.576 2.576 0 0 1 5.153 0" fill="#00BBF0"/><path fillRule="evenodd" clipRule="evenodd" d="m22.791 27.985-5.75-1.805-.106.035a12.78 12.78 0 0 1-3.98.632C5.892 26.847.167 21.122.167 14.06c0-3.412 1.336-6.512 3.514-8.805l3.11 3.689a8.01 8.01 0 0 0 10.167 12.056l3.108 3.69-.022.015.017-.006 2.73 3.287ZM3.092.076l5.75 1.806a12.776 12.776 0 0 1 4.087-.667c7.062 0 12.787 5.725 12.787 12.788 0 3.412-1.336 6.512-3.514 8.805l-3.11-3.689A8.01 8.01 0 0 0 8.925 7.063l-3.107-3.69.021-.015-.017.006L3.092.076Z" fill="currentColor"/>
        </svg>
      
        <nav className="pl-24 flex items-center space-x-10">
          <button 
            onClick={() => props.onChangePage('planList')}
            className="py-4 font-bold text-gray-400 hover:text-slate-700">
            Discover Comp Plans
          </button>
          <button 
            onClick={() => props.onChangePage('plan')}
            className="py-4 font-bold text-slate-800 hover:text-slate-700 border-t-4 border-slate-800">
              Design Your Plan
          </button>
        </nav>
      </div>
      
      <div className="flex-space">
        <div className='flex items-center space-x-8 text-right'>
          <button 
            onClick={() => props.onChangePage('plan')}
            className="font-semibold text-sm text-sky-500 hover:text-slate-700">
            Product
          </button>
          <button 
            onClick={() => props.onChangePage('plan')}
            className="font-semibold text-sm text-sky-500 hover:text-slate-700">
              Solutions
          </button>
          <button 
            onClick={() => props.onChangePage('create')}
            className="font-semibold text-sm text-sky-500 hover:text-slate-700">
              About
          </button>
          <button 
            onClick={() => props.onChangePage('create')}
            className="font-semibold text-sm text-sky-500 hover:text-slate-700">
              Careers
          </button>
        </div>
        <div className='flex items-center space-x-4 text-sky-500 text-right'>
          <button className='text-sky-700 px-4 py-1 rounded font-bold bg-none hover:bg-teal-500 hover:text-white'>
            log in
          </button>
          <button className='text-sky-700 px-6 py-1 rounded font-bold border-2 border-sky-300 hover:border-teal-500 hover:bg-teal-500 hover:text-white'>
            Sign Up
          </button>
        </div>
      </div>

    </div>
  )
}