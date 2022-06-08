
export default function SubnavList (props) {
  return (
    <div className="pl-24 pr-6 bg-white shadow-sm">
      <ul className="flex space-x-6 text-sm items-center font-semibold text-qpSlate-400">
        <li className="text-qpNavy">
          <a className="p-4 text-qpNavy border-t-2 border-qpNavy" href="/">
            Featured Plans
          </a>
        </li>
        <li className="p-4">
          Sales Rep Plans
        </li>
        <li className="p-4">
          SDR Plans
        </li>
        <li className="p-4">
          Sales Leader Plans
        </li>
        <li className="p-4">
          AM/CS Plans
        </li>
      </ul>
      
    </div>
  )
}