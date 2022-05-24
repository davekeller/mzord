
export default function sidebar (props) {
  return (
    <div className='fixed top-0 pt-12 px-6 bg-slate-800 h-screen z-0'>
      <nav className='flex flex-col mt-4 py-8 space-y-6 text-slate-600 font-semibold'>
        <button 
          onClick={() => props.onChangePage('plan')}
          className="text-sm font-semibold text-slate-500 hover:text-sky-400">
          Product
        </button>
        <button 
          onClick={() => props.onChangePage('plan')}
          className="text-sm font-semibold text-slate-500 hover:text-sky-400">
            Solutions
        </button>
        <button 
          onClick={() => props.onChangePage('create')}
          className="text-sm font-semibold text-slate-500 hover:text-sky-400">
            About
        </button>
      </nav>
    </div>
  )
}
