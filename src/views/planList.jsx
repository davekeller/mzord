
import Sidebar from "../components/sidebar.jsx";
import SubnavList from "../components/subnavList.jsx";

export default function PlanList() {
  return (
    <div>
      <Sidebar />
      <SubnavList />

      <div className='pl-28 pr-12 pb-20 mt-8'>
        <div className="flex-between">
          <h1 className="font-bold text-2xl">Admin 57 Plans</h1>
          <select className="input w-48 text-sm text-qpSlate-500 font-semibold" id="plan-sort" name="plan-sort" type="select" >
            <option>Sort by Most Recent</option>
            <option>Sort by Most Coolest</option>
            <option>Sort by Hippest</option>
          </select>
        </div> 

        {/* plans header */}
        <div className="mt-6 space-y-4">
          <div className="px-6 py-3 bg-qpSlate-400 text-white text-xs rounded-md flex-between">
            <ul className="flex items-center space-x-24 font-bold">
              <li className="w-6">
                Status
              </li>
              <li>
                Plan Name
              </li>
              <li>
                Assigned Members
              </li>
              <li>
                Creator
              </li>
            </ul>
            <ul className="flex items-center space-x-24 font-semibold text-right">
              <li>
                <a href="/">
                  Verified
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
        </div>

        {/* plans list */}
        <div className="mt-8">
          <div className="card px-6 py-4 space-y-4 text-qpSlate-500">
            <div className="flex-between border-b-2 border-qpSlate-100 pb-4">
              <ul className="flex items-center space-x-24 font-semibold">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-qpSky" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>              
                </li>
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

            <h2 className="font-semibold text-xs uppercase text-qpSlate-400">Plan Paths</h2>
            <ul className="flex space-x-12 items-center text-qpDark font-semibold text-sm">
              <li className="flex items-center space-x-4">
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
              <li className="flex items-center space-x-4">
                <div className="bg-orange-600 rounded-full p-3"></div>
                <p>Hubspot</p>
              </li>
            </ul>
            <ul className="flex space-x-12 items-center text-qpDark font-semibold text-sm">
              <li className="flex items-center space-x-4">
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
              <li className="flex items-center space-x-4">
                <div className="bg-orange-600 rounded-full p-3"></div>
                <p>Hubspot</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 space-y-4">
         
          {/* plans list */}
          <div className="card px-6 py-4 space-y-4 text-qpSlate-500">
            <div className="flex-between border-b-2 border-qpSlate-100 pb-4">
              <ul className="flex items-center space-x-24 font-semibold">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-qpSky" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>              
                </li>
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

            <h2 className="font-semibold text-xs uppercase text-qpSlate-400">Plan Paths</h2>
            <ul className="flex space-x-12 items-center text-qpDark font-semibold text-sm">
              <li className="flex items-center space-x-4">
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
              <li className="flex items-center space-x-4">
                <div className="bg-orange-600 rounded-full p-3"></div>
                <p>Hubspot</p>
              </li>
            </ul>
            <ul className="flex space-x-12 items-center text-qpDark font-semibold text-sm">
              <li className="flex items-center space-x-4">
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
              <li className="flex items-center space-x-4">
                <div className="bg-orange-600 rounded-full p-3"></div>
                <p>Hubspot</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 space-y-4">
         
          {/* plans list */}
          <div className="card px-6 py-4 space-y-4 text-qpSlate-500">
            <div className="flex-between border-b-2 border-qpSlate-100 pb-4">
              <ul className="flex items-center space-x-24 font-semibold">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-qpSky" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>              
                </li>
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

            <h2 className="font-semibold text-xs uppercase text-qpSlate-400">Plan Paths</h2>
            <ul className="flex space-x-12 items-center text-qpDark font-semibold text-sm">
              <li className="flex items-center space-x-4">
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
              <li className="flex items-center space-x-4">
                <div className="bg-orange-600 rounded-full p-3"></div>
                <p>Hubspot</p>
              </li>
            </ul>
            <ul className="flex space-x-12 items-center text-qpDark font-semibold text-sm">
              <li className="flex items-center space-x-4">
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
              <li className="flex items-center space-x-4">
                <div className="bg-orange-600 rounded-full p-3"></div>
                <p>Hubspot</p>
              </li>
            </ul>
          </div>
        </div>


      </div>
    </div>
  )
}
