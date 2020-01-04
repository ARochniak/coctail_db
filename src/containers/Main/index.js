import React from 'react';
import CoctailsBlock from '../../components/CoctailsBlock';

import './index.css';

const Main = ({ coctails }) => {
  return (
    <div className="main">
      {!coctails ? (
        <h2>Chose coctails from list</h2>
      ) : (
        coctails.map((coctail, i) => (
          <CoctailsBlock key={i} coctails={coctail} />
        ))
      )}
    </div>
  );
};

export default Main;
