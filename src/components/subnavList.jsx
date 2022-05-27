
export default function SubnavList (props) {
  return (
    <div className="pl-28 pr-6 flex-between bg-slate-500">
      <ul className="flex space-x-6 text-sm items-center font-bold text-white">
        <li className="pr-3">
          My Plans
        </li>
        <li className="p-3">
          Drafts
        </li>
        <li className="p-3 border-t-4 border-white">
          Admin
        </li>
        <li className="p-3">
          Members
        </li>

      </ul>
      
    </div>
  )
}