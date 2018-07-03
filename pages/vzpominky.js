import React from 'react';
import Page from '../components/Page';
import Header from '../components/Header';
import Text, { TextHeading, TextContent } from '../components/Text';
import PropTypes from 'prop-types';
import PhotoGallery from '../components/PhotoGallery';

const Clothing = () => (
  <Page>
    <Header small overlay={0.1}>
      <h1>Vzpomínky</h1>
    </Header>
    <Text>
      <TextHeading>
        <span>Fotogalerie</span>
        <h2>Jak jsme si to užili?</h2>
      </TextHeading>
      <TextContent>
        <PhotoGallery />
      </TextContent>
    </Text>
  </Page>
);

export default Clothing;
