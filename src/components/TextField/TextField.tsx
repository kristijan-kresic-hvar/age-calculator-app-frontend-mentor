import {FC, InputHTMLAttributes} from "react";
import styles from './TextField.module.scss'

interface Props {
    id: string;
    name: string;
    label?: string
    placeholder?: string
    inputProps?: InputHTMLAttributes<HTMLInputElement>
    error?: string
    parse?: (value: string) => string
}


const TextField: FC<Props> = ({id, name, label, placeholder = '', inputProps, error = '', parse}) => {
    return (
        <>
            {label && <label className={`${styles.label} ${error && styles.labelError}`} htmlFor={id}>{label}</label>}
            <input className={`${styles.input} ${error && styles.inputError}`} id={id} type="text" name={name}
                   placeholder={placeholder} {...inputProps}/>
            {error && <small className={styles.error}>{error}</small>}
        </>
    )
}

export default TextField