import React, { useState, useEffect } from 'react';

import './index.css';

function CoctailsCategory() {
  const [categoryList, setLoaded] = useState(false);

  useEffect(() => {
    const fetchList = async () => {
      const res = await fetch(
        'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
      );
      const json = await res.json();
      setLoaded(json.drinks);
    };
    fetchList();
  }, []);

  return (
    <div className="list">
      {!categoryList
        ? 'loading'
        : categoryList.map((category, i) => (
            <label className="list__category" key={i}>
              {category.strCategory}
              <input type="checkbox" value={category.strCategory} />
              <span className="list__category__checkmark" />
            </label>
          ))}
    </div>
  );
}

export default CoctailsCategory;
