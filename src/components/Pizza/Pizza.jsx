import React from 'react';

import styles from './Pizza.module.scss';

const ConfigurePizza = ({
  isTraditional,
  setIsTraditional,
  size,
  setSize,
}) => (
  <div className={styles.configurePizza}>
    <div className={styles.row}>
      <p
        onClick={() => setIsTraditional(false)}
        className={!isTraditional ? styles.active : ''}
      >
        тонкое
      </p>
      <p
        onClick={() => setIsTraditional(true)}
        className={isTraditional ? styles.active : ''}
      >
        традиционное
      </p>
    </div>
    <div className={styles.row}>
      <p className={size === 26 ? styles.active : ''} onClick={() => setSize(26)}>26 см.</p>
      <p className={size === 30 ? styles.active : ''} onClick={() => setSize(30)}>30 см.</p>
      <p className={size === 40 ? styles.active : ''} onClick={() => setSize(40)}>40 см.</p>
    </div>
  </div>
);

const Pizza = ({
  pizza,
  addToCart,
}) =>

// const onChangeIsTraditional = (meaning) => {
//   setData((prev) => ({
//     ...prev,
//     isTraditional: meaning,
//   }));
// };
// const onChangeSize = (meaning) => {
//   setData((prev) => ({
//     ...prev,
//     size: meaning,
//   }));
// };

// const addToCart = () => {
//   // setData((prev) => ({
//   //   ...prev,
//   //   countInCart: prev.countInCart + 1,
//   //   isInCart: true
//   // }));
//   addToCart({
//     ...pizza,
//     countInCart: pizza.countInCart + 1,
//     isInCart: true,
//   });
// };

{
  const [isTraditional, setIsTraditional] = React.useState(false);
  const [size, setSize] = React.useState(26);

  React.useEffect(() => {
    setSize(pizza.size);
    setIsTraditional(pizza.isTraditional);
  }, []);

  return (
    <div className={styles.pizza}>
      <img width={260} height={260} src={pizza.photo} alt="pizza" />
      <h3>{pizza.headline}</h3>
      <ConfigurePizza
        isTraditional={isTraditional}
        setIsTraditional={setIsTraditional}
        size={size}
        setSize={setSize}
      />
      <div className={styles.row}>
        {pizza.price && (
        <p className={styles.price}>
          от
          {' '}
          {pizza.price}
          {' '}
          ₽
        </p>
        )}
        <button
          onClick={(e) => {
            e.preventDefault();

            return addToCart({
              ...pizza,
              countInCart: pizza.countInCart + 1,
              isTraditional,
              size,
              isInCart: true,
            });
          }}
          type="button"
          className={`btn ${styles.btnOutline}`}
        >
          <svg width="14" height="14" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" fill="#EB5A1E" />
            <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#EB5A1E" />
          </svg>

          Добавить
          <span>{pizza.countInCart}</span>
        </button>
      </div>
    </div>
  );
};
export default Pizza;
