import React from 'react';
import Page from '../components/Page';
import Header from '../components/Header';
import Text, { TextHeading, TextContent } from '../components/Text';
import PropTypes from 'prop-types';

const Gifts = () => (
  <Page>
    <Header
      backgroundImage="/static/images/img_4823-small.jpg"
      small
      overlay={0.1}
    >
      <h1>Dary</h1>
    </Header>
    <Text>
      <TextHeading>
        <span>Laskavoti</span>
        <h2>Čím nás můžete obdarovat?</h2>
      </TextHeading>
      <TextContent>
        <blockquote>
          <p>
            Vzhledem k tomu, že vaše cesta za námi přinese nějaké ty náklady,
            stejně jako případné ubytování, není třeba žádných velkých darů.
          </p>
          <p>
            Největším darem pro nás bude, že s námi strávíte náš den! A toho si
            opravdu vážíme! Žádné vázy, jídelní soupravy ani mixéry nejsou
            potřeba, neboť si myslíme, že všeho máme dost. Pokud i přesto na
            nějakém daru trváte, oceníme spíše příspěvek na naše další společné
            cesty za dobrodružstvím. Uvidíme co zvítězí, prosluněná cesta na
            Honolulu nebo expedice v Himalájích?
          </p>
        </blockquote>
      </TextContent>
    </Text>
  </Page>
);

export default Gifts;
