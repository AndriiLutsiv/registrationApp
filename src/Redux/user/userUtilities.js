// function below creates only unique objects in array of objects
export const setFromUsers = (oldArray) => {
    let array = oldArray;
    var newArray = array.sort(function (a, b) {
        return a.name < b.name ? -1 : 1;
    }).sort(function (a, b) {
        return a.age < b.age ? -1 : 1;
    }).reduce(function (arr, el) {
        if (!arr.length) {
            arr.push(el);
        } else if (arr[arr.length - 1].name != el.name) {
            arr.push(el);
        } else if (arr[arr.length - 1].age != el.age) {
            arr.push(el);
        }
        return arr;
    }, []);

    return newArray;
};