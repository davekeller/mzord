
export default function Customization (props) {
  return (
    <div className="card overflow-hidden">
      <p className="px-6 py-4 text-white text-sm bg-qpSlate-500">
      How to Customize Your Plan
      </p>

      <div className="p-6 prose">
        <p className="text-sm">
          As with most compensation plans, the two major components that will vary across sales teams are: 
        </p>
        <ol className="text-sm leading-loose space-y-6">
          <li>
            <b>Quota:</b> First, you need to decide the quota period. This is the frequency at which a rep is held to that sales quota. The most common quota periods are: quarterly (45% of plans), annual (25% of plans), and monthly (25% of plans) with 5% of plans having other frequencies (weekly, bi-weekly, semi-annually, etc.). Once you decide that, you will need to determine a quota that is both low enough to be attainable and high enough to be valuable for your business. One way to do this is by using our Quota:OTE Ratio Calculator. 
          </li>
          <li>
            <b>Commission Rate:</b> Next, you'll set your commission rate. This plan features a single rate commission plan which is very simple to calculate for yourself. You would simply take the total variable compensation the rep is set to earn if they hit their target (for example, $60,000/year) and divide that number by their annualized quota/target from above (for example, $720,000/year). Given those two examples, that would be $60,000/$720,000 = .0833 or 8.33% commission. 
          </li>
        </ol>
      </div>

    </div>
  )
}