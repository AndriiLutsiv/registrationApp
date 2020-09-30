export const requiredField = (value) => {
    if (value) {
        return undefined;
    } else {
        return 'Field must not be empty'
    }
};