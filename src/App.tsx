import TextField from "./components/TextField/TextField";
import Result from "./components/Result/Result";
import styles from './App.module.scss'
import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import ageSchema from "./validations/ageSchema";
import addLeadingZero from "./utils/addLeadingZero";
import SubmitIcon from "./icons/SubmitIcon";
import calculateUserAgeInfo from "./utils/calculateUserAgeInfo";
import countUp from "./utils/countUp";
import {useState} from "react";

interface Inputs {
    day: string;
    month: string;
    year: string;
}

function App() {
    const [days, setDays] = useState<number | null>(null)
    const [months, setMonths] = useState<number | null>(null)
    const [years, setYears] = useState<number | null>(null)
    const [previousValues, setPreviousValues] = useState<Inputs>({day: '', month: '', year: ''})
    const {register, handleSubmit, getValues, watch, formState: {isValid, errors}} = useForm<Inputs>({
        mode: 'onBlur',
        resolver: zodResolver(ageSchema)
    });

    const processForm: SubmitHandler<Inputs> = (data) => {

        if (previousValues.day === data.day && previousValues.month === data.month && previousValues.year === data.year) return

        const {day, month, year} = data
        setPreviousValues({day, month, year})
        const {
            age,
            totalMonths,
            totalDays
        } = calculateUserAgeInfo(parseInt(day, 10), parseInt(month, 10), parseInt(year, 10))

        console.log(totalDays, totalMonths, age)
        countUp(age, 1500, (value) => {
            setYears(value)
        })
        countUp(totalMonths, 1500, (value) => {
            setMonths(value)
        })
        countUp(totalDays, 1500, (value) => {
            setDays(value)
        })
    }


    return (
        <div className={styles.app}>
            <form onSubmit={handleSubmit(processForm)}>
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
                        <SubmitIcon className={styles.icon}/>
                    </button>
                    <div/>
                </div>
            </form>
            <div>
                <Result day={days} month={months}
                        year={years}/>
            </div>
        </div>
    )
}

export default App
