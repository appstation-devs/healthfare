import React from 'react';
import Header from '../components/Layout';
import mobileHeader from '../components/Layout/MobileHeader';
import Breadcrumb from '../components/Breadcrumb';
import Consultation from '../components/consultation/index';
import Footer from '../components/Layout/Footer';

function ConsultationPage() {
  return (
    <>
      <Header />
      <mobileHeader />
      <Breadcrumb link='Consultation' />
      <div className="container" style={{margin: '50px auto 100px'}}>
        <Consultation  />
      </div>
      <Footer />
    </>
  )
}

export default ConsultationPage;