import Sidebar from '../components/sidebar.jsx';
import Subnav from '../components/subnav.jsx';
import Title from '../components/title.jsx';
import CTA from '../components/cta.jsx';
import StructureBuilder from '../components/structureBuilder.jsx';
import Modeler from '../components/modeler.jsx';

export default function Plan() {
  return (
    <div className='relative w-screen h-full pb-24'>
      <div className='fixed left-0 w-24'>
        <Sidebar />
      </div>
      <Subnav />

      <div className='pl-24 mt-12'>
        <div className='grid grid-cols-3 px-8 gap-8'>
          <div className='col-span-2 space-y-6'>
            <Title />
            <StructureBuilder />
          </div>
          <div className='col-span-1 space-y-8'>
            <CTA />
            <Modeler />
          </div>
        </div>
      </div>

    </div>
  )
}
