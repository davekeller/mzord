
export default function hero() {
  return (
    <div className="relative p-28 bg-gradient-to-br from-slate-900 to-blue-900 text-center overflow-hidden">
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold text-white">
          What's Your <span className="text-teal-300">CareerPath</span>?
        </h1>
        <p className="mt-4 text-white opacity-70 w-1/2 m-auto leading-relaxed">
          The best sales organizations use QuotaPath to keep commissions accurate and on-time.
          <br/>
          Find your next sales job at a company that pritoritizes commission transparency.
        </p>
      </div>

      <img src="/assets/blob_left.svg" className="absolute -left-14 -top-40 w-1/4" />
      <img src="/assets/blob_right.svg" className="absolute -right-8 -top-2 w-1/4" />
    </div>
  )
}