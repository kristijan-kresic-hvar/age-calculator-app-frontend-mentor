import TextField from "./components/TextField/TextField";
import styles from './App.module.scss'
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import ageSchema from "./validations/ageSchema";
import addLeadingZero from "./utils/addLeadingZero";
import SubmitIcon from "./icons/SubmitIcon";

interface Inputs {
    day: string;
    month: string;
    year: string;
}

function App() {
    const {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>({
        mode: 'onBlur',
        resolver: zodResolver(ageSchema)
    });

    return (
        <div className={styles.app}>
            <div className={styles.formWrapper}>
                <div>
                    <TextField id="day" label="Day" name="day" error={errors.day?.message}
                               placeholder="DD"
                               inputProps={register('day', {
                                   onChange: (e) => {
                                       e.target.value = e.target.value.replace(/[^0-9]/g, '')
                                   },
                                   onBlur: (e) => {
                                       const day = parseInt(e.target.value, 10)
                                       e.target.value = addLeadingZero(day)
                                   }
                               })}/>
                </div>
                <div>
                    <TextField id="month" label="Month" name="month" error={errors.month?.message}
                               placeholder="MM"
                               inputProps={register('month', {
                                   onChange: (e) => {
                                       e.target.value = e.target.value.replace(/[^0-9]/g, '')
                                   },
                                   onBlur: (e) => {
                                       const month = parseInt(e.target.value, 10)
                                       e.target.value = addLeadingZero(month)
                                   }
                               })}/>
                </div>
                <div>
                    <TextField id="year" label="Year" name="year" error={errors.year?.message}
                               placeholder="YYYY"
                               inputProps={register('year', {
                                   onChange: (e) => {
                                       e.target.value = e.target.value.replace(/[^0-9]/g, '')
                                   }
                               })}/>
                </div>
            </div>
            <div className={styles.submitHandler}>
                <div/>
                <button type="submit">
                    <SubmitIcon/>
                </button>
            </div>
        </div>
    )
}

export default App
