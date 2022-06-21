import Subnav from '../components/subnav.jsx';
import Title from '../components/title.jsx';
import CTA from '../components/cta.jsx';
import Path from '../components/path.jsx';
import Modeler from '../components/modeler/modeler.jsx';

export default function Plan() {
  return (
    <div className='relative w-screen min-h-screen'>
      <Subnav />
      <div className='mt-12 px-8 col-span-full flex-between'>
        <Title />
        <CTA />
      </div>
      <div className='mt-12 grid grid-cols-5 px-8 gap-8'>
        <div className='col-span-3'>
          <Path />
        </div>
        <div className='col-span-2 space-y-8'>
          <Modeler />
        </div>
      </div>
    </div>
  )
}
