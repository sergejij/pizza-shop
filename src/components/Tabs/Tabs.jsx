import React from 'react';

import styles from './Tabs.module.scss';

const tabs = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const Tab = ({ name, isActive, onClick }) => name && (
  <div onClick={onClick} className={`${styles.tab} ${isActive && styles.tabActive}`}>{name}</div>
);

const Tabs = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div className={styles.tabs}>
      {tabs.map((tabName, index) => (
        <Tab
          onClick={() => setActiveIndex(index)}
          isActive={activeIndex === index}
          name={tabName}
          key={index}
        />
      ))}
    </div>
  );
};

export default Tabs;
