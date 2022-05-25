
export default function Cta() {
  return (
    <div className="flex-between">
      <div className="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>        
        <div>
          <h2 className="font-bold text-slate-700">Quarterly Incentivizer</h2>
          <p className="text-xs text-slate-500">This is a great plan for you.</p>
        </div>
      </div>
      <div>
        <button class="btn rounded-lg">Use This Plan →</button>
      </div>
    </div>
  )
}
