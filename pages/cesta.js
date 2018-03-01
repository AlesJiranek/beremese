import React from 'react';
import Page from '../components/Page';
import Header from '../components/Header';
import Text, { TextHeading, TextContent } from '../components/Text';
import PropTypes from 'prop-types';
import Map from '../components/Map';

const Route = () => (
  <Page>
    <Header backgroundImage="/static/images/img_bg_1.jpg" small>
      <h1>Cesta za námi</h1>
    </Header>
    <Text>
      <TextHeading>
        <span>Doprava</span>
        <h2>Jak se k nám dostanete?</h2>
      </TextHeading>
      <TextContent>
        <blockquote>
          <p>
            Dopravit za námi se můžete všemi možnými způsoby - autobusem, vlakem
            i autem. Nejjednodušší cesta je ale určitě autem. Pokud nemáte auto
            vlastní nebo ho<br />z nějakého důvodu nemůžete vzít, dejte nám
            vědět a my vám domluvíme dopravu s někým, kdo bude mít auto
            dostupné.
          </p>
        </blockquote>
      </TextContent>
    </Text>
    <Text bg="/static/images/img_bg_4.jpg" overlay>
      <TextHeading>
        <span>Souřadnice</span>
        <h2 style={{ color: '#fff' }}>Kde přesně se mlýn nachází?</h2>
      </TextHeading>
      <TextContent>
        <h4>Adresa</h4>
        <blockquote>
          <address style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            Penzion Mlýn Kamenice<br />
            Klučenice - Kamenice 4<br />
            Krásná Hora nad Vltavou<br />
            262 56<br />
            Česká republika
          </address>
        </blockquote>
        <h4>GPS Souřadnice</h4>
        <blockquote>
          <address style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            49°33'8.763"N, 14°11'26.168"E
          </address>
        </blockquote>
        <h4>Plus Code</h4>
        <blockquote>
          <address style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            H53R+23
          </address>
        </blockquote>
        <h4>S-JTSK / Krovak</h4>
        <blockquote>
          <address style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            Y=767460.34 X=1099654.95
          </address>
        </blockquote>
      </TextContent>
    </Text>
    <Map />
  </Page>
);

export default Route;
