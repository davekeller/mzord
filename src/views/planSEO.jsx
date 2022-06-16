import Subnav from '../components/subnav.jsx';
import Title from '../components/title.jsx';
import StructureBuilder from '../components/structureBuilder.jsx';
import CTA from '../components/cta.jsx';
import Examples from '../components/examples.jsx';
import Breakdown from '../components/breakdown.jsx';
import FAQ from '../components/faq.jsx';

export default function PlanSEO() {
  return (
    <div className='relative w-screen min-h-screen'>
      <Subnav />
      <div className='mt-12 px-8 col-span-full flex-between'>
        <Title />
        <CTA />
      </div>
      <div className='mt-12 grid grid-cols-5 px-8 gap-8'>
        <div className='col-span-3 space-y-6'>
          <StructureBuilder />
        </div>
        <div className='col-span-2 space-y-8'>
          <Breakdown />
          <Examples />
          <FAQ />
        </div>
      </div>

    </div>
  )
}