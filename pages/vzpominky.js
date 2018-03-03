import React from 'react';
import Page from '../components/Page';
import Header from '../components/Header';
import Text, { TextHeading, TextContent } from '../components/Text';
import PropTypes from 'prop-types';

const Clothing = () => (
  <Page>
    <Header backgroundImage="/static/images/img_4833.jpg" small overlay={0.05}>
      <h1>Vzpomínky</h1>
    </Header>
    <Text>
      <TextHeading>
        <span>Fotogalerie</span>
        <h2>Jak jsme si to užili?</h2>
      </TextHeading>
      <TextContent>
        <blockquote>
          <p>
            Naše svatba zatím ještě neproběhla, takže ještě není na co
            vzpomínat! Jakmile ale budeme mít nějaké fotografie, najdete je
            právě tady.
          </p>
        </blockquote>
      </TextContent>
    </Text>
  </Page>
);

export default Clothing;
