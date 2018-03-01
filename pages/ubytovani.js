import React from "react";
import Page from "../components/Page";
import Header from "../components/Header";
import Text, { TextHeading, TextContent } from "../components/Text";
import PropTypes from "prop-types";

const Accomodation = () => (
  <Page>
    <Header backgroundImage="/static/images/img_bg_1.jpg" small>
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
            Tak a je tu náš den D, konec příprav a zařízování! Jde do tuhého!
            Doufáme, že jste připraveni stejně tak dobře jako my.
          </p>
          <p>
            Vzhledem k času obřadu by bylo ideální, aby váš příjezd byl cca do
            12 h. Budete očekáváni ale i dříve, neboť pokoje k ubytování budou
            již od rána připraveny. Bude tedy možnost se v klidu na obřad
            převléknout či upravit. Nemějte obavy, že byste byli o hladu. Před
            obřadem bude přichystáno menší občerstvení, které Vám rád nabídne
            ženich nevěsty.
          </p>
          <p>
            Možná zajímavost pro dámy, celé dopoledne bude na místě k dispozici
            vizážistka, která by vás dle domluvy mohla profesionálně zkrášlit.
          </p>
        </blockquote>
      </TextContent>
    </Text>
    <Text bg="/static/images/img_bg_4.jpg" overlay>
      <TextHeading>
        <span>Ubytování</span>
        <h2 style={{ color: "#fff" }}>Kde složíme hlavy?</h2>
      </TextHeading>
      <TextContent>
        <blockquote>
          <p style={{ color: "rgba(255, 255, 255, 0.8)" }}>
            Místo konání našeho dne nás opravdu očarovalo. Doufáme tedy, že i vy
            se zde budete cítit krásně. Vybrali jsme malou vesničku s menším
            mlýnem uprostřed přírody na Orlíku, kde je vše co bude na naše
            veselí třeba. Vše proběhne na jednom místě,<br />od obřadu, přes
            oslavu až po nedělení snídani.
          </p>
          <p style={{ color: "rgba(255, 255, 255, 0.8)" }}>
            Součástí mlýna je možnost ubytování za 495 Kč za osobu, včetně
            nedělní snídaně v podobě švédských stolů. Počítáme s tím, že se
            všichni zdržíte až do nedělního rána. Kdyby někdo neměl o ubytování
            <br />zájem, dejte nám prosím vědět co nejdříve.
          </p>
          <p style={{ color: "rgba(255, 255, 255, 0.8)" }}>
            Jenom malé upozornění, na místě není možné platit kartami, pouze v
            hotovosti.
          </p>
        </blockquote>
      </TextContent>
    </Text>
  </Page>
);

export default Accomodation;
