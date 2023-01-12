import styles from './Modal.module.css';

function Modal({ msg }) {
    return (
        <div className={styles.container}>
            <p className={styles.message}>{msg}</p>
        </div>
    );
}

export default Modal;
