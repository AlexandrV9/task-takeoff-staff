import React from 'react';

import StyledMain from "./StyledMain";
import Header from '../common/Header';
import Contacts from '../Contacts/Contacts';

const Main = () => {
  return (
    <StyledMain>
      <Header />
      <Contacts/>
    </StyledMain>
  );
}

export default Main;
