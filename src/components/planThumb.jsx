
export default function planThumb() {
  return (
    <div className="card px-6 pb-4 space-y-4 text-qpSlate-500 shadow shadow-qpSlate-800/5 hover:shadow-xl cursor-pointer border-4 border-white hover:border-qpBlue-100">
    <div className="pt-4 flex-between pb-4 bg-white rounded-t-lg border-b-2 border-qpSlate-100">
      <div className="flex items-center space-x-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-qpWater" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
        </svg>              
        <ul className="flex items-center space-x-12 font-semibold">
          <li className="text-qpDark font-bold">
            AE 2022 Plan
          </li>
          <li>
            3 assignees
          </li>
          <li>
            Chainu Kunche
          </li>
        </ul>
      </div>
      <ul className="flex items-center space-x-24 font-semibold text-right">
        <li>
          <a href="" className="text-qpWater">
            Request
          </a>
        </li>
        <li>
          Doc
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>              
        </li>
      </ul>
    </div>

    <ul className="flex space-x-12 items-center text-qpDark font-semibold text-sm">
      <li className="flex items-center space-x-4 w-72">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-qpSky" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>                  
        <h2 className="font-bold text-qpDark">
          AE Monthly Quota Attainment
        </h2>
      </li>
      <li>
        <span className="pr-2 font-medium text-qpSlate-500">Quota:</span>
        $70,000 ARR
      </li>
      <li>$58 Earnings Rule</li>
      <li>Monthly</li>
      <li className="flex items-center space-x-2">
      <div className="border-orange-600 border-2 rounded-full p-2"></div>
        <p>Hubspot</p>
      </li>
    </ul>
    <ul className="flex space-x-12 items-center text-qpDark font-semibold text-sm">
      <li className="flex items-center space-x-2 w-72">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-qpSky" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>                  
        <h2 className="font-bold text-qpDark">
          AE Monthly Bonus
        </h2>
      </li>
      <li>
        <span className="pr-2 font-medium text-qpSlate-500">Quota:</span>
        $70,000 ARR
      </li>
      <li>$58 Earnings Rule</li>
      <li>Monthly</li>
      <li className="flex items-center space-x-2">
        <div className="border-blue-600 border-2 rounded-full p-2"></div>
        <p>Salesforce</p>
      </li>
    </ul>
  </div>
)
}