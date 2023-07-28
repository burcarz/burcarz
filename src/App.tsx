import React from 'react';
import GlobalStyles from './GlobalStyles';

import Router from './Router';

function App() {
  return (
    <div className="master">
          <Router />
          <GlobalStyles />
    </div>
  );
}

export default App;
