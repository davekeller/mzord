
export default function Testimonial (props) {
  return (
    <div className="grid grid-cols-4 gap-12 text-right">
      <div className="col-span-3">
        <h3 className="font-semibold text-xl leading-relaxed text-qpTwilight">
          "I use fixed commission rate for our AE comp plan for two reasons. It's easy for my reps to understand and it allows me to add in SPIFs or complexity later on if I need"
        </h3>
        <p className="mt-4 text-qpSlate-500">
          - April D., VP of Sales
        </p>
      </div>
      <img className="self" src="/mzord/assets/personas/testimonial.png" alt="avi" />
    </div>
  )
}