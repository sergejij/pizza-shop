import React from 'react';
import AppContext from '../../context';

import styles from './Categories.module.scss';

const Tab = ({ name, isActive, onClick }) => name && (
  <div onClick={onClick} className={`${styles.tab} ${isActive && styles.tabActive}`}>{name}</div>
);

const Categories = ({ setActiveCategory }) => {
  const { categoryNames } = React.useContext(AppContext);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onChooseCategory = (index) => {
    setActiveIndex(index);
    setActiveCategory(index);
  };

  return (
    <div className={styles.tabs}>
      {categoryNames.map((tabName, index) => (
        <Tab
          onClick={() => onChooseCategory(index)}
          isActive={activeIndex === index}
          name={tabName}
          key={index}
        />
      ))}
    </div>
  );
};

export default Categories;
