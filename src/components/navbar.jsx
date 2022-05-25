
export default function Navbar (props) {
  return (
    <div className='fixed w-full top-0 px-6 flex justify-between items-center bg-white shadow-sm z-20'>

      <div className="flex items-center">
        <a href="/" className="px-2">
          <svg width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M15.338 13.029a2.392 2.392 0 1 1-4.785 0 2.392 2.392 0 0 1 4.785 0" fill="#00BBF0"/>
            <path fillRule="evenodd" clipRule="evenodd" d="m22.092 25.986-5.339-1.676-.099.033c-1.163.38-2.405.586-3.696.586-6.558 0-11.875-5.316-11.875-11.874 0-3.169 1.241-6.047 3.263-8.177l2.889 3.426a7.438 7.438 0 0 0 9.441 11.194l2.885 3.428-.02.013.015-.006 2.536 3.053ZM3.8.071l5.338 1.676a11.864 11.864 0 0 1 3.795-.62c6.558 0 11.875 5.317 11.875 11.876 0 3.168-1.24 6.047-3.263 8.176l-2.888-3.425A7.438 7.438 0 0 0 9.216 6.559L6.33 3.131l.02-.013-.016.006L3.8.07Z" fill="#00204A"/>
          </svg>
        </a>
      
        <nav className="pl-16 flex items-center space-x-10">
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
          <button className='text-sky-700 px-4 py-1 rounded-md font-bold border-2 border-sky-300 hover:border-teal-500 hover:bg-teal-500 hover:text-white'>
            Sign Up
          </button>
        </div>
      </div>

    </div>
  )
}