
export default function navAuth (props) {
  return (
    <div className='fixed w-full top-0 px-6 flex justify-between items-center bg-qpNavy shadow-sm z-50'>

      <div className="flex items-center">
        <a href="/">
          <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.237 18.04a3.312 3.312 0 1 1-6.624 0 3.312 3.312 0 0 1 6.624 0" fill="#00BBF0"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="m30.588 35.981-7.391-2.32-.138.045c-1.61.527-3.33.812-5.117.812-9.08 0-16.442-7.362-16.442-16.442 0-4.387 1.718-8.373 4.518-11.321l4 4.743a10.256 10.256 0 0 0-2.374 6.578c0 5.687 4.61 10.298 10.298 10.298 1.875 0 3.633-.501 5.148-1.376l3.994 4.746-.028.018.022-.008 3.51 4.227ZM5.261.098l7.392 2.321.137-.045c1.61-.527 3.331-.812 5.117-.812 9.081 0 16.443 7.361 16.443 16.442 0 4.387-1.718 8.372-4.518 11.32l-4-4.742a10.256 10.256 0 0 0 2.374-6.578c0-5.688-4.61-10.299-10.299-10.299-1.874 0-3.632.501-5.147 1.377L8.765 4.336l.028-.019-.021.008L5.262.098Z" fill="#fff"/>
          </svg>
        </a>
      
        <nav className="pl-14 flex items-center space-x-12">
          <button 
            onClick={() => props.onChangePage('planList')}
            className="py-4 font-semibold text-white border-t-4 border-white">
            Discover Comp Plans
          </button>
          <button 
            onClick={() => props.onChangePage('plan')}
            className="py-4 font-semibold text-white opacity-50 border-t-4 border-transparent hover:opacity-100">
              Design Your Plan
          </button>
        </nav>
      </div>
      
      <div className="flex-space">
        <div className='flex items-center space-x-8 text-right'>
        <button
            onClick={() => props.onChangePage('home')}
            className="font-semibold text-sm text-qpSlate-400 hover:text-white">
              home
          </button>
          <button
            onClick={() => props.onChangePage('planType')}
            className="font-semibold text-sm text-qpSlate-400 hover:text-white">
              choose
          </button>
          <button
            onClick={() => props.onChangePage('templates')}
            className="font-semibold text-sm text-qpSlate-400 hover:text-white">
              templates
          </button>
          <button 
            onClick={() => props.onChangePage('plan')}
            className="font-semibold text-sm text-qpSlate-400 hover:text-white">
              plan
          </button>
          <button 
            onClick={() => props.onChangePage('planList')}
            className="font-semibold text-sm text-qpSlate-400 hover:text-white">
              plan list
          </button>
        </div>
        <button className='text-white text-sm text-center p-2 rounded-full font-bold bg-qpGreen-200 hover:border-teal-500 hover:bg-teal-500 hover:text-white'>
          DK
        </button>
      </div>

    </div>
  )
}