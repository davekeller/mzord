
export default function Breakdown (props) {
  return (
    <div className="relative card bg-white overflow-hidden rounded-md">
      <p className="px-6 py-4 text-white text-sm bg-qpTwilight">
        Compensation Breakdown
      </p>
      <ul className="grid grid-cols-2 grid-rows-2">
        <li className="px-6 py-4 border-r-2 border-b-2 border-qpSlate-200">
          <h2 className="text-xs font-medium text-qpSlate-400">Plan Name:</h2>
          <p className="font-semibold">Single Rate Commission</p>
        </li>
        <li className="px-6 pt-4 border-qpSlate-200">
          <h2 className="text-xs font-medium text-qpSlate-400">Quota:</h2>
          <div>
            <p className="font-semibold text-2xl">$33,000
              <span className="text-qpSlate-500 text-sm pl-2">per month</span>
            </p>
          </div>
        </li>
        <li className="px-6 py-4 border-r-2 border-qpSlate-200">
          <h2 className="text-xs font-semibold text-qpSlate-500">Commission Rate:</h2>
          <p className="font-semibold">10% Commission on all deals</p>
        </li>
      </ul>

    </div>
  )
}