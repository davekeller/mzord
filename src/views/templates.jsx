
import Sidebar from "../components/sidebar.jsx";
import SubnavList from "../components/subnavList.jsx";
import PlanSmall from "../components/planSmall.jsx";
import PlanSmall2 from "../components/planSmall2.jsx";
import PlanSmall3 from "../components/planSmall3.jsx";


export default function Templates() {
  return (
    <div>
      <Sidebar />
      <SubnavList />

      <div className='pl-28 pr-12 mt-8 mb-24'>
        <div className="flex-between">
          <h1 className="font-bold text-2xl">Featured Compensation Plan Templates</h1>
          <select className="input w-56 text-sm text-qpSlate-500 font-semibold" id="plan-sort" name="plan-sort" type="select" >
            <option>Sort by Most Coolest</option>
            <option>Sort by Popular</option>
            <option>Sort by The Hippest</option>
          </select>
        </div>

        <div className="relative mt-8 p-12 rounded-lg bg-qpNavy text-center overflow-hidden">
          <h2 className="font-bold text-white text-2xl">
            New Modelable Comp Plans!
          </h2>
          <p className="text-qpSlate-400 text-sm">
            Click into any of the plans below to forecast quotas and earnings
          </p>
          <img src="/assets/blob_right.svg" className="absolute -right-24 -top-8 w-1/4" />
          <img src="/assets/blob_left.svg" className="absolute -left-32 -top-64 w-1/4" />
        </div>

        {/* plans list */}
        <div className="mt-12 grid grid-cols-3 gap-8">
          <PlanSmall />
          <PlanSmall2 />
          <PlanSmall3 />
          <PlanSmall2 />
          <PlanSmall3 />
          <PlanSmall />
          <PlanSmall3 />
          <PlanSmall />
          <PlanSmall2 />
        </div>

      </div>
    </div>
  )
}
