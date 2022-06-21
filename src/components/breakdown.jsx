
export default function Breakdown (props) {
  return (
    <div className="relative card bg-white overflow-hidden rounded-md">
      <p className="px-6 py-4 text-white text-sm bg-qpTwilight">
        Compensation Breakdown
      </p>
      <img src="/mzord/assets/graph.png" alt="graph" />      
      <ul className="grid grid-cols-3 border-t-2 border-qpSlate-300">
        <li className="px-6 py-4 border-r-2 border-qpSlate-200">
          <h2 className="text-xs font-medium text-qpSlate-400">Plan Name:</h2>
          <p className="font-semibold">Single Rate</p>
        </li>
        <li className="px-6 py-4 border-r-2 border-qpSlate-200">
          <h2 className="text-xs font-semibold text-qpSlate-500">Commission Rate:</h2>
          <p className="font-semibold">10%</p>
        </li>
        <li className="px-6 py-4">
          <h2 className="text-xs font-medium text-qpSlate-400">Quota:</h2>
          <div>
            <p className="font-semibold">$33,000
              <span className="text-qpSlate-500 text-sm pl-1">/month</span>
            </p>
          </div>
        </li>
      </ul>

    </div>
  )
}