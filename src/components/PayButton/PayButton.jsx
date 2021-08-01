import React from 'react';

import styles from './PayButton.module.scss';

const PayButton = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  return modalIsOpen ? (
    <div className={styles.modal} onClick={() => setIsOpen(false)}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
          <h3>Деньги успешно списаны с вашей банковской карты</h3>
          <p>Шутка. Этот сайт был сделан в учебных целях, вы не можете заказать на нем пиццу 🤷</p>
        <img width={200} src="/img/payment.png" alt="payment" />
        <button onClick={() => setIsOpen(false)} type="button" className={`btn ${styles.blackBtn}`}>
          Вернуться назад
        </button>
      </div>
    </div>
  ) : <button onClick={() => setIsOpen(true)} type="button" className={`btn ${styles.orangeBtn}`}>Оплатить сейчас</button>;
};

export default PayButton;
