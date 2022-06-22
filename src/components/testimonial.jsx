
export default function Testimonial (props) {
  return (
    <div className="grid grid-cols-4 gap-12 text-right items-end">
      <div className="col-span-3">
        <h3 className="font-semibold text-xl leading-relaxed text-qpTwilight">
          "I use fixed commission rate for our AE comp plan for two reasons. It's easy for my reps to understand and it allows me to add in SPIFs or complexity later on if I need"
        </h3>
        <p className="mt-4 text-qpSlate-500">
          - April D., VP of Sales
        </p>
      </div>
      <img src="/mzord/assets/personas/testimonial.png" alt="avi" />

      <div className="-mt-2 col-span-full flex-center space-x-4 pt-6 border-t-2 border-white text-center font-semibold text-qpWater">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
        <p className="font-bold">
          11% of Comp Plans Follow this Plan
        </p>
      </div>
    </div>
  )
}