
import Sidebar from "../components/sidebar.jsx";
import SubnavList from "../components/subnavList.jsx";
import PlanThumb from "../components/planThumb.jsx";

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
        <div className="mt-8 space-y-8">
          <PlanThumb />
          <PlanThumb />
          <PlanThumb />
          <PlanThumb />
          <PlanThumb />
          <PlanThumb />
          <PlanThumb />
        </div>

       


      </div>
    </div>
  )
}
