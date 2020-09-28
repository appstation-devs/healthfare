import React from 'react';
import Header from '../components/Layout';
import mobileHeader from '../components/Layout/MobileHeader';
import Breadcrumb from '../components/Breadcrumb';
import ConsultationDetails from '../components/ConsultationDetails';
import Footer from '../components/Layout/Footer';

function ConsultationDetailsPage() {
  return (
    <>
      <Header />
      <mobileHeader />
      <Breadcrumb link='Consultation Details' />
      <div style={{backgroundColor:'rgba(255,255,255,0.56)',width:'100%',border:'2px solid #ccc'}}>
        <ConsultationDetails  />
      </div>
      <Footer />
    </>
  )
}

export default ConsultationDetailsPage;