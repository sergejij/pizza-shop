import React from 'react';

import styles from './Categories.module.scss';

const Tab = ({ name, isActive, onClick }) => name && (
  <div onClick={onClick} className={`${styles.tab} ${isActive && styles.tabActive}`}>{name}</div>
);

const Categories = ({ setActiveCategory, categoryNames, activeCategory }) => (
  <div className={styles.tabs}>
    {categoryNames.map((tabName, index) => (
      <Tab
        onClick={() => setActiveCategory(index)}
        isActive={activeCategory === index}
        name={tabName}
        key={index}
      />
    ))}
  </div>
);

export default Categories;
