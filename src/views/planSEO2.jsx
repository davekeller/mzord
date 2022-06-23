import Subnav from '../components/subnav.jsx';
import Title from '../components/title.jsx';
import Path from '../components/path.jsx';
import CTA from '../components/cta.jsx';
import Examples from '../components/examples.jsx';
import Breakdown from '../components/breakdown.jsx';
import FAQ from '../components/faq.jsx';
import Insights from '../components/insights.jsx';
import Testimonial from '../components/testimonial.jsx';
import Customization from '../components/customization.jsx';

export default function PlanSEO() {
  return (
    <div className='relative w-screen min-h-screen pb-32'>
      <Subnav />

      {/* Title Row */}
      <div className='mt-12 px-8 col-span-full flex-between'>
        <Title />
        <CTA />
      </div>

      {/* Plan Content */}
      <div className='mt-12 grid grid-cols-5 px-8 gap-12'>
        <div className='col-span-3 space-y-12'>
          <Path />
          <Examples />
          <Insights />
          <Customization />
        </div>
        <div className='col-span-2 space-y-12'>
          <Breakdown />
          <Testimonial />
          <FAQ />
        </div>
      </div>

    </div>
  )
}