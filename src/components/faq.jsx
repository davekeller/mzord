
export default function FAQ (props) {
  return (
    <div className="card p-6 overflow-hidden">
      <h2 className="-mx-6 px-6 -mt-6 py-4 font-semibold text-white bg-qpSlate-500">
        Frequently Asked Questions
      </h2>
      <ul className="pt-6 space-y-8">
        <li className="border-b border-qpSlate-200 pb-6">
          <h3 className="font-semibold">
            Why would I use a single rate commission?
          </h3>
          <p className="mt-1 text-xs font-normal text-qpSlate-500 leading-relaxed">
            Single rate commission plans are the simplest variable compensation plan out there. It's for that reason that around 10% of all compensation plans follow this rule. The math is simple to calculate and since reps easily understand their compensation plans, they focus on closing deals rather than wasting time thinking about how to maximize their compensation. 
          </p>
        </li>
        <li className="border-b border-qpSlate-200 pb-6">
          <h3 className="font-semibold">
            How to find commission rate:
          </h3>
          <p className="mt-1 text-xs font-normal text-qpSlate-500 leading-relaxed">
            No one got into sales because they love math… fortunately the math here is very simple. You take the variable compensation that a rep earns for hitting their target (say $50k a year) and divide that number by their target (say $500k a year). So it would be $50k/$500k which would give you .10 or 10% commission. Easy enough, right?
          </p>
        </li>
        <li className="border-b border-qpSlate-200 pb-6">
          <h3 className="font-semibold">
            Is single rate commission the right comp plan for me?
          </h3>
          <p className="mt-1 text-xs font-normal text-qpSlate-500 leading-relaxed">
          It certainly might be! If you're looking to start out with a simple comp plan that gets the job done, you're in the right place. It also allows you to add complexity to the plan via accelerators, bonuses, or SPIFs later on if you desire. 
          </p>
        </li>
        <li className="border-b border-qpSlate-200 pb-6">
          <h3 className="font-semibold">
            Should I include accelerators?
          </h3>
          <p className="mt-1 text-xs font-normal text-qpSlate-500 leading-relaxed">
            That's up to you. Accelerators are a double-edged sword. While they can reward overperformance (good) they also add complexity to your compensation plan (bad). Around 80% of compensation plans include some sort of accelerator or decelerator, so you'd be in good company. However, it's up to you if you want to add another layer to your sales commission plans. 
          </p>
        </li>
        <li className="pb-6">
          <h3 className="font-semibold">
            What if I have multiple products?
          </h3>
          <p className="mt-1 text-xs font-normal text-qpSlate-500 leading-relaxed">
            Then this specific plan isn't for you, but it might be close! If you want to offer a single rate commission for multiple products, you would simply want a plan with more than one single rate commission path. Calculating the commission rate for each of those paths is easy.Simply decide how much of a rep’s total variable compensation you want to dedicate to a product and then divide that number by how much you want your rep to sell of that product.
          </p>
        </li>

      </ul>
    </div>

  )
}