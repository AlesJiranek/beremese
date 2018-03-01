import React from 'react';
import ActiveLink from './ActiveLink';

const Menu = () => (
  <ul>
    <ActiveLink href="/">Svatba</ActiveLink>
    <ActiveLink href="/cesta">Cesta za námi</ActiveLink>
    <ActiveLink href="/ubytovani">Příjezd a Ubytování</ActiveLink>
    <ActiveLink href="/obrad">Obřad</ActiveLink>
    <ActiveLink href="/co-na-sebe">Co na sebe</ActiveLink>
    <ActiveLink href="/dary">Dary</ActiveLink>
    <ActiveLink prefetch href="/vzpominky">
      Vzpomínky
    </ActiveLink>
  </ul>
);

export default Menu;
