import ModelOTE from "./modelOTE.jsx";
import ModelRevenue from "./modelRevenue.jsx";
import ModelTiming from "./modelTiming.jsx";

export default function Modeler (props) {
  return (
    <div className='bg-white card rounded-md overflow-hidden'>

      <h1 className="px-6 pt-4 pb-3 text-qpSlate-200 text-sm font-semibold bg-qpSlate-600">
        Plan Modeling
      </h1>

      <form className="-mx-6 px-6 space-y-4">

        <ModelOTE />
        <ModelRevenue />
        <ModelTiming />

      </form>
    </div>
  )
}