
export default function navbar (props) {
  return (
    <div className='fixed w-full top-0 px-6 py-3 flex justify-between items-center bg-white shadow-sm z-20'>

      <div className="flex items-center space-x-10">
        <svg width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M16.518 14.03a2.576 2.576 0 1 1-5.153 0 2.576 2.576 0 0 1 5.153 0" fill="#00BBF0"/><path fillRule="evenodd" clipRule="evenodd" d="m23.791 27.985-5.75-1.805-.106.035a12.78 12.78 0 0 1-3.98.632c-7.063 0-12.788-5.725-12.788-12.788 0-3.412 1.336-6.512 3.514-8.805l3.11 3.689a8.01 8.01 0 0 0 10.167 12.056l3.108 3.69-.022.015.017-.006 2.73 3.287ZM4.092.076l5.75 1.806a12.776 12.776 0 0 1 4.087-.667c7.062 0 12.787 5.725 12.787 12.788 0 3.412-1.336 6.512-3.514 8.805l-3.11-3.689A8.01 8.01 0 0 0 9.925 7.063l-3.107-3.69.021-.015-.017.006L4.092.076Z" fill="#00204A"/>
        </svg>            
        <nav className="flex items-center space-x-10">
          <button 
            onClick={() => props.onChangePage('list')}
            className="font-bold text-gray-400 hover:text-slate-700">
            Discover Comp Plans
          </button>
          <button 
            onClick={() => props.onChangePage('details')}
            className="font-bold text-gray-400 hover:text-slate-700">
              Design Your Plan
          </button>
        </nav>
      </div>
      
      <div className="flex-space">
        <div className='flex items-center space-x-8 text-right font-semibold'>
          <button 
            onClick={() => props.onChangePage('list')}
            className="text-sky-500 hover:text-slate-700">
            Product
          </button>
          <button 
            onClick={() => props.onChangePage('details')}
            className="text-sky-500 hover:text-slate-700">
              Solutions
          </button>
          <button 
            onClick={() => props.onChangePage('create')}
            className="text-sky-500 hover:text-slate-700">
              About
          </button>
          <button 
            onClick={() => props.onChangePage('create')}
            className="text-sky-500 hover:text-slate-700">
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