
export default function SubnavList (props) {
  return (
    <div className=" mt-1 pl-24 pr-6 bg-white shadow-sm">
      <ul className="flex space-x-6 text-sm items-center font-semibold text-qpSlate-400">
        <li className="p-4 text-qpNavy">
          <a className="text-qpNavy" href="/">
            Modelable Plans
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