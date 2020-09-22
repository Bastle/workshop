import React from 'react';

const Context = React.createContext({
  name: 'abc',
  toggleName: () => {}
});

export default Context;