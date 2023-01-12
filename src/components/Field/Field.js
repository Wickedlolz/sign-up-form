import styles from './Field.module.css';

function Field({ labelFor, labelText, type, inputName, value, onChange, id }) {
    return (
        <div>
            <label
                htmlFor={labelFor}
                className={
                    type !== 'radio' && type !== 'checkbox'
                        ? styles.labelTitle
                        : ''
                }
            >
                {labelText}
            </label>
            <input
                className={
                    type !== 'radio' && type !== 'checkbox' ? styles.input : ''
                }
                type={type}
                name={inputName}
                value={value}
                id={id}
                onChange={onChange}
            />
        </div>
    );
}

export default Field;
