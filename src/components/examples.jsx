
export default function Examples (props) {
  return (
    <div className="relative bg-gradient-to-b from-qpDark to-qpTwilight overflow-hidden rounded-lg">
      <div className="relative text-white">
        <h2 className="px-6 py-4 font-semibold text-white text-sm bg-qpTwilight">
          Plan Examples
        </h2>
        <div className="p-6 text-sm">
          <ul className="space-y-6">
            <li className="flex-space">
              <img className="rounded-full h-12" src="/assets/personas/persona1.png" alt="person" />
              <p>
                An <b>Account Executive</b> has a monthly quota of $33,000 ARR and earns a 10% commission of every deal they close.          
              </p>
            </li>
            <li className="flex-space">
              <img className="rounded-full h-12" src="/assets/personas/persona2.png" alt="person" />
              <p>
                An <b>IT Sales Rep</b> has a hardware quota of $100,000 of revenue a quarter and earns 6% of every deal they close.
              </p>
            </li>
            <li className="flex-space">
              <img className="rounded-full h-12" src="/assets/personas/persona3.png" alt="person" />
              <p>
              An <b>Insurance Rep</b> has a resale quota of $20,000 of health insurance plans per month and earns 15% of the premium of every plan sold.          
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>

  )
}