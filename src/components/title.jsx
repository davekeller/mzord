
export default function Title() {
  return (
      <div>
        <div className="flex items-center space-x-4">
          <div className="p-2 rounded-full bg-qpSky">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>        
          </div>
          <div>
            <h1 className="text-2xl font-bold">Account Executive Saasy New Biz Plan</h1>
            <p className="text-xs text-qpSlate-500">This is a description line about an AE plan that is focused on New Saas Accounts.</p>
          </div>
        </div>
      </div>
  )
}
