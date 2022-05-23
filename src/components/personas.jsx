
export default function personas() {
  return (
    <div className="sticky top-0 px-6 py-4 bg-white shadow z-100">
      <div className='flex justify-around items-center text-blue-300 overflow-x-auto'>
        <button className='px-6 py-2 rounded hover:bg-gray-100 flex-center space-y-1 text-sky-600'>
          <img src="/assets/personas/persona1.png" alt="persona" />
          <p className="text-sm font-semibold">Accounting & Finance</p>
        </button>

        <button className='px-6 py-2 rounded hover:bg-gray-100 flex-center space-y-1 text-yellow-500'>
          <img src="/assets/personas/persona2.png" alt="persona" />
          <p className="text-sm font-semibold">Revenue Operations</p>
        </button>
        
        <button className='px-6 py-2 rounded hover:bg-gray-100 flex-center space-y-1 text-emerald-400'>
          <img src="/assets/personas/persona3.png" alt="persona" />
          <p className="text-sm font-semibold">Sales Leaders</p>
        </button>

        <button className='px-6 py-2 rounded hover:bg-gray-100 flex-center space-y-1 text-sky-400'>
          <img src="/assets/personas/persona4.png" alt="persona" />
          <p className="text-sm font-semibold">Sales Reps</p>
        </button>

        <button className='px-6 py-2 rounded hover:bg-gray-100 flex-center space-y-1 text-orange-400'>
          <img src="/assets/personas/persona1.png" alt="persona" />
          <p className="text-sm font-semibold">Financial Software Sales</p>
        </button>
      </div>
    </div>
  )
}