import React from 'react';
import Page from '../components/Page';
import Header from '../components/Header';
import Text, { TextHeading, TextContent } from '../components/Text';
import PropTypes from 'prop-types';

const Clothing = () => (
  <Page>
    <Header small overlay={0.1}>
      <h1>Co na sebe?</h1>
    </Header>
    <Text>
      <TextHeading>
        <span>Dress code</span>
        <h2>V čem bychom měli dorazit?</h2>
      </TextHeading>
      <TextContent>
        <blockquote>
          <p>
            Nelámejte si hlavu s tím, co si vzít na sebe! Chceme, abyste se
            cítili uvolněně a&nbsp;příjemně. Takže dámy, letní šatičky, sukýnky,
            ale jehly doporučujeme nechat doma. Páni to mají asi jasné, protože
            fešná bílá nebo světlá košile s&nbsp;kalhotami sluší moc každému.
            Pokud nechcete nechat ženicha ve štychu, můžete k&nbsp;outfitu
            přidat motýlka či šle, fantazii se meze se nekladou. Jediné,
            o&nbsp;co bychom Vás chtěli poprosit, nechte rifle doma, sami je
            milujeme, ale nechceme, aby byla riflovina<br />
            na všech fotkách. Ležérnímu stylu palec hore.
          </p>
          <p>
            Svatba bude veselá, a&nbsp;to především pastelovými barvami jako
            růžová, modrá a&nbsp;vínová. Takže pokud byste přeci jen chtěli
            ladit, můžete volit tyto barvy.<br />My už jsme téměř připravení,
            takže se těšíme na Vaše dress cody.
          </p>
        </blockquote>
      </TextContent>
    </Text>
  </Page>
);

export default Clothing;
