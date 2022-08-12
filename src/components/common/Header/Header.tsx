import React from 'react';

import { ImExit } from "react-icons/im";
import StyledHeader from './StyledHeader';
import Button from '../Button';

const Header = () => {
  return (
    <StyledHeader>
      <p>Тествое задание от компании Takeoff Staff</p>
      <div className='account-info'>
        <div className='info'>
          <p className='name'>Александр</p>
          <p className='telephone'>+7(961)-197-37-98</p>
        </div>
        <button className='btn-exit'>Выйти</button>
        {/* <Button 
          className='account-btn-exit'
          text="Выйти"
        /> */}
      </div>
    </StyledHeader>
  );
}

export default Header;
