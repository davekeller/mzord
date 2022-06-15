import React, { useState } from 'react';

import Navbar from './components/navbar.jsx';
// import NavAuth from './components/navAuth.jsx';
import Footer from './components/footer.jsx';
// import Sidebar from "./components/sidebar.jsx";

import Home from './views/home.jsx';
import Plan from './views/plan.jsx';
import PlanType from './views/planType.jsx';
import Templates from './views/templates.jsx';
import PlanList from './views/planList.jsx';


export default function App() {
  
  const [page, setPage]= useState('list');

  let pageComponent = (<Home />);
  if (page === 'plan') {
    pageComponent = (<Plan />);
  }
  if (page === 'planType') {
    pageComponent = (<PlanType />);
  }
  if (page === 'templates') {
    pageComponent = (<Templates />);
  }
  if (page === 'planList') {
    pageComponent = (<PlanList />);
  }

  return (
    <div className='relative py-14 w-screen h-screen bg-qpSlate-100 text-qpDark hover:ease-in-out antialiased'>
      {/* <Navbar onChangePage={setPage}/> */}
      <Navbar onChangePage={setPage}/>
      {/* <Sidebar /> */}

      {pageComponent}

      <Footer />
    </div>
  )
}
