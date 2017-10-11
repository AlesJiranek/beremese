import React from 'react';
import Page from '../components/Page';
import Header from '../components/Header';
import Couple from '../components/Couple';
import Event from '../components/Event';
import Story from '../components/Story';
import AttendanceForm from '../components/AttendanceForm';
import Footer from '../components/Footer';
import Map from '../components/Map';

const Index = () => (
  <Page>
    <Header />
    <Couple />
    <Map />
    <Event />
    <Story />
    <AttendanceForm />
    <Footer />
  </Page>
);


export default Index;
