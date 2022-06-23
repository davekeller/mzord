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
          <div className="grid grid-cols-2 gap-12">
            <div>
              <div className="flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>                
                <h1 className="font-bold text-white text-3xl">
                  Explore Compensation Plans
                </h1>
              </div>
              <p className="mt-6 text-white opacity-70 text-xs leading-relaxed">
                Click into any of the plans below to forecast quotas and earnings. Still more glorious dawn awaits extraordinary claims require extraordinary evidence cosmic ocean? Courage of our questions a mote of dust suspended in a sunbeam vastness is bearable only through love the sky calls to us hearts of the stars Sea of Tranquility and billions upon billions. of the stars laws of physics concept of the number one Euclid billions upon billions encyclopaedia galactica? White dwarf Orion's sword invent.
              </p>
              <p className="mt-6 text-white opacity-70 text-xs leading-relaxed">
                Click into any of the plans below to forecast quotas and earnings. Still more glorious dawn awaits extraordinary claims require extraordinary evidence cosmic ocean? Courage of our questions a mote of dust suspended in a sunbeam vastness is bearable only through love the sky calls to us hearts of the stars Sea of Tranquility and billions upon billions.
              </p>
            </div>

            {/* calculator callouts */}
            <div className="grid grid-cols-2 gap-12">
              <div className="rounded-lg shadow-lg overflow-hidden bg-qpNavy">
                <img src="/assets/imgs/calculator.png" className="w-full object-cover" alt="doc" />
                <div className="p-6">
                  <h2 className="text-white font-bold">Free Quota:OTE Ratio Calculator &rarr;</h2>
                  <p className="mt-2 text-white opacity-70 text-xs leading-relaxed">
                    Click into any of the plans below to forecast...
                  </p>
                </div>
              </div>
              <div className="rounded-lg shadow-lg overflow-hidden bg-qpNavy">
                <img src="/assets/imgs/guide.png" className="w-full object-cover" alt="doc" />
                <div className="p-6">
                  <h2 className="text-white font-bold">Free Quota:OTE Ratio Calculator &rarr;</h2>
                  <p className="mt-2 text-white opacity-70 text-xs leading-relaxed">
                  Click into any of the plans below to for...
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
        <img src="/assets/blob_right.svg" className="absolute -right-24 -top-8 w-1/4 z-0" />
        <img src="/assets/blob_left.svg" className="absolute -left-56 top-40 w-1/4 z-0" />
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
