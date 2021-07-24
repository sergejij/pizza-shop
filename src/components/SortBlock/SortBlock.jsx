import React from 'react';
import styles from './SortBlock.module.scss';

const SortBlock = () => {
  const [isOpenPopup, setIsOpenPopup] = React.useState(false);
  return (
    <div className={styles.sort}>
      <div className={styles.sortLabel}>
        <p>
          Сортировка по:
          <span onClick={() => setIsOpenPopup((prev) => !prev)}>популярности</span>
        </p>
      </div>
      {isOpenPopup && (
        <div className={styles.sortPopup}>
          <p>популярности</p>
          <p>по цене</p>
          <p>по алфавиту</p>
        </div>
      )}
    </div>
  );
};

export default SortBlock;
