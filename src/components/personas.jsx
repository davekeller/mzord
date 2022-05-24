
export default function personas() {
  return (
    <div className="sticky top-0 px-6 py-4 bg-white shadow z-100">
      <div className='flex justify-evenly items-center text-blue-300 overflow-x-auto text-center'>
        <button className='w-80 px-6 py-2 rounded flex-center space-y-2 text-sky-600'>
          <img src="/assets/personas/persona1.png" alt="persona" />
          <p className="text-sm font-semibold">Accounting & Finance</p>
          <p className="text-gray-500 text-xs">
            ASC 606 compliance and a clear record make payouts a breeze at the end of the period.
          </p>
        </button>

        <button className='w-80 px-6 py-2 flex-center space-y-2 text-yellow-500'>
          <img src="/assets/personas/persona2.png" alt="persona" />
          <p className="text-sm font-semibold">Revenue Operations</p>
          <p className="text-gray-500 text-xs">
            Integrate with the tools you use, and rest assured that data is accurate and consistent.
          </p>
        </button>
        
        <button className='w-80 px-6 py-2 flex-center space-y-2 text-emerald-400'>
          <img src="/assets/personas/persona3.png" alt="persona" />
          <p className="text-sm font-semibold">Sales Leaders</p>
          <p className="text-gray-500 text-xs">
            With performance insights, they have the tools to coach their teams.
          </p>
        </button>

        <button className='w-80 px-6 py-2 flex-center space-y-2 text-sky-400'>
          <img src="/assets/personas/persona4.png" alt="persona" />
          <p className="text-sm font-semibold">Sales Reps</p>
          <p className="text-gray-500 text-xs">
            Increased visibility into commissions improves motivation, trust, and performance.
          </p>
        </button>
      </div>
    </div>
  )
}