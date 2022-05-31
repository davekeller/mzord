
import Sidebar from "../components/sidebar.jsx";
import SubnavList from "../components/subnavList.jsx";

export default function PlanList() {
  return (
    <div>
      <Sidebar />
      <SubnavList />

      <div className='pl-28 pr-12 mt-12 '>
        <div className="">
          <h1 className="font-bold text-2xl">57 Plans</h1>
          <select className="" id="plan-sort" name="plan-sort" type="select" />
        </div>    
    


      </div>
      

    </div>
  )
}
