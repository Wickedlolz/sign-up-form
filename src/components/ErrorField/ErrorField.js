import styles from './ErrorField.module.css';

function ErrorField({ errorMessage }) {
    return <p className={styles.errorMessage}>{errorMessage}</p>;
}

export default ErrorField;
