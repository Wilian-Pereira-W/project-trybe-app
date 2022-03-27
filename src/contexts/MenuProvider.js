import React, { useState } from 'react';
import { MenuContext } from './MenuContext';

function MenuProvider( { children } ) {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
      <MenuContext.Provider value={{ menuVisible, setMenuVisible}}>
        {children}
      </MenuContext.Provider>
  );
}

export default MenuProvider;
