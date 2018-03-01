import Countdown from "../components/Countdown";
import React from "react";
import Page from "../components/Page";
import Header from "../components/Header";
import Couple from "../components/Couple";
import Event from "../components/Event";
import Story from "../components/Story";
import AttendanceForm from "../components/AttendanceForm";
import Footer from "../components/Footer";
import Map from "../components/Map";

const Index = () => (
  <Page>
    <Header backgroundImage="/static/images/img_bg_2.jpg">
      <h1>Renča &amp; Aleš</h1>
      <h2>Chtějí všem na vědomí dát, že se z lásky budou brát za...</h2>
      <Countdown date="2018-06-16" />
      <p>
        <a
          href="/static/Svatba-Renca-Ales.ics"
          className="btn btn-default btn-sm"
          target="_blank"
        >
          Uložit datum
        </a>
      </p>
    </Header>
    <Couple />
    <Map />
    <Event />
    <Story />
    <AttendanceForm />
  </Page>
);

export default Index;
