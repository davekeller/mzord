import Sidebar from '../components/sidebar.jsx';
import Title from '../components/title.jsx';
import StructureBuilder from '../components/structureBuilder.jsx';
import Modeler from '../components/modeler.jsx';

export default function Plan() {
  return (
    <div className='relative w-screen h-full pb-24'>
      <div className='fixed pr-32'>
        <Sidebar />
      </div>

      <div className='pl-32'>
        <div className='grid grid-cols-3 px-8 gap-8'>
          <div className='col-span-full'>
            <Title />
          </div>
          <div className='col-span-2'>
            <StructureBuilder />
          </div>
          <div className='col-span-1'>
            <Modeler />
          </div>
        </div>
      </div>

    </div>
  )
}
