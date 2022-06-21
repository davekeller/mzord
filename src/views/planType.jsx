import React, { useState } from 'react';
import Templates from '../views/templates.jsx';

export default function PlanType (props) {

  const [page, setPage]= useState('planType');

  let pageComponent = (<PlanType />);
  if (page === 'templates') {
    pageComponent = (<Templates />);
  }

  return (
    <div className="mx-auto my-24">
      <div className='card p-12 pb-24 w-1/2 mx-auto'>
        <div className="text-center">
          <img src="/mzord/assets/icons/doc.png" className="mx-auto" alt="doc" />
          <p className="mt-4 text-3xl font-bold text-qpTwilight">
            How would you like to build your Comp Plan?
          </p>
        </div>
      
        <div className="mt-12 grid grid-cols-2 gap-12">
          <button 
            onClick={() => props.onChangePage('templates')}
            className="p-6 rounded-xl border-4 border-qpSlate-200 shadow-qpDark/10 hover:bg-qpSlate-100">
            <img className="h-16 mx-auto" src="/mzord/assets/icons/search.svg" alt="search" />
            <h2 className="py-1.5 px-4 my-6 text-lg font-semibold bg-qpGreen-200 text-white rounded-lg">
              Explore Plans &rarr;
            </h2>
            <p className="mt-2 font-semibold text-qpSlate-500">Explore and forecast comp plan templates</p>
          </button>
          <button 
            className="p-6 rounded-xl border-4 border-qpSlate-200 shadow-qpDark/10 hover:bg-qpSlate-100">
            <img src="/mzord/assets/icons/target.svg" className="h-16 mx-auto" alt="doc" />
            <h2 className="py-1.5 px-4 my-6 text-lg font-semibold bg-qpSky text-white rounded-lg">
              Start from Scratch &rarr;
            </h2>
            <p className="font-semibold text-qpSlate-500">Build your plan using our flexible Comp Plan Builder</p>
          </button>
        </div>
      </div>
    </div>
  )
}
