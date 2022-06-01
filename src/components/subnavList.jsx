
export default function SubnavList (props) {
  return (
    <div className="pl-28 pr-6 flex-between bg-white shadow-sm">
      <ul className="flex space-x-6 text-sm items-center font-bold text-qpSlate-400">
        <li className="pr-3">
          My Plans
        </li>
        <li className="p-3">
          Drafts
        </li>
        <li className="p-3 text-qpNavy border-t-2 border-qpNavy">
          Admin
        </li>
        <li className="p-3">
          Members
        </li>

      </ul>
      
    </div>
  )
}