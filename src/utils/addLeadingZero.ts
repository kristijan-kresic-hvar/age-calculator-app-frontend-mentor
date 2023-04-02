const addLeadingZero = (num: number) => {

    if (!num) return null

    if (!isNaN(num) && num < 10 && num > 0 && String(num).length === 1) {
        return `0${num}`
    }
    return num
}

export default addLeadingZero