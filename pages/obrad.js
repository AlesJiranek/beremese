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
      <h1>Obřad</h1>
    </Header>
    <Text>
      <TextHeading>
        <span>Nejdůležitější událost</span>
        <h2>Jak to bude celé probíhat?</h2>
      </TextHeading>
      <TextContent>
        <blockquote>
          <p>
            Obřad bude probíhat od 13 hodin v těsné blízkosti mlýna. Snad jediné,
            co prosím berte na vědomí je, že&nbsp;naše ano si řekneme v přírodě,
            nejspíše na trávě, a&nbsp;proto dámy zvažte vhodnou obuv a jehly
            nechte doma.
          </p>
          <p>
            Chtěli bychom vás požádat, abyste během obřadu nefotili ani
            nenatáčeli, pokud o to námi nebudete požádáni. Je to pro nás
            nejdůležitější chvíle dne, a&nbsp;tak chceme abyste si to stejně
            jako my užili naplno a&nbsp;zůstala nám všem pěkná vzpomínka.
          </p>
          <p>
            Nejsme příznivci publikování svateb na sociální sítě. Pokud však
            během večera pořídíte nějaké fotografie, o&nbsp;které byste se s námi
            chtěli podělit, bude pro tyto účely možnost nahrát tyto fotografie
            na náš web.
          </p>
        </blockquote>
      </TextContent>
    </Text>
  </Page>
);

export default Clothing;
