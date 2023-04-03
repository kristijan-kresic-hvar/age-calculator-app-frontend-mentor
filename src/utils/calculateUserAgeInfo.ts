const calculateUserAgeInfo = (day: number, month: number, year: number) => {
    const birthdate = new Date(year, month - 1, day);
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    let months = (today.getMonth() + 1) - (birthdate.getMonth() + 1);
    let days = today.getDate() - birthdate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
        age--;
        if (months < 0) {
            months += 12;
        }
        if (days < 0) {
            const monthAgo = new Date(today.getFullYear(), today.getMonth() - 1, 0);
            days += monthAgo.getDate();
        }
    }

    const totalMonths = (age * 12) + months;
    const totalDays = Math.ceil((today.getTime() - birthdate.getTime()) / (1000 * 60 * 60 * 24));

    return {age, totalMonths, totalDays};
};

export default calculateUserAgeInfo;