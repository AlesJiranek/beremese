import React from 'react';
import Page from '../components/Page';
import Header from '../components/Header';
import Text, { TextHeading, TextContent } from '../components/Text';
import PropTypes from 'prop-types';

const Accomodation = () => (
  <Page>
    <Header
      backgroundImage="/static/images/img_4823-small.jpg"
      small
      overlay={0.1}
    >
      <h1>Příjezd a ubytování</h1>
    </Header>
    <Text>
      <TextHeading>
        <span>Příjezd</span>
        <h2>V kolik by bylo vhodné dorazit?</h2>
      </TextHeading>
      <TextContent>
        <blockquote>
          <p>
            Tak a&nbsp;je tu náš den D, konec příprav a zařízování! Jde do
            tuhého! Doufáme, že jste připraveni stejně tak dobře jako my.
          </p>
          <p>
            Vzhledem k času obřadu by bylo ideální, aby váš příjezd byl cca do
            12 hodin. Budete očekáváni ale i&nbsp;dříve, neboť pokoje
            k ubytování budou již od rána připraveny. Bude tedy možnost se
            v klidu na obřad převléknout či upravit. Nemějte obavy, že byste
            byli o&nbsp;hladu. Před obřadem bude přichystáno menší občerstvení,
            které Vám rád nabídne ženich nevěsty.
          </p>
          <p>
            Možná zajímavost pro dámy, celé dopoledne bude na místě k dispozici
            vizážistka, která by vás dle domluvy mohla profesionálně zkrášlit.
          </p>
        </blockquote>
      </TextContent>
    </Text>
    <Text overlay>
      <TextHeading>
        <span>Ubytování</span>
        <h2>Kde složíme hlavy?</h2>
      </TextHeading>
      <TextContent>
        <blockquote>
          <p>
            Místo konání našeho dne nás opravdu očarovalo. Doufáme tedy, že i vy
            se zde budete cítit krásně. Vybrali jsme malou vesničku s menším
            mlýnem uprostřed přírody na Orlíku, kde je vše co bude na&nbsp;naše
            veselí třeba. Vše proběhne na jednom místě, od&nbsp;obřadu, přes
            oslavu až po nedělení snídani.
          </p>
          <p>
            Součástí mlýna je možnost ubytování za 495 Kč za&nbsp;osobu, včetně
            nedělní snídaně v podobě švédských stolů. Počítáme s tím, že se
            všichni zdržíte až&nbsp;do&nbsp;nedělního rána. Kdyby někdo z vás
            přesto neměl o&nbsp;ubytování zájem, dejte nám prosím vědět
            co&nbsp;nejdříve.
          </p>
          <p>
            Jenom malé upozornění, na místě není možné platit kartami, pouze v
            hotovosti.
          </p>
        </blockquote>
      </TextContent>
    </Text>
  </Page>
);

export default Accomodation;
