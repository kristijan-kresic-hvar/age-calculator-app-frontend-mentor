const countUp = (num: number, duration: number, callback: (result: number) => void) => {
    let count = 0;
    let increment = Math.ceil(num / 50); // Calculate the increment based on the value of num

    if (increment < 1) { // If num is less than 100, increment by 1
        increment = 1;
    }

    const timer = setInterval(() => {
        count += increment;
        if (count > num) { // Ensure that count does not exceed num
            count = num;
        }
        callback(count);
        if (count === num) {
            clearInterval(timer);
        }
    }, increment);
};

export default countUp;
