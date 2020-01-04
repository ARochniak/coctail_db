import React, { useState } from 'react';
import Header from '../containers/Header';
import Main from '../containers/Main';
import Aside from '../containers/Aside';

import './index.css';

const App = () => {
  const [coctails, setCoctails] = useState(false);

  return (
    <div className="app">
      <header>
        <Header />
      </header>
      <aside>
        <Aside setCoctails={setCoctails} />
      </aside>
      <main>
        <Main coctails={coctails} />
      </main>
    </div>
  );
};

export default App;
