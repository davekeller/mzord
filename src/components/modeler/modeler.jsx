import ModelOTE from "./modelOTE.jsx";
import ModelRevenue from "./modelRevenue.jsx";
import ModelTiming from "./modelTiming.jsx";

export default function Modeler (props) {
  return (
    <div className='bg-white card rounded-md overflow-hidden'>
      <div className="px-6 py-4 bg-qpSlate-600">
        <h1 className="text-qpSlate-200 text-sm font-semibold">
          Plan Modeling
        </h1>
      </div>

      <form className="px-6">
        <ModelOTE />
        <ModelRevenue />
        <ModelTiming />
      </form>
    </div>
  )
}