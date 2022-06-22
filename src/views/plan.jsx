import Subnav from '../components/subnav.jsx';
import Title from '../components/title.jsx';
import CTA from '../components/cta.jsx';
import Path from '../components/path.jsx';
import Modeler from '../components/modeler/modeler.jsx';
import Insights from '../components/insights.jsx';
import FAQ from '../components/faq.jsx';
import Examples from '../components/examples.jsx';


export default function Plan() {
  return (
    <div className='relative w-screen min-h-screen pb-32'>
      <Subnav />
      <div className='mt-12 px-8 col-span-full flex-between'>
        <Title />
        <CTA />
      </div>
      <div className='mt-12 grid grid-cols-5 px-8 gap-12'>
        <div className='col-span-3'>
          <Path />
          <Insights />
          <FAQ />
        </div>
        <div className='col-span-2 space-y-8'>
          <Modeler />
          <Examples />
        </div>
      </div>
    </div>
  )
}
