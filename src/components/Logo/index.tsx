import * as React from 'react';

import {Icon, LogoMark, LogoName} from './styles';
import {icons} from '../../assets/icons';

const Logo = () => {
  const {logo} = icons;
  return (
    <div style={{display: 'flex', alignItems: 'center'}}>
      <LogoName>COR TODO</LogoName>
      <LogoMark>
        <Icon src={logo} />
      </LogoMark>
    </div>
  );
};

export default Logo;
