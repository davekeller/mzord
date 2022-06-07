import Sidebar from '../components/sidebar.jsx';
import Subnav from '../components/subnav.jsx';
import Title from '../components/title.jsx';
import CTA from '../components/cta.jsx';
import StructureBuilder from '../components/structureBuilder.jsx';
import Modeler from '../components/modeler/modeler.jsx';

export default function Plan() {
  return (
    <div className='relative w-screen min-h-screen'>
      <Sidebar />
      <Subnav />
      <div className='pl-20 mt-12'>
        <div className='grid grid-cols-5 px-8 gap-8'>
          <div className='col-span-3 space-y-6'>
            <Title />
            <StructureBuilder />
          </div>
          <div className='col-span-2 space-y-8'>
            <CTA />
            <Modeler />
          </div>
        </div>
      </div>

    </div>
  )
}
