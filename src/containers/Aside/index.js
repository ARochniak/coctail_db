import React from 'react';
import { useInView } from 'react-intersection-observer';

import CoctailsCategory from '../../components/CoctailsCategory';

import './index.css';

const Aside = ({ setCoctails, setMainClass }) => {
  const [ref, inView] = useInView({
    threshold: 0
  });

  const clickHandler = async e => {
    e.preventDefault();
    const inputs = e.target.form;
    const fetchCoctails = async category => {
      const fetchList = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`
      );
      const json = await fetchList.json();
      return { category, drinks: json.drinks };
    };
    const selectedCategory = Object.keys(inputs)
      .filter(i => inputs[i].checked)
      .map(i => {
        return inputs[i].value;
      });
    if (selectedCategory.length === 0) return;
    const promises = selectedCategory.map(fetchCoctails);
    const coctails = await Promise.all(promises).then(res => res);
    setCoctails(coctails);
  };

  const asideClass = inView
    ? setMainClass('')
    : setMainClass('main_full-screen');

  return (
    <form className="aside" ref={ref}>
      <CoctailsCategory />
      <button onClick={clickHandler} type="submit">
        APPLY
      </button>
    </form>
  );
};

export default Aside;
