import React from 'react';
import Page from '../components/Page';
import Header from '../components/Header';
import Text, { TextHeading, TextContent } from '../components/Text';
import PropTypes from 'prop-types';

const Clothing = () => (
  <Page>
    <Header
      backgroundImage="/static/images/img_4823-small.jpg"
      small
      overlay={0.1}
    >
      <h1>Co na sebe?</h1>
    </Header>
    <Text>
      {/* <TextHeading>
        <span>Best Wishes</span>
        <h2>Friends Wishes</h2>
      </TextHeading> */}
      <TextContent>
        <blockquote>
          <p>
            Největším darem pro nás bude to, že s námi strávíte náš den! A toho
            si opravdu vážíme! Žádné vázy, jídelní soupravy, slánky ani mixéry
            nejsou potřeba, neboť si myslíme, že všeho máme dost. Pokud i přesto
            na nějakém daru trváte, oceníme spíše příspěvek na naše další
            společné cesty za dobrodružstvím. Uvidíme co zvítězí, prosluněná
            cesta na Honolulu nebo expedice v Himalájích :D
          </p>
        </blockquote>
      </TextContent>
    </Text>
  </Page>
);

export default Clothing;
