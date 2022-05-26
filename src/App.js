import React, { useState } from 'react';

import Navbar from './components/navbar.jsx';
import NavAuth from './components/navAuth.jsx';
import Footer from './components/footer.jsx';
import Home from './views/home.jsx';
import Plan from './views/plan.jsx';
import PlanList from './views/planList.jsx';


export default function App() {
  
  const [page, setPage]= useState('list');

  let pageComponent = (<Home />);
  if (page === 'plan') {
    pageComponent = (<Plan />);
  }
  if (page === 'planList') {
    pageComponent = (<PlanList />);
  }

  return (
    <div className='relative py-14 w-screen h-screen bg-slate-100 text-slate-800 hover:ease-in-out antialiased'>
      <Navbar onChangePage={setPage}/>
      
      {pageComponent}

      <Footer />
    </div>
  )
}
