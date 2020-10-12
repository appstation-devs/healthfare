import React from 'react';
import Header from '../components/Layout';
import MobileHeader from '../components/Layout/MobileHeader';
import Banner from '../components/Banner';
import TreatmentKickstart from '../components/TreatmentKickstart';
import Footer from '../components/Layout/Footer';

function HomePage() {
  return (
    <>
      <Header />
      <MobileHeader />
      <Banner />
      <TreatmentKickstart  />
      <Footer />
    </>
  )
}

export default HomePage;