import React from 'react';

import './index.css';

const CoctailsBlock = ({ coctails }) => {
  return (
    <div className="coctails-block">
      <h2 className="coctails-block__title">{coctails.category}</h2>
      <div className="coctails-block__images">
        {coctails.drinks.map((coctail, i) => (
          <figure key={i}>
            <img src={coctail.strDrinkThumb} alt={coctail.strDrink} />
            <figcaption>{coctail.strDrink}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default CoctailsBlock;
