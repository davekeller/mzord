import SubnavList from "../components/subnavList.jsx";
import PlanSmall from "../components/planSmall.jsx";
import PlanSmall2 from "../components/planSmall2.jsx";
import PlanSmall3 from "../components/planSmall3.jsx";


export default function Templates() {
  return (
    <div>
      <SubnavList />

      
      <div className="relative p-16 bg-gradient-to-br from-qpDark to-qpTwilight overflow-hidden">
        <div className="relative z-10 mx-auto">
          <h1 className="font-bold text-white text-3xl">
            Discover Comp Plans
          </h1>
          <div className="mt-4 grid grid-cols-2 gap-12">
            <div>
              <p className="mt-2 text-white opacity-70 text-xs leading-relaxed">
                Click into any of the plans below to forecast quotas and earnings. Still more glorious dawn awaits extraordinary claims require extraordinary evidence cosmic ocean? Courage of our questions a mote of dust suspended in a sunbeam vastness is bearable only through love the sky calls to us hearts of the stars Sea of Tranquility and billions upon billions.
              </p>
              <p className="mt-2 text-white opacity-70 text-xs leading-relaxed">
                Click into any of the plans below to forecast quotas and earnings. Still more glorious dawn awaits extraordinary claims require extraordinary evidence cosmic ocean? Courage of our questions a mote of dust suspended in a sunbeam vastness is bearable only through love the sky calls to us hearts of the stars Sea of Tranquility and billions upon billions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex-center flex-col space-y-4 p-6 border-4 border-qpTwilight rounded-lg bg-qpTwilight">
                <img src="/assets/icons/target.svg" className="h-16 mx-auto" alt="doc" />
                <h2 className="text-white font-bold">Free Quota:OTE Ratio Calculator</h2>
              </div>

            </div>
          </div>
        </div>
        <img src="/assets/blob_right.svg" className="absolute -right-24 -top-8 w-1/4 z-0" />
        <img src="/assets/blob_left.svg" className="absolute -left-64 -bottom-80 w-1/4 z-0" />
      </div>

      <div className='px-12 mt-12 mb-24'>

        {/* plans list */}
        <div className="mt-12 grid grid-cols-2 gap-8">
          <PlanSmall />
          <PlanSmall2 />
          <PlanSmall3 />
          <PlanSmall2 />
          <PlanSmall3 />
          <PlanSmall />
        </div>

        <div className="flex items-center justify-evenly relative mt-16 p-12 rounded-lg bg-gradient-to-tr from-qpPurple-200 to-qpTwilight text-center overflow-hidden">
          <div>
            <h2 className="font-bold text-white text-2xl">
              Find Expert Sales Advice Here
            </h2>
            <p className="text-white opacity-70 text-sm">
              Here's link to a recent
            </p>
          </div>
        </div>
          
        {/* plans list */}
        <div className="mt-12 grid grid-cols-3 gap-8">
          <PlanSmall2 />
          <PlanSmall />
          <PlanSmall3 />
          <PlanSmall />
          <PlanSmall2 />
          <PlanSmall3 />
          <PlanSmall />
          <PlanSmall3 />
          <PlanSmall2 />
        </div>

      </div>
    </div>
  )
}
