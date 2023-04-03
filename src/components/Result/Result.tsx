import {FC} from "react";
import styles from './Result.module.scss'

interface Props {
    day: number | null;
    month: number | null;
    year: number | null;
}

const Placeholder = () => {
    return (
        <div className={styles.placeholder}>
            <div className={styles.placeholderBar} aria-hidden/>
            <div className={styles.placeholderBar} aria-hidden/>
        </div>
    )
}

const Result: FC<Props> = ({day, month, year}) => {
    return (
        <div className={styles.results}>
            <div className={styles.resultItem}>
                {year || <Placeholder/>} <span>years</span>
            </div>
            <div className={styles.resultItem}>
                {month || <Placeholder/>} <span>months</span>
            </div>
            <div className={styles.resultItem}>
                {day || <Placeholder/>} <span>days</span>
            </div>
        </div>
    )
}

export default Result