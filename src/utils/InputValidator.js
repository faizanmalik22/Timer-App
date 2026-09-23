export function isValidMinutes(value) {
    if (value.trim() === "") {
        return false;
    }

    const minutes = Number(value);

    return Number.isInteger(minutes) && minutes > 0;
}