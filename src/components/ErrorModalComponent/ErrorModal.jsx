import styles from './ErrorModal.module.css';
import Card from '../Card/Card';
import Button from '../Button/Button';
import { Fragment } from 'react';

const ErrorModal = ({ title, message, trigHandler }) => {
  return (
    <Fragment>
      <div className={styles.backdrop} onClick={trigHandler} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{title}</h2>
        </header>
        <div className={styles.content}>
          <p>{message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={trigHandler}>Okay</Button>
        </footer>
      </Card>
    </Fragment>
  );
};

export default ErrorModal;
