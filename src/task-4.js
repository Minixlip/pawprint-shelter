function formatChipReading(reading) {
    if (typeof reading === 'number') {
        return "Chip #".concat(reading);
    }
    else {
        return "Chip #".concat(reading, " (hand-entered)");
    }
}
function describeIntake(record) {
    if ('foundLocation' in record) {
        return "This stray was found in ".concat(record.foundLocation);
    }
    if ('surrenderReason' in record) {
        return "The surrender reason is ".concat(record.surrenderReason);
    }
    return '';
}
function isUrgentStray(record) {
    if ('foundLocation' in record) {
        return record.species === 'dog';
    }
    return false;
}
function priorityList(record) {
    if (isUrgentStray(record)) {
        return 'prioritise';
    }
    return 'standard queue';
}
var test1 = {
    name: 'mo',
    ageYears: 28,
    species: 'dog',
    foundLocation: 'glasgow',
    notes: 'chicken',
};
console.log(describeIntake(test1));
console.log(priorityList(test1));
console.log(formatChipReading('l'));
