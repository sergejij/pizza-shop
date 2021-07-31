import React from 'react';
import styles from './SortBlock.module.scss';
import AppContext from '../../context';

const SortBlock = ({ activeSorting, setActiveSorting }) => {
  const { sortNames } = React.useContext(AppContext);
  const [isOpenPopup, setIsOpenPopup] = React.useState(false);

  return (
    <div className={styles.sort}>
      <div className={styles.sortLabel}>
        <p>
          Сортировка по:
          <span onClick={() => setIsOpenPopup((prev) => !prev)}>{sortNames[activeSorting]}</span>
        </p>
      </div>
      {isOpenPopup && (
        <ul className={styles.sortPopup}>
            {sortNames.map((name, index) => (
              <li
                key={name}
                className={activeSorting === index ? styles.active : ''}
                onClick={() => setActiveSorting(index)}
              >
                {name}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default SortBlock;
