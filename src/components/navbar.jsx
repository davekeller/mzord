
export default function navAuth (props) {
  return (
    <div className='fixed w-full top-0 px-6 flex justify-between items-center bg-white shadow-sm z-50'>

      <div className="flex items-center">
        <a href="/">
          <img src="/mzord/assets/logos/blue.svg" alt="quotapath logo" />
        </a>
      
        <nav className="pl-14 flex items-center space-x-12">
          <button 
            onClick={() => props.onChangePage('templates')}
            className="py-4 font-semibold border-t-4 border-qpNavy text-qpNavy">
            Discover Comp Plans
          </button>
          <button 
            onClick={() => props.onChangePage('plan')}
            className="py-4 font-semibold text-qpSlate-400 border-t-4 border-transparent hover:text-qpWater">
              Design Your Plan
          </button>
        </nav>
      </div>
      
      <div className="flex-space">
        <div className='flex items-center space-x-8 text-right'>
        <button
            onClick={() => props.onChangePage('home')}
            className="font-semibold text-sm text-qpSlate-400 hover:text-qpWater">
              home
          </button>
          <button
            onClick={() => props.onChangePage('templates')}
            className="font-semibold text-sm text-qpSlate-400 hover:text-qpWater">
              marketplace
          </button>
          <button 
            onClick={() => props.onChangePage('planSEO')}
            className="font-semibold text-sm text-qpSlate-400 hover:text-qpWater">
              seo
          </button>
          <button 
            onClick={() => props.onChangePage('planSEO')}
            className="font-semibold text-sm text-qpSlate-400 hover:text-qpWater">
              seo2
          </button>
          <button 
            onClick={() => props.onChangePage('plan')}
            className="font-semibold text-sm text-qpSlate-400 hover:text-qpWater">
              modeler
          </button>
          <button
            onClick={() => props.onChangePage('planType')}
            className="font-semibold text-sm text-qpSlate-400 hover:text-qpWater">
              choose
          </button>
          <button 
            onClick={() => props.onChangePage('planList')}
            className="font-semibold text-sm text-qpSlate-400 hover:text-qpWater">
              planList
          </button>
        </div>
        <button className='text-white text-sm text-center p-2 rounded-full font-bold bg-qpGreen-200 hover:border-teal-500 hover:bg-teal-500 hover:text-white'>
          DK
        </button>
      </div>

    </div>
  )
}