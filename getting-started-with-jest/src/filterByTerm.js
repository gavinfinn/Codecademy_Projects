function filterByTerm(inputArr, searchTerm) {
    if(!searchTerm) throw Error("searchTerm cannot be empty");
    if(!inputArr.length) throw Error("inputArr cannot be empty");
    const regex = new RegExp(searchTerm, "i") // convert searchTerm to regular expression to make it case-insensitive
    return inputArr.filter(function(arrayElement) { // for every element in the array
        return arrayElement.url.match(regex); // check url property and match it against a regular expression
    });
}

module.exports = filterByTerm;