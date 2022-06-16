
export default function Examples (props) {
  return (
    <div className="relative card bg-white overflow-hidden rounded-lg">
      <h1 className="px-6 py-4 text-qpSlate-200 text-sm font-semibold bg-qpTwilight">
        Plan Breakdown
      </h1>
      <ul className="px-6 py-4 grid grid-cols-2 grid-rows-2 gap-4">
        <li>
          <h2 className="text-sm text-qpSlate-400">Plan Name:</h2>
          <p>Single Rate Commission</p>
        </li>
        <li>
          <h2 className="text-qpSlate-400">Quota:</h2>
          <p>$33,000 per month</p>
        </li>
        <li>
          <h2 className="text-sm text-qpSlate-400">Commission Rate:</h2>
          <p>10% Commission on all deals</p>
        </li>
      </ul>

    </div>
  )
}